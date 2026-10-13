const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const menu=document.getElementById('menu-toggle');menu.addEventListener('click',()=>{const opened=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!opened));document.getElementById('site-nav').classList.toggle('open',!opened)});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');document.getElementById('site-nav').classList.remove('open')}));
(()=>{const DATA={
  "pubs": [
    [
      "Journal Articles",
      "“Womanhood denies my tongue to tell”: Women’s Vocality and Consent in The Revenger’s Tragedy and Titus Andronicus",
      "Explorations in Renaissance Culture · Forthcoming Fall 2026",
      "",
      "Forthcoming"
    ],
    [
      "Book Chapters",
      "Modeling Expertise at the Crossroads of Machine Learning and the Humanities",
      "With John R. Ladd, Jonathan Armoza, Taylor Berg-Kirkpatrick, Kartik Goyal, and Nikolai Vogler · Cultures of Scale: Disciplines, Data, and Labor · Debates in Digital Humanities · University of Minnesota Press · Forthcoming",
      "",
      "Forthcoming"
    ],
    [
      "Journal Articles",
      "The Afterlife of Cleopatra: Anonymity, Inheritance, and the Archive of Print",
      "Journal for Early Modern Cultural Studies 25.3–4 · Accepted pending final peer review · Forthcoming",
      "",
      "Accepted pending review"
    ],
    [
      "Journal Articles",
      "The Dangers of Idealized Femininity in Early Modern Sophonisba Tragedies",
      "Early Theatre 28.2 (2025): 35–52",
      "https://muse.jhu.edu/article/977529",
      "Published"
    ],
    [
      "Journal Articles",
      "Remediation and Spectral Bibliography: Ghost Hunting in Early Modern Books",
      "Digital Studies / Le champ numérique (2025)",
      "https://doi.org/10.16995/dscn.11108",
      "Published"
    ],
    [
      "Journal Articles",
      "Developing Students’ Statistical Expertise in the Age of AI",
      "With Alex Reinhart, Gordon Weinberg, Sydney Miller, Michael Laudenbach, and David West Brown · Journal of Statistics and Data Science Education (2025)",
      "https://doi.org/10.1080/26939169.2025.2497547",
      "Published"
    ],
    [
      "Journal Articles",
      "Who Printed Shakespeare’s Fourth Folio?",
      "With Christopher N. Warren, Samuel V. Lemley, D. J. Schuldt, Elizabeth Dieterich, Max G’Sell, Taylor Berg-Kirkpatrick, Kari Thomas, Kartik Goyal, and Nikolai Vogler · Shakespeare Quarterly",
      "https://doi.org/10.1093/sq/quad021",
      "Published"
    ],
    [
      "Book Chapters",
      "Medieval Dido: Christine de Pizan and the Renaissance Afterlife of Exemplary Elissa",
      "Medieval Women Handbook · Manuscript submitted",
      "",
      "Submitted"
    ],
    [
      "Book Chapters",
      "Everything There is to be Learned about Seventeenth-Century Types: Computational Bibliography & The Printers of Shakespeare’s Fourth Folio",
      "With Samuel V. Lemley, Christopher N. Warren, DJ Schuldt, Kari Thomas, and Nikolai Vogler · In The Four Shakespeare Folios, 1623–2023, ed. Samuel V. Lemley · Penn State University Press (2024)",
      "",
      "Published"
    ],
    [
      "Essays & Reviews",
      "Review of Poetry’s Data: Digital Humanities and the History of Prosody, by Meredith Martin",
      "SHARP News (2026)",
      "https://sharpweb.org/sharpnews/2026/05/18/meredith-martin-poetrys-data-digital-humanities-and-the-history-of-prosody/",
      "Published"
    ],
    [
      "Essays & Reviews",
      "Review of Scripts of Blackness: Early Modern Performance Culture and the Making of Race, by Noémie Ndiaye",
      "Shakespeare Quarterly (September 2024)",
      "https://doi.org/10.1093/sq/quae030",
      "Published"
    ],
    [
      "Essays & Reviews",
      "Virtue, Impressed: Classical Women in Early Modern Emblems",
      "Pittsburgh Review (July 2026)",
      "https://pghrev.com/emblem-or-instagram",
      "Published"
    ]
  ],
  "talks": [
    [
      "2026",
      "Exploring First-Year Students’ Perceptions of Cultural Biases and the Humanities Through AI Curricular Integration",
      "Scholar to Scholar, Carnegie Mellon University · March 2026"
    ],
    [
      "2026",
      "Closet Conduct: White Martyrdom and Exemplarity in The Tragedy of Mariam",
      "Shakespeare Association of America · Denver · March 2026"
    ],
    [
      "2026",
      "Emblems of Virtue: The Afterlives of Ancient Women in Early Modern Print Culture",
      "Renaissance Society of America · San Francisco · February 2026"
    ],
    [
      "2026",
      "Pyres and Empires: Dido’s Historiographic Agency in Marlowe and Nashe’s Dido, Queen of Carthage",
      "NeMLA · Pittsburgh · March 2026"
    ],
    [
      "2025",
      "Recover the RenAIssance: Using Computational Bibliography to Reconstruct the Histories of Early Modern Women in Print Culture",
      "Renaissance Society of America, Lightning Talk · June 2025"
    ],
    [
      "2025",
      "Cleopatra’s Conduct: Racial Ambiguity and Exemplarity in Early Modern Drama",
      "Shakespeare Association of America · Boston · March 2025"
    ],
    [
      "2024",
      "Unveiling Women’s Legacies: Rediscovering Marginalized Narratives via Early Modern Book History and Classical Reception",
      "Renaissance Society of America · Chicago · March 2024"
    ],
    [
      "2023",
      "Racialized Royalty in the Renaissance: (Anti-)Models of Embodied Colonial Fantasy",
      "Northern Early Modern Network Works in Progress · November 2023"
    ],
    [
      "2023",
      "Adopting Ancient Royalty: Cleopatra VII in Early Modern Drama",
      "American Shakespeare Center Blackfriars Conference · November 2023"
    ],
    [
      "2023",
      "Epistolary Queerness: A Medieval and Early Modern Study on Sexuality",
      "International Medieval Congress · Leeds · July 2023"
    ],
    [
      "2023",
      "Exemplary Sexuality in Early Modern Drama: The Tragedies of Sophonisba",
      "Medieval and Early Modern Studies Summer Festival · June 2023"
    ],
    [
      "2023",
      "Premodern Queer(ed)ness: Hildegard of Bingen, James I, and George Villiers",
      "International Congress on Medieval Studies · May 2023"
    ],
    [
      "2023",
      "Classical Reception in Early Modern Texts: The Production of Ancient Queenships",
      "All the World’s a Stage Conference · April 2023"
    ],
    [
      "2023",
      "Revising Ancient Royalty in the Renaissance: Mariamne I",
      "NeMLA · March 2023"
    ],
    [
      "2022",
      "Ancient Royalty on the English Stage: A Shakespearean Genealogy",
      "Ohio Valley Shakespeare Conference · October 2022"
    ],
    [
      "2022",
      "Breath, Wind, Air, and Vapor: Power within Atmospheric Intangibility in Antony and Cleopatra",
      "British Graduate Shakespeare Conference · June 2022"
    ]
  ],
  "classes": [
    [
      "Fall 2026",
      "Archives and Afterlives: Interpreting Cultural Artifacts in the Digital Age"
    ],
    [
      "Spring 2026",
      "Gendered Sovereignty: Queenship and Power in Literature and Culture (two sections)"
    ],
    [
      "Fall 2025",
      "Queenship: Narratives of Power and Identity"
    ],
    [
      "Spring & Summer 2025",
      "Cleopatra’s Cultural Afterlife: Representations of Ancient Egypt in Popular Discourse"
    ],
    [
      "Spring 2024",
      "Writing about Ancient Egypt (two sections)"
    ],
    [
      "Fall 2023",
      "Writing about Literature, Art, and Culture"
    ]
  ],
  "awards": [
    [
      "2026",
      "Schaffer Dissertation Fellowship"
    ],
    [
      "2026",
      "RSA–Virginia Fox Stern Fellowship"
    ],
    [
      "2025",
      "CMU Humanities Center Graduate Conference Grant"
    ],
    [
      "2025",
      "Folger Shakespeare Library RaceB4Race Grant"
    ],
    [
      "2025",
      "GAITAR Grant @Scale"
    ],
    [
      "2024–present",
      "Tartan Research Data Alliance Fellow"
    ],
    [
      "2024",
      "National Endowment for the Humanities Fellowship"
    ],
    [
      "2024–2025",
      "GAITAR Grant, Eberly Center"
    ],
    [
      "2023",
      "Bibliographical Society of America Peck-Stacpoole Grant"
    ],
    [
      "2023",
      "A. W. Mellon Digital Humanities Fellowship"
    ],
    [
      "2022–present",
      "National Science Foundation Early Modern Print/Probability Research Fellow"
    ]
  ],
  "projects": [
    [
      "RenAI",
      "Research collaborator · 2025–present"
    ],
    [
      "Print and Probability",
      "Research collaborator · 2022–present"
    ],
    [
      "DREaM — Distant Reading Early Modernity",
      "Research collaborator · 2025–present"
    ],
    [
      "Teaching Statistics Pedagogy Lab",
      "Research collaborator · 2023–present"
    ],
    [
      "Shakespeare in VR",
      "Research collaborator · 2023"
    ],
    [
      "MyScribe AI Writing Tool",
      "Research collaborator · 2023"
    ],
    [
      "Docuscope Write and Audit",
      "Research collaborator · 2022"
    ]
  ],
  "service": [
    [
      "LCS Colloquium Committee",
      "Co-Chair · 2024–present"
    ],
    [
      "First-Year Writing Lecturer Search Committee",
      "Member · 2026"
    ],
    [
      "Center for Early Modern Print, Networks, and Performance",
      "Research Assistant · 2023–present"
    ],
    [
      "Renaissance Society of America Digital Committee",
      "Member · 2023–present"
    ],
    [
      "Women Writers Project, Northeastern University",
      "Professional service · 2023–present"
    ],
    [
      "Bridges and Borders Graduate Conference",
      "Co-organizer · 2022–present"
    ],
    [
      "Graduate Mentorship",
      "Graduate Mentor · 2023–present"
    ]
  ]
};
function renderPubs(cat){const items=DATA.pubs.filter(p=>cat==='All'||p[0]===cat);document.getElementById('pub-list').innerHTML=items.map(p=>`<article class="pub"><div class="pub-type">${esc(p[0])}<em>${esc(p[4])}</em></div><div><p class="pub-title">${esc(p[1])}</p><p class="pub-details">${esc(p[2])}</p></div>${p[3]?`<a class="pub-link" href="${esc(p[3])}" target="_blank" rel="noopener" aria-label="Read ${esc(p[1])}">↗</a>`:'<span></span>'}</article>`).join('');document.getElementById('pub-empty').hidden=items.length!==0;}
document.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-category]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderPubs(b.dataset.category)}));renderPubs('All');
const rows=(id,items,reverse=false)=>document.getElementById(id).innerHTML=items.map(p=>`<article class="entry"><div class="entry-title">${esc(p[reverse?0:1])}</div><div class="entry-meta">${esc(p[reverse?1:0])}</div></article>`).join('');
const awardDetails=[
  ['CMU','Carnegie Mellon dissertation fellowship supporting the completion of doctoral research.','www.cmu.edu'],
  ['RSA','Renaissance Society of America fellowship supporting research in Renaissance studies.','www.rsa.org'],
  ['CMU','Humanities Center support for presenting research at an academic conference.','www.cmu.edu'],
  ['Folger','Folger Shakespeare Library grant connected to the RaceB4Race initiative.','www.folger.edu'],
  ['CMU','GAITAR @Scale support for pedagogical work through the Eberly Center.','www.cmu.edu'],
  ['CMU','Fellowship through Carnegie Mellon’s research data community.','www.cmu.edu'],
  ['NEH','Research support associated with the Print & Probability collaboration.','www.neh.gov'],
  ['CMU','Eberly Center GAITAR grant supporting teaching innovation.','www.cmu.edu'],
  ['BSA','Bibliographical Society of America grant supporting bibliographical research.','bibsocamer.org'],
  ['Mellon','Digital humanities fellowship supporting interdisciplinary research.','www.mellon.org'],
  ['NSF','Research fellowship associated with the NSF-supported Print & Probability project.','www.nsf.gov']
];
document.getElementById('awards-list').innerHTML=DATA.awards.map((p,i)=>{const [label,description,domain]=awardDetails[i]||['Award','Research and professional support.',''];const mark=domain?'<img src="https://www.google.com/s2/favicons?domain='+esc(domain)+'&amp;sz=128" alt="" loading="lazy">':'<span class="award-monogram">'+esc(label)+'</span>';return '<article class="entry"><div class="award-mark" aria-hidden="true">'+mark+'</div><div class="entry-meta">'+esc(p[0])+'</div><div class="entry-title">'+esc(p[1])+'</div><p class="award-description">'+esc(description)+'</p></article>'}).join('');
rows('teaching-list',DATA.classes);rows('projects-list',DATA.projects,true);rows('service-list',DATA.service,true);
document.getElementById('talks-list').innerHTML=DATA.talks.map(p=>`<article class="entry"><div class="entry-title">${esc(p[1])}</div><div class="entry-meta">${esc(p[2])}</div></article>`).join('');
})();
document.getElementById('year').textContent=new Date().getFullYear();
