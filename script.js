
/* ================= CV Maker v2 ================= */
(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}

/* ---------- i18n ---------- */
var I18N={
en:{appTitle:"CV Maker",preview:"Preview",livePreview:"Live preview",previewHint:"Updates as you type",
menuBuilder:"Builder",menuTemplates:"Templates",menuGuide:"Guide",
guideTitle:"How to build your CV",
guide1:"Fill in your information step by step using the Next button.",
guide2:"On the Summary step, tap \u201CGenerate summary for me\u201D — the site writes a professional draft from your experience, skills and education. Edit it in your own words.",
guide3:"Pick a template and accent color on the Design step.",
guide4:"Tap Download PDF — the file downloads directly to your device.",
steps:["Personal","Summary","Education","Experience","Skills & Languages","Design & Export"],
cvStrength:"CV strength",
sPersonal:"Personal Information",sPersonalSub:"Who you are and how employers can reach you.",
fullName:"Full name",fullNamePh:"e.g. Ahmad Ahmadi",jobTitle:"Job title",jobTitlePh:"e.g. Web Developer",
email:"Email",phone:"Phone",address:"Address",addressPh:"e.g. Kabul, Afghanistan",website:"Website / LinkedIn (optional)",
tipTitle:"Tip",tipPersonal:"Use a professional email address (firstname.lastname@email.com). Double-check your phone number — most employers call before emailing.",
sSummary:"Professional Summary",sSummarySub:"2–4 sentences about who you are professionally.",summary:"Summary",
summaryPh:"Tap \u201CGenerate summary for me\u201D or write your own...",
genSummary:"Generate summary for me",generatingPdf:"Creating PDF...",
tipSummary:"The generator writes a draft from your experience, skills and education — then edit it in your own words.",
sEducation:"Education",sEducationSub:"Your degrees and studies, newest first.",
degree:"Degree",degreePh:"e.g. BSc Computer Science",school:"School / University",schoolPh:"e.g. Kabul University",
startYear:"Start year",endYear:"End year",details:"Details (optional)",detailsPh:"Relevant courses, achievements...",
addEducation:"Add education",remove:"Remove",tipEducation:"Recent graduate? Put education before work experience. Include relevant courses or projects if you lack work history.",
sExperience:"Work Experience",sExperienceSub:"Jobs, internships, freelance and volunteer work.",
jobTitle2:"Job title",company:"Company",companyPh:"e.g. Tech Solutions",
addExperience:"Add experience",tipExperience:"Start each line with a strong verb: built, managed, taught, organized. Add numbers: \u201CTaught English to 30 students\u201D, \u201CBuilt 5 websites\u201D.",
sSkillsLang:"Skills & Languages",sSkillsLangSub:"What you can do and which languages you speak.",
skills:"Skills",skillsPh:"Type a skill and press Enter",languages:"Languages",languagePh:"Language",
addLanguage:"Add language",tipSkills:"List 6–10 skills most relevant to the job you want — not everything you have ever tried. Strongest first.",
levels:["Beginner","Intermediate","Advanced","Fluent","Native"],
sDesign:"Design & Export",sDesignSub:"Choose a look, then download your CV as a PDF file.",
chooseTemplate:"Choose template",tplModern:"Modern",tplClassic:"Classic",tplMinimal:"Minimal",
accentColor:"Accent color",downloadPdf:"Download PDF",
pdfNote:"The PDF file downloads directly — on iPhone choose \u201CSave to Files\u201D when prompted.",
fillExample:"Fill with example",clearAll:"Clear all",autosave:"\u2713 All changes are saved automatically in this browser.",
previous:"Previous",next:"Next",
cvSummary:"Professional Summary",cvExperience:"Work Experience",cvEducation:"Education",cvSkills:"Skills",cvLanguages:"Languages",cvContact:"Contact",
present:"Present",confirmClear:"Clear everything and start over?",confirmExample:"Fill with example data? This replaces what you typed."},
da:{appTitle:"سی‌وی ساز",preview:"پیش‌نمایش",livePreview:"پیش‌نمایش زنده",previewHint:"همزمان با تایپ تازه می‌شود",
menuBuilder:"ساخت",menuTemplates:"قالب‌ها",menuGuide:"رهنما",
guideTitle:"چگونه سی‌وی بسازید",
guide1:"معلومات خود را قدم‌به‌قدم با دکمه «بعدی» وارد کنید.",
guide2:"در مرحله خلاصه، «تولید خلاصه برایم» را بزنید — سایت از تجربه، مهارت‌ها و تحصیلات شما یک مسوده مسلکی می‌نویسد. بعد با کلمات خودتان ویرایش کنید.",
guide3:"در مرحله دیزاین، قالب و رنگ مورد نظر را انتخاب کنید.",
guide4:"دکمه دانلود PDF را بزنید — فایل مستقیماً دانلود می‌شود.",
steps:["شخصی","خلاصه","تحصیلات","تجربه","مهارت‌ها و زبان‌ها","دیزاین و خروجی"],
cvStrength:"قدرت سی‌وی",
sPersonal:"معلومات شخصی",sPersonalSub:"کی هستید و کارفرما چگونه با شما تماس بگیرد.",
fullName:"نام مکمل",fullNamePh:"مثلاً احمد احمدی",jobTitle:"عنوان وظیفه",jobTitlePh:"مثلاً توسعه‌دهنده وب",
email:"ایمیل",phone:"تلیفون",address:"آدرس",addressPh:"مثلاً کابل، افغانستان",website:"وب‌سایت / لینکدین (اختیاری)",
tipTitle:"رهنمایی",tipPersonal:"از یک ایمیل مسلکی استفاده کنید (نام.تخلص@email.com). نمبر تلیفون را دوباره بررسی کنید — بیشتر کارفرماها اول زنگ می‌زنند.",
sSummary:"خلاصه مسلکی",sSummarySub:"۲–۴ جمله درباره شما به‌صورت مسلکی.",summary:"خلاصه",
summaryPh:"«تولید خلاصه برایم» را بزنید یا خودتان بنویسید...",
genSummary:"تولید خلاصه برایم",generatingPdf:"در حال ساخت PDF...",
tipSummary:"تولیدکننده از تجربه، مهارت‌ها و تحصیلات شما یک مسوده می‌نویسد — بعد با کلمات خودتان ویرایش کنید.",
sEducation:"تحصیلات",sEducationSub:"درجه‌ها و تحصیلات شما، از جدیدترین شروع کنید.",
degree:"درجه تحصیلی",degreePh:"مثلاً لیسانس کمپیوتر ساینس",school:"مکتب / پوهنتون",schoolPh:"مثلاً پوهنتون کابل",
startYear:"سال شروع",endYear:"سال ختم",details:"جزئیات (اختیاری)",detailsPh:"کورس‌های مرتبط، دستاوردها...",
addEducation:"افزودن تحصیلات",remove:"حذف",tipEducation:"تازه فارغ شده‌اید؟ تحصیلات را پیش از تجربه کاری بنویسید. اگر سابقه کاری ندارید، کورس‌ها یا پروژه‌های مرتبط را اضافه کنید.",
sExperience:"تجربه کاری",sExperienceSub:"وظایف، انترنشیپ، فریلنسری و کار داوطلبانه.",
jobTitle2:"عنوان وظیفه",company:"شرکت",companyPh:"مثلاً Tech Solutions",
addExperience:"افزودن تجربه",tipExperience:"هر خط را با یک فعل قوی شروع کنید: ساختم، مدیریت کردم، تدریس کردم. عدد اضافه کنید: «انگلیسی را به ۳۰ شاگرد تدریس کردم».",
sSkillsLang:"مهارت‌ها و زبان‌ها",sSkillsLangSub:"چه کارهایی بلدید و کدام زبان‌ها را می‌دانید.",
skills:"مهارت‌ها",skillsPh:"یک مهارت بنویسید و Enter بزنید",languages:"زبان‌ها",languagePh:"زبان",
addLanguage:"افزودن زبان",tipSkills:"۶–۱۰ مهارت مرتبط با وظیفه مورد نظر را بنویسید — نه همه چیزهایی که امتحان کرده‌اید. قوی‌ترین اول.",
levels:["ابتدایی","متوسط","پیشرفته","روان","مادری"],
sDesign:"دیزاین و خروجی",sDesignSub:"یک قالب انتخاب کنید، بعد سی‌وی را به‌صورت فایل PDF دانلود کنید.",
chooseTemplate:"قالب را انتخاب کنید",tplModern:"مدرن",tplClassic:"کلاسیک",tplMinimal:"ساده",
accentColor:"رنگ اصلی",downloadPdf:"دانلود PDF",
pdfNote:"فایل PDF مستقیماً دانلود می‌شود — در آیفون «ذخیره در فایل‌ها» را انتخاب کنید.",
fillExample:"پر کردن با مثال",clearAll:"پاک کردن همه",autosave:"\u2713 همه تغییرات به‌صورت خودکار در این براوزر ذخیره می‌شود.",
previous:"قبلی",next:"بعدی",
cvSummary:"خلاصه مسلکی",cvExperience:"تجربه کاری",cvEducation:"تحصیلات",cvSkills:"مهارت‌ها",cvLanguages:"زبان‌ها",cvContact:"تماس",
present:"تا اکنون",confirmClear:"همه چیز پاک و از سر شروع شود؟",confirmExample:"با معلومات مثال خانه‌پری شود؟ آنچه نوشته‌اید جایگزین می‌شود."}
};
var ACCENTS=["#2563eb","#0d9488","#7c3aed","#db2777","#1f2937"];

/* ---------- state ---------- */
var KEY="cv-maker-v2";
function blankState(){return{lang:"en",theme:"light",tpl:"modern",accent:"#2563eb",
 personal:{name:"",title:"",email:"",phone:"",address:"",website:""},summary:"",
 education:[],experience:[],skills:[],languages:[]};}
var S=blankState();
try{var raw=localStorage.getItem(KEY);if(raw){var d=JSON.parse(raw);if(d&&typeof d==="object")S=Object.assign(blankState(),d);}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
var step=0;var T=function(){return I18N[S.lang]};

/* ---------- helpers ---------- */
function contactLines(){
  var p=S.personal,out=[];
  if(p.email)out.push(esc(p.email));if(p.phone)out.push(esc(p.phone));
  if(p.address)out.push(esc(p.address));if(p.website)out.push(esc(p.website));
  return out;
}
function dateRange(e){var t=T();var s=e.start||"",en=e.end||t.present;return esc(s+(s||en?" – ":"")+en)}
function bullets(txt){return String(txt||"").split("\n").map(function(x){return x.trim()}).filter(Boolean)}
function totalYears(){
  var now=new Date().getFullYear(),sum=0;
  S.experience.forEach(function(e){
    var s=parseInt(e.start,10),en=parseInt(e.end,10);
    if(!isNaN(s)){var d=(isNaN(en)?now:en)-s;if(d>0)sum+=d;}
  });
  return sum;
}
/* Auto-generate a professional summary from the user's own data */
function composeSummary(){
  var p=S.personal,da=(S.lang==="da");
  var name=(p.name||"").trim(),title=(p.title||"").trim();
  var years=totalYears(),skills=S.skills.slice(0,3);
  var edu=S.education.find(function(e){return e.degree||e.school});
  if(da){
    var s=(name||"این فرد")+" یک "+(title||"مسلکی")+" است";
    if(years>0)s+=" با "+years+" سال تجربه کاری";
    if(skills.length)s+=". مهارت‌ها: "+skills.join("، ");
    if(edu&&(edu.degree||edu.school))s+=". "+(edu.degree?edu.degree+(edu.school?" از "+edu.school:""):edu.school);
    return s+".";
  }
  var article=/^[aeiou]/i.test(title)?"an":"a";
  var s=(name||"This person")+" is "+(title?article+" "+title:"a professional");
  if(years>0)s+=" with "+years+" year"+(years>1?"s":"")+" of experience";
  if(skills.length)s+=". Skilled in "+skills.join(", ");
  if(edu&&(edu.degree||edu.school))s+=". "+(edu.degree?edu.degree+(edu.school?" from "+edu.school:""):edu.school);
  return s+".";
}
function strength(){
  var p=S.personal,pts=0;
  if(p.name)pts+=12;if(p.title)pts+=8;if(p.email)pts+=8;if(p.phone)pts+=7;
  if(S.summary.trim())pts+=12;
  if(S.education.some(function(e){return e.degree||e.school}))pts+=13;
  if(S.experience.some(function(e){return e.title||e.company}))pts+=15;
  if(S.skills.length>=3)pts+=12;else if(S.skills.length)pts+=6;
  if(S.languages.length)pts+=13;
  return Math.min(100,pts);
}

/* ---------- CV templates (print-safe: accent via inline styles) ---------- */
function cvData(){
  var p=S.personal,ac=S.accent;
  return{
    p:p,ac:ac,dir:S.lang==="da"?"rtl":"ltr",
    edu:S.education.filter(function(e){return e.degree||e.school}),
    exp:S.experience.filter(function(e){return e.title||e.company}),
    skills:S.skills.slice(),langs:S.languages.filter(function(l){return l.name}),
    contact:contactLines()
  };
}
function jobHTML(e,ac){
  var det=bullets(e.details),detH=det.length?"<ul>"+det.map(function(d){return"<li>"+esc(d)+"</li>"}).join("")+"</ul>":"";
  return '<div class="job"><div class="jh"><span>'+esc(e.title||e.degree)+'</span><span class="dates">'+dateRange(e)+'</span></div>'+
    '<div class="co">'+esc(e.company||e.school)+'</div>'+detH+'</div>';
}
function renderCV(){
  var t=T(),d=cvData(),p=d.p,ac=d.ac;
  var edu=d.edu.map(function(e){return jobHTML(e,ac)}).join("");
  var exp=d.exp.map(function(e){return jobHTML(e,ac)}).join("");
  var langs=d.langs.map(function(l){return"<li>"+esc(l.name)+" — "+esc(l.level)+"</li>"}).join("");
  var html="";
  if(S.tpl==="modern"){
    html='<div class="cv cv-modern" dir="'+d.dir+'">'+
      '<div class="side" style="background:'+ac+'">'+
        '<h4>'+t.cvContact+'</h4><p>'+d.contact.join("<br>")+'</p>'+
        (d.skills.length?'<h4>'+t.cvSkills+'</h4><ul>'+d.skills.map(function(s){return"<li>"+esc(s)+"</li>"}).join("")+'</ul>':"")+
        (langs?'<h4>'+t.cvLanguages+'</h4><ul>'+langs+'</ul>':"")+
      '</div><div class="main">'+
        '<div class="name" style="color:'+ac+'">'+esc(p.name)+'</div>'+
        '<div class="title">'+esc(p.title)+'</div>'+
        '<div class="contact">'+d.contact.join(" &nbsp;·&nbsp; ")+'</div>'+
        (S.summary.trim()?'<div class="sec" style="color:'+ac+';border-color:'+ac+'">'+t.cvSummary+'</div><p>'+esc(S.summary)+'</p>':"")+
        (exp?'<div class="sec" style="color:'+ac+';border-color:'+ac+'">'+t.cvExperience+'</div>'+exp:"")+
        (edu?'<div class="sec" style="color:'+ac+';border-color:'+ac+'">'+t.cvEducation+'</div>'+edu:"")+
      '</div></div>';
  }else if(S.tpl==="classic"){
    html='<div class="cv cv-classic" dir="'+d.dir+'">'+
      '<div class="chead" style="border-color:'+ac+'">'+
        '<div class="name">'+esc(p.name)+'</div>'+
        '<div class="title">'+esc(p.title)+'</div>'+
        '<div class="contact">'+d.contact.join(" &nbsp;•&nbsp; ")+'</div>'+
      '</div>'+
      (S.summary.trim()?'<div class="sec" style="color:'+ac+'">'+t.cvSummary+'</div><p>'+esc(S.summary)+'</p>':"")+
      (exp?'<div class="sec" style="color:'+ac+'">'+t.cvExperience+'</div>'+exp:"")+
      (edu?'<div class="sec" style="color:'+ac+'">'+t.cvEducation+'</div>'+edu:"")+
      (d.skills.length?'<div class="sec" style="color:'+ac+'">'+t.cvSkills+'</div><p>'+d.skills.map(esc).join(" &nbsp;•&nbsp; ")+'</p>':"")+
      (langs?'<div class="sec" style="color:'+ac+'">'+t.cvLanguages+'</div><ul>'+langs+'</ul>':"")+
    '</div>';
  }else{
    html='<div class="cv cv-minimal" dir="'+d.dir+'">'+
      '<div class="name">'+esc(p.name)+'</div>'+
      '<div class="title" style="color:'+ac+'">'+esc(p.title)+'</div>'+
      '<div class="contact">'+d.contact.join(" &nbsp;·&nbsp; ")+'</div><hr class="rule">'+
      (S.summary.trim()?'<div class="sec">'+t.cvSummary+'</div><p>'+esc(S.summary)+'</p>':"")+
      (exp?'<div class="sec">'+t.cvExperience+'</div>'+exp:"")+
      (edu?'<div class="sec">'+t.cvEducation+'</div>'+edu:"")+
      (d.skills.length?'<div class="sec">'+t.cvSkills+'</div><div class="skill-pills">'+d.skills.map(function(s){return"<span>"+esc(s)+"</span>"}).join("")+'</div>':"")+
      (langs?'<div class="sec">'+t.cvLanguages+'</div><ul>'+langs+'</ul>':"")+
    '</div>';
  }
  $("#cvRender").innerHTML=html;
  var pct=strength();
  $("#meterPct").textContent=pct+"%";
  $("#meterFill").style.width=pct+"%";
}

/* ---------- form rendering ---------- */
function entryRow(kind,i,e){
  var t=T();
  var flds=kind==="edu"?
    '<div class="field"><label>'+t.degree+'</label><input data-k="degree" value="'+esc(e.degree||"")+'" placeholder="'+esc(t.degreePh)+'"></div>'+
    '<div class="field"><label>'+t.school+'</label><input data-k="school" value="'+esc(e.school||"")+'" placeholder="'+esc(t.schoolPh)+'"></div>'+
    '<div class="grid2"><div class="field"><label>'+t.startYear+'</label><input data-k="start" value="'+esc(e.start||"")+'" placeholder="2020"></div>'+
    '<div class="field"><label>'+t.endYear+'</label><input data-k="end" value="'+esc(e.end||"")+'" placeholder="2024"></div></div>'+
    '<div class="field"><label>'+t.details+'</label><textarea data-k="details" placeholder="'+esc(t.detailsPh)+'"></textarea></div>'
    :
    '<div class="field"><label>'+t.jobTitle2+'</label><input data-k="title" value="'+esc(e.title||"")+'" placeholder="'+esc(t.jobTitlePh)+'"></div>'+
    '<div class="field"><label>'+t.company+'</label><input data-k="company" value="'+esc(e.company||"")+'" placeholder="'+esc(t.companyPh)+'"></div>'+
    '<div class="grid2"><div class="field"><label>'+t.startYear+'</label><input data-k="start" value="'+esc(e.start||"")+'" placeholder="2022"></div>'+
    '<div class="field"><label>'+t.endYear+'</label><input data-k="end" value="'+esc(e.end||"")+'" placeholder="2024"></div></div>'+
    '<div class="field"><label>'+t.details+'</label><textarea data-k="details" placeholder="'+esc(t.detailsPh)+'"></textarea></div>';
  return '<div class="entry" data-kind="'+kind+'" data-i="'+i+'"><div class="entry-head"><span>#'+(i+1)+'</span>'+
    '<button class="btn-danger btn" data-del="'+i+'">'+t.remove+'</button></div>'+flds+'</div>';
}
function renderLists(){
  $("#eduList").innerHTML=S.education.map(function(e,i){return entryRow("edu",i,e)}).join("");
  $("#expList").innerHTML=S.experience.map(function(e,i){return entryRow("exp",i,e)}).join("");
  $$("#eduList .entry, #expList .entry").forEach(function(row){
    var kind=row.getAttribute("data-kind"),i=+row.getAttribute("data-i");
    var src=kind==="edu"?S.education[i]:S.experience[i];
    var ta=row.querySelector('textarea[data-k="details"]');if(ta)ta.value=src.details||"";
  });
  $("#skillTags").innerHTML=S.skills.map(function(s,i){return '<span class="tag">'+esc(s)+'<button data-skill="'+i+'" aria-label="remove">×</button></span>'}).join("");
  $("#langList").innerHTML=S.languages.map(function(l,i){
    return '<div class="tagbox" style="align-items:center"><span class="tag" style="font-size:.85rem">'+esc(l.name)+' · '+esc(l.level)+
      '<button data-lang="'+i+'" aria-label="remove">×</button></span></div>'}).join("");
}
function bindListInputs(){
  $$("#eduList .entry input, #eduList .entry textarea, #expList .entry input, #expList .entry textarea").forEach(function(inp){
    inp.addEventListener("input",function(){
      var row=inp.closest(".entry"),kind=row.getAttribute("data-kind"),i=+row.getAttribute("data-i");
      (kind==="edu"?S.education:S.experience)[i][inp.getAttribute("data-k")]=inp.value;save();renderCV();
    });
  });
  $$("#eduList [data-del], #expList [data-del]").forEach(function(b){
    b.addEventListener("click",function(){
      var row=b.closest(".entry"),kind=row.getAttribute("data-kind"),i=+b.getAttribute("data-del");
      (kind==="edu"?S.education:S.experience).splice(i,1);save();renderLists();bindListInputs();renderCV();
    });
  });
  $$("#skillTags [data-skill]").forEach(function(b){b.addEventListener("click",function(){S.skills.splice(+b.getAttribute("data-skill"),1);save();renderLists();bindListInputs();renderCV();});});
  $$("#langList [data-lang]").forEach(function(b){b.addEventListener("click",function(){S.languages.splice(+b.getAttribute("data-lang"),1);save();renderLists();bindListInputs();renderCV();});});
}

/* ---------- i18n apply ---------- */
function applyI18n(){
  var t=T();
  document.documentElement.lang=S.lang==="da"?"fa":"en";
  document.body.dir=S.lang==="da"?"rtl":"ltr";
  $$("[data-i18n]").forEach(function(el){var k=el.getAttribute("data-i18n");if(t[k]!=null)el.textContent=t[k];});
  $$("[data-i18n-ph]").forEach(function(el){var k=el.getAttribute("data-i18n-ph");if(t[k]!=null)el.placeholder=t[k];});
  $("#stepsBar").innerHTML=t.steps.map(function(s,i){
    var cls=i===step?"step active":(i<step?"step done":"step");
    return '<div class="'+cls+'" data-goto="'+i+'"><span class="n">'+(i+1)+'</span>'+esc(s)+'</div>';
  }).join("");
  $$("#stepsBar .step").forEach(function(el){el.addEventListener("click",function(){goStep(+el.getAttribute("data-goto"))});});
  $("#newLangLevel").innerHTML=t.levels.map(function(l){return"<option>"+esc(l)+"</option>"}).join("");
  $("#langEn").classList.toggle("active",S.lang==="en");
  $("#langDa").classList.toggle("active",S.lang==="da");
  $("#themeToggle").textContent=S.theme==="dark"?"☀️":"🌙";
  $$("#tplGrid .tpl").forEach(function(el){el.classList.toggle("active",el.getAttribute("data-tpl")===S.tpl);});
  $$("#mainNav a[data-menu]").forEach(function(a){
    a.classList.toggle("active",+a.getAttribute("data-menu")===step);
  });
  renderSwatches();
}
function renderSwatches(){
  $("#swatches").innerHTML=ACCENTS.map(function(c){
    return '<span class="swatch'+(S.accent===c?" active":"")+'" data-c="'+c+'" style="background:'+c+'"></span>';
  }).join("");
  $$("#swatches .swatch").forEach(function(el){el.addEventListener("click",function(){S.accent=el.getAttribute("data-c");save();renderSwatches();renderCV();});});
}

/* ---------- wizard ---------- */
function goStep(n){
  step=Math.max(0,Math.min(5,n));
  $$(".step-panel").forEach(function(p){p.hidden=+p.getAttribute("data-step")!==step;});
  $("#btnNext").style.display=step===5?"none":"";
  $("#btnPrev").style.display=step===0?"none":"";
  $("#mainNav").classList.remove("open");
  document.body.classList.remove("show-preview");
  applyI18n();$(".builder").scrollTop=0;window.scrollTo(0,0);
}

/* CSS text for the print fallback (works with external stylesheet) */
function pageCSS(){
  var css="";
  try{
    for(var i=0;i<document.styleSheets.length;i++){
      var rs=document.styleSheets[i].cssRules;
      for(var j=0;j<rs.length;j++)css+=rs[j].cssText+"\n";
    }
  }catch(e){}
  if(!css){var st=document.querySelector("style");if(st)css=st.textContent;}
  return css;
}
/* ---------- PDF export (direct file download) ----------
   Captures the visible CV sheet (html2canvas cannot reliably render
   off-screen elements, which caused blank PDFs). */
function pdfFileName(){return ((S.personal.name||"CV").trim().replace(/\s+/g,"_")||"CV")+"_CV.pdf";}
function downloadPDF(btn){
  var t=T(),label=btn.querySelector("span");
  function restore(){btn.disabled=false;if(label)label.textContent=t.downloadPdf;}
  function fallbackPrint(){
    restore();
    var w=window.open("","_blank");
    if(!w){window.print();return;}
    var cssText=pageCSS();
    var doc='<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">'+
      '<title>'+esc(pdfFileName())+'</title><style>'+cssText+'</style></head>'+
      '<body style="background:#fff"><div style="max-width:820px;margin:0 auto">'+$("#cvRender").innerHTML+'</div></body></html>';
    w.document.write(doc);w.document.close();try{w.focus();}catch(e){}
  }
  if(!window.html2pdf){fallbackPrint();return;}
  var sheet=document.getElementById("cvSheet");
  var pane=sheet.closest(".preview-pane");
  var prevPaneDisplay=pane.style.display;
  var prevW=sheet.style.width,prevM=sheet.style.maxWidth;
  function cleanup(){
    sheet.classList.remove("pdf-capture");
    sheet.style.width=prevW;sheet.style.maxWidth=prevM;
    pane.style.display=prevPaneDisplay;
  }
  btn.disabled=true;if(label)label.textContent=t.generatingPdf;
  try{
    pane.style.display="block";
    sheet.style.width="794px";sheet.style.maxWidth="794px";
    sheet.classList.add("pdf-capture");
    html2pdf().set({
      margin:0,
      filename:pdfFileName(),
      image:{type:"jpeg",quality:0.98},
      html2canvas:{scale:2,useCORS:true,backgroundColor:"#ffffff",logging:false},
      jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}
    }).from(sheet).save().then(function(){cleanup();restore();}).catch(function(){cleanup();fallbackPrint();});
  }catch(e){cleanup();fallbackPrint();}
}

/* ---------- example data ---------- */
function fillExample(){
  var da=S.lang==="da",lv=T().levels;
  S.personal=da?
    {name:"احمد احمدی",title:"توسعه‌دهنده وب",email:"ahmad.ahmadi@email.com",phone:"+93 700 123 456",address:"کابل، افغانستان",website:"linkedin.com/in/ahmadahmadi"}:
    {name:"Ahmad Ahmadi",title:"Web Developer",email:"ahmad.ahmadi@email.com",phone:"+93 700 123 456",address:"Kabul, Afghanistan",website:"linkedin.com/in/ahmadahmadi"};
  S.education=da?[{degree:"لیسانس کمپیوتر ساینس",school:"پوهنتون کابل",start:"2021",end:"2025",details:"پروژه فراغت: سیستم مدیریت کتابخانه"}]:[{degree:"BSc Computer Science",school:"Kabul University",start:"2021",end:"2025",details:"Graduation project: Library Management System"}];
  S.experience=da?[{title:"توسعه‌دهنده وب",company:"شرکت تک سلوشنز",start:"2023",end:"",details:"ساخت ۵ وب‌سایت برای مشتریان\nآموزش HTML به ۲۰ شاگرد"}]:[{title:"Web Developer",company:"Tech Solutions",start:"2023",end:"",details:"Built 5 websites for clients\nTaught HTML to 20 students"}];
  S.skills=da?["HTML","CSS","JavaScript","کار تیمی"]:["HTML","CSS","JavaScript","Teamwork"];
  S.languages=da?[{name:"دری",level:lv[4]},{name:"انگلیسی",level:lv[2]}]:[{name:"Dari",level:lv[4]},{name:"English",level:lv[2]}];
  S.summary=composeSummary();
  save();syncInputs();renderLists();bindListInputs();renderCV();
}
function syncInputs(){
  var p=S.personal;
  $("#f_name").value=p.name;$("#f_title").value=p.title;$("#f_email").value=p.email;
  $("#f_phone").value=p.phone;$("#f_address").value=p.address;$("#f_website").value=p.website;
  $("#f_summary").value=S.summary;
}

/* ---------- init ---------- */
function init(){
  document.documentElement.setAttribute("data-theme",S.theme);
  [["f_name","name"],["f_title","title"],["f_email","email"],["f_phone","phone"],["f_address","address"],["f_website","website"]].forEach(function(pair){
    $("#"+pair[0]).addEventListener("input",function(e){S.personal[pair[1]]=e.target.value;save();renderCV();});
  });
  $("#f_summary").addEventListener("input",function(e){S.summary=e.target.value;save();renderCV();});
  $("#btnGenSummary").addEventListener("click",function(){
    S.summary=composeSummary();$("#f_summary").value=S.summary;save();renderCV();
  });
  $("#addEdu").addEventListener("click",function(){S.education.push({degree:"",school:"",start:"",end:"",details:""});save();renderLists();bindListInputs();renderCV();});
  $("#addExp").addEventListener("click",function(){S.experience.push({title:"",company:"",start:"",end:"",details:""});save();renderLists();bindListInputs();renderCV();});
  $("#skillInput").addEventListener("keydown",function(e){
    if(e.key==="Enter"||e.key===","){e.preventDefault();var v=e.target.value.trim().replace(/,$/,"");
      if(v){S.skills.push(v);e.target.value="";save();renderLists();bindListInputs();renderCV();}}
  });
  $("#addLang").addEventListener("click",function(){
    var n=$("#newLangName").value.trim();if(!n)return;
    S.languages.push({name:n,level:$("#newLangLevel").value});$("#newLangName").value="";save();renderLists();bindListInputs();renderCV();
  });
  $("#btnPrev").addEventListener("click",function(){goStep(step-1)});
  $("#btnNext").addEventListener("click",function(){goStep(step+1)});
  $("#btnPdf").addEventListener("click",function(){downloadPDF(this)});
  $("#btnExample").addEventListener("click",function(){if(confirm(T().confirmExample))fillExample();});
  $("#btnClear").addEventListener("click",function(){if(confirm(T().confirmClear)){var l=S.lang,t=S.theme;S=blankState();S.lang=l;S.theme=t;save();syncInputs();renderLists();bindListInputs();applyI18n();renderCV();}});
  $$("#tplGrid .tpl").forEach(function(el){el.addEventListener("click",function(){S.tpl=el.getAttribute("data-tpl");save();applyI18n();renderCV();});});
  $$("#mainNav a[data-menu]").forEach(function(a){a.addEventListener("click",function(){goStep(+a.getAttribute("data-menu"))});});
  $("#navGuide").addEventListener("click",function(){$("#guideModal").classList.add("open");$("#mainNav").classList.remove("open");});
  $("#guideClose").addEventListener("click",function(){$("#guideModal").classList.remove("open");});
  $("#guideModal").addEventListener("click",function(e){if(e.target===this)this.classList.remove("open");});
  var pv=function(){document.body.classList.toggle("show-preview");$("#mainNav").classList.remove("open");};
  $("#previewToggle").addEventListener("click",pv);
  $("#navPreview").addEventListener("click",pv);
  $("#hamburger").addEventListener("click",function(){$("#mainNav").classList.toggle("open");});
  $("#langEn").addEventListener("click",function(){S.lang="en";save();applyI18n();renderCV();});
  $("#langDa").addEventListener("click",function(){S.lang="da";save();applyI18n();renderCV();});
  $("#themeToggle").addEventListener("click",function(){
    S.theme=S.theme==="dark"?"light":"dark";
    document.documentElement.setAttribute("data-theme",S.theme);save();applyI18n();
  });
  syncInputs();renderLists();bindListInputs();goStep(0);renderCV();
}
document.addEventListener("DOMContentLoaded",init);
})();
