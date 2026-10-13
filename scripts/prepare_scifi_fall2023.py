from pathlib import Path
import datetime
import re
import fitz

root = Path(__file__).resolve().parent.parent
folder = root / 'Laura-DeLuca-Six-Proofread-Syllabi'
source = folder / 'ScienceFiction-Spring2024-Mini1-Syllabus.pdf'
out = folder / 'ScienceFiction-Fall2023-Syllabus.pdf'
doc = fitz.open(source)

def replace(page, old, new, font='helv', size=10, color=(.19,.34,.29), x=None):
    rs = page.search_for(old)
    if len(rs) < 1:
        raise ValueError(f'{old!r} not found on page')
    r = rs[0]
    area = fitz.Rect(r.x0-1, r.y0-1, r.x1+1, r.y1+1)
    page.add_redact_annot(area, fill=None, cross_out=False)
    page.apply_redactions(images=0, graphics=0)
    page.insert_text((r.x0 if x is None else x, r.y1-1), new,
                     fontname=font, fontsize=size, color=color)

p = doc[0]
replace(p, 'Writing About Literature and Culture',
        'Writing About Literature, Art, and Culture',
        font='tibo', size=23.5, x=75)
replace(p, '76-106 A3   /   SPRING 2024   /   FIRST MINI',
        '76-106   /   FALL 2023   /   FIRST MINI',
        font='hebo', size=9.2, x=215)
replace(p, 'Classroom: DH 1209', 'Course materials on Canvas',
        font='helv', size=9.2)
replace(p, 'Spring 2024   /   COURSE SYLLABUS',
        'Fall 2023   /   COURSE SYLLABUS',
        font='helv', size=8.1)

start = datetime.date(2023,8,28)
end = datetime.date(2023,10,13)
meetings = [start + datetime.timedelta(days=i)
            for i in range((end-start).days+1)
            if (start+datetime.timedelta(days=i)).weekday() in (0,2,4)
            and start+datetime.timedelta(days=i) != datetime.date(2023,9,4)]
assert len(meetings) == 20

idx = 0
for pn in (8,9):
    page = doc[pn]
    replace(page, 'Spring 2024', 'Fall 2023',
            font='helv', size=14, color=(.14,.32,.26))
    replace(page, '76-106 A3', '76-106', font='tibo', size=10)
    dates = [s for s in page.get_text().splitlines()
             if re.match(r'^(Mon|Wed|Fri), (Jan|Feb|Mar) \d+', s)]
    assert len(dates) == 10, dates
    for old in dates:
        date = meetings[idx]
        idx += 1
        replace(page, old, date.strftime('%a, %b ') + str(date.day),
                font='hebo', size=9.5, color=(.14,.32,.26))
assert idx == 20
out.parent.mkdir(parents=True, exist_ok=True)
doc.save(out, garbage=4, deflate=True)
assert 'Spring 2024' not in ''.join(pg.get_text() for pg in doc)
print('Created', out)
