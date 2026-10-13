from pathlib import Path
import fitz, io, urllib.request
from PIL import Image

ROOT=Path(__file__).resolve().parent.parent
FOLDER=ROOT/'Laura-DeLuca-Six-Proofread-Syllabi'
MAPPING={
 'Archives-Fall2026-Syllabus.pdf':'deluca-syllabus-F26.pdf',
 'Gendered-Spring2026-Syllabus.pdf':'deluca-syllabus-S26.pdf',
 'Cleopatra-Spring2025-Syllabus.pdf':'deluca-syllabus-S25.pdf',
 'AncientEgypt-Spring2024-Mini2-Syllabus.pdf':'deluca-syllabus-S24.pdf',
 'Queenship-Fall2025-Syllabus.pdf':'deluca-syllabus-F25.pdf',
 'ScienceFiction-Fall2023-Syllabus.pdf':'deluca-syllabus-F23.pdf'
}
REMOVE={
 'deluca-syllabus-S26.pdf':['Schedule transcribed from the original Spring 2026 course calendar.'],
 'deluca-syllabus-S25.pdf':['Digital illustration reproduced from the original course syllabus (artist and provenance unrecorded).'],
 'deluca-syllabus-S24.pdf':['Canvas supplies readings and due dates; activities are arranged by class date for this portfolio edition.'],
 'deluca-syllabus-F23.pdf':['Reading-to-meeting allocation is reconstructed for the teaching portfolio; the term dates follow CMU’s official Fall 2023 calendar.']
}
art=None
url='https://the-past.com/wp-content/uploads/2022/08/post-1_image0-59.jpg'
try:
    req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
    with urllib.request.urlopen(req,timeout=20) as response:
        art=Image.open(io.BytesIO(response.read())).convert('RGB')
    print('Downloaded requested Ancient Egypt painting from',url)
except Exception as exc:
    print('Art website unavailable; original cover already has the identical Alma-Tadema painting:',repr(exc))

for old,name in MAPPING.items():
    doc=fitz.open(FOLDER/old)
    for phrase in REMOVE.get(name,[]):
        count=0
        for page in doc:
            rects=page.search_for(phrase)
            for rect in rects:
                page.add_redact_annot(rect+(-.5,-.5,.5,.5),fill=False,cross_out=False)
                count+=1
            if rects: page.apply_redactions(images=0,graphics=0)
        if count==0: raise RuntimeError('Missing editorial note in '+name+': '+phrase)
    if name=='deluca-syllabus-S24.pdf':
        p=doc[0]
        oldcaption='Lawrence Alma-Tadema, Pastimes in Ancient Egypt 3,000 Years Ago (1863), oil on canvas. Harris Museum and Art Gallery, Preston.'
        rects=p.search_for(oldcaption)
        if len(rects)!=1: raise RuntimeError('Painting caption missing')
        for rect in rects:
            p.add_redact_annot(rect+(-1,-.5,1,.5),fill=False,cross_out=False)
        p.apply_redactions(images=0,graphics=0)
        if art is not None:
            iw,ih=art.size; ratio=496/285
            if iw/ih<ratio:
                hh=int(iw/ratio);top=(ih-hh)//2
                im=art.crop((0,top,iw,top+hh))
            else:
                ww=int(ih*ratio);left=(iw-ww)//2
                im=art.crop((left,0,left+ww,ih))
            temp=ROOT/'_pastimes_cover_asset.jpg'
            im.resize((1488,855)).save(temp,quality=89,optimize=True)
            p.replace_image(p.get_images(full=True)[0][0],filename=str(temp))
        for text,y in [
            ('Pastimes in Ancient Egypt 3,000 Years Ago, 1863, by Lawrence Alma-Tadema.',511),
            ('Oil on canvas. Image: Harris Museum and Art Gallery, Preston.',520)
        ]:
            width=fitz.get_text_length(text,fontname='tiro',fontsize=8)
            p.insert_text(((612-width)/2,y),text,fontname='tiro',fontsize=8,color=(.16,.25,.21))
    for page in doc:
        if any(x in page.get_text() for x in ('Schedule transcribed from','reconstructed for the teaching portfolio','portfolio edition','artist and provenance unrecorded')):
            raise RuntimeError('An editorial note remains: '+name)
    doc.save(FOLDER/name,garbage=4,deflate=True)
    print('Cleaned',name,'(',len(doc),'pages)')
portrait=Image.open(ROOT/'headshot.jpg').convert('RGB')
r,g,b=portrait.split()
r=r.point(lambda v:min(255,round(v*.984)))
g=g.point(lambda v:min(255,round(v*1.008)))
b=b.point(lambda v:min(255,round(v*1.038)))
Image.merge('RGB',(r,g,b)).save(ROOT/'headshot-balanced.jpg',quality=91,subsampling=0,optimize=True)
print('Created balanced headshot')
