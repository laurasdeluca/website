from pathlib import Path
import base64
import hashlib
import subprocess
import tempfile
import os
import fitz

ROOT=Path(__file__).resolve().parent.parent
CV=ROOT/"DeLuca-CV-Oct-2026.pdf"
B64=ROOT/"scripts/cv_updated_oct2026_delta.b64"
compressed=base64.b64decode(B64.read_text().strip(),validate=True)
assert hashlib.sha256(compressed).hexdigest()=="25680fdb99d4efe0400bbaa45aff29f56e009de6f69d641dbcd7cdcc73ea7349"
lengths=[1085,1461,1443,742]
assert sum(lengths)==len(compressed)
pages=[6,7,8,9]
oldsha=[
 "b6c0502ecb90087861e242f3b20bee053662e6220a39619042e82b0d9ff7fdbd",
 "6760540be19c1123130ff05f59661216bbdf897ef5374e520808b4e54d3f21ed",
 "32a2a75348c399544b4fec3bdfa8706a565b5c415c0af5195ac98184d9570aed",
 "621a29b2bc2197b241b115ebf8dba01bf21c5693f2a66b3abed1085f1ea4573b"
]
newsha=[
 "f9c56af8f3698fbe478ff71d7d9330f3fabafdd858a76166e9c5c2c0101e5715",
 "840516c530769d05161822c2a15ac70e0c099d152a6e5887038076cd12abed1f",
 "b4bd9b083668d4037c9ca405d604cc76d10c3e45ad5f9c080fe6ab7c8b1e84dd",
 "523ed96fedbd0fe9d71b10c32858ca8e9d74874dd3149de7cbfa8e314f0f52df"
]
hash=lambda b:hashlib.sha256(b).hexdigest()
doc=fitz.open(CV)
assert len(doc)==9
old_status=[hash(doc.xref_stream(doc[i-1].get_contents()[0])) for i in pages]
if old_status==newsha:
  print("Latest CV content is already published.")
  raise SystemExit(0)
assert old_status==oldsha, ("Unexpected current CV streams:",list(zip(pages,old_status)))
with tempfile.TemporaryDirectory() as tmp:
  work=Path(tmp);offset=0
  for i,n in enumerate(pages):
    part=compressed[offset:offset+lengths[i]]
    offset+=lengths[i]
    old=doc.xref_stream(doc[n-1].get_contents()[0])
    (work/"old.bin").write_bytes(old)
    (work/"patch.zst").write_bytes(part)
    subprocess.run([
      "zstd","-q","-d","--patch-from="+str(work/"old.bin"),
      str(work/"patch.zst"),"-f","-o",str(work/"updated.bin")
    ],check=True)
    updated=(work/"updated.bin").read_bytes()
    assert hash(updated)==newsha[i], ("Patch integrity failed",n)
    doc.update_stream(doc[n-1].get_contents()[0],updated)
  output=work/"updated-cv.pdf"
  doc.save(output,garbage=4,deflate=True)
  doc.close()
  test=fitz.open(output)
  assert len(test)==9
  assert "Git and GitHub for Version Control" in test[5].get_text()
  assert "Co-coordinator, Ohio Valley Shakespeare Conference" in test[7].get_text()
  assert "Binghamton University Announces" in test[8].get_text()
  assert "Laura S. DeLuca" in test[0].get_text()
  for i,n in enumerate(pages):
    assert hash(test.xref_stream(test[n-1].get_contents()[0]))==newsha[i]
  test.close()
  os.replace(output,CV)
print("Published the nine-page updated CV: unchanged original style and exact uploaded page contents.")
