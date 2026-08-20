import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, BookOpen, Building2, Camera, ChevronDown, CircleHelp, ClipboardCheck, Clock3, Cpu, Factory, FileCheck2, Globe2, GraduationCap, Headphones, Landmark, Mail, MapPin, Maximize2, MessageCircle, MoveRight, MoveUpRight, Orbit, Phone, Plane, Send, ShieldCheck, Smartphone, Video } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const branches = ["Civil Engineering","Mechanical Engineering","Automobile Engineering","Electrical & Electronics Engineering","Computer Science & Engineering","Information Technology Engineering","Electronic & Instrumentation Engineering","Fire & Safety Engineering","Chemical Engineering","Mining Engineering","Aeronautical Engineering","Mechatronics Engineering","Petroleum Engineering","Production Technology","Biomedical Engineering","Metallurgical Engineering","Electronics & Telecommunication Engineering","Polymer Engineering","Leather Technology & Cosmetology","Water Resources Engineering","Environmental Engineering","Applied Electronics & Instrumentation","Textile Technology"];
const faqs = [
  ["What is inter-university credit transfer?","It allows students to move credits earned at one recognized university to another, avoiding repetition of subjects already completed."],
  ["Who is eligible for credit transfer?","Eligibility is available at undergraduate and postgraduate levels. Students usually need to have completed at least one year or around 50% of their programme; the receiving university makes the final decision."],
  ["What documents are required?","Academic transcripts or mark sheets, the relevant syllabus or course descriptions, and the receiving university's credit-transfer application form."],
  ["Is B.Tech credit transfer legal?","Credit transfer is a recognized academic process when completed through official university guidelines, including registration, credit calculation and duration assessment. Avoid unsupported ‘fast-track’ claims."],
  ["How many credits can be transferred?","The maximum depends on the receiving university's equivalency rules. Universities may cap transferable credits and require core subjects to be completed with them."],
  ["Does credit transfer affect employability?","A final degree from a recognized or accredited university can be considered for private and government opportunities, subject to the requirements of the employer or authority."],
  ["How long does the process take?","Timelines range from a few months to longer depending on documentation, university review workload and the complexity of subject equivalency."],
  ["What are the limitations?","Not every course or specialist subject is transferable. Only recognized study is considered, and the receiving university decides which credits it accepts."],
];
const reviews = [
  ["Sajeena ba","The institution provided clear guidelines, and the support staff were incredibly helpful. I was very impressed with the entire process. Overall, my experience with Institution has been positive, and I would recommend them to anyone looking to credits transfer smoothly and efficiently."],
  ["ASWANI PRADEEP","My heart felt gratitude towards team Edu Acharya,for taking correct decision in my life. Their service has been good and they are very supportive.they have been in touch with me through email and phone. Every updates were notified to me on time which was much appreciated, they always answered to my queries Especially my mentor Vishnu,Vineeth and Praveen helped me throughout the process.thank you team Edu Acharya 😍😍😍"],
  ["Hari's honest Opinions","This institue helped me in completing my degree successfully.The staff people were so supportive and they give immediate response during enquiries. Now i am going to do my masters and levelup my career. Thank you Edu Acharya for supporting me and guiding me throughout this journey.."],
  ["Anjana RajendraPrasad","It was a good experience with eduacharya.I got everything on time and the staffs really helped me in solving all my queries.Whenever i needed an urgent document, they provided me with every help without any hesitation.I can suggest this company to anybody wholeheartedly as i am really impressed with their service"],
  ["Gibin Joshy","Edu Acharya Consultancy has been instrumental in helping me complete my BTech graduation. The support and guidance provided by their staff have been exceptional. Their expertise and dedication ensured I stayed on track and achieved my academic goals. Overall, I would rate Edu Acharya Consultancy highly for their excellent service and commitment to student success."],
  ["Lidhi Unnikrishnan","Good experience from eduacharya, good professional staffs to guide the procedures. I would like to thank the entire team for the constant support provided for my credit transfer procedures. I am happy and special thanks to Domanic Sir, who is efficient, shared his knowledge and patience along with the duration of my course. although the certifications are little delay, but the service here is satisfying. Thank You!"],
  ["Ajas Shamsudheen","Good experience from educharya, Good professional staff to guide the procedure for my credit transfer smoothly. I hope Educharya will be my turning Point in my life and complete my Btech degree which I think not done in my life Best wishes to the cordinator and team, heartly Thank you, all the best"],
  ["ALBILAL N","I successfully completed my course with the unwavering support of Edu Acharya Institute of Advanced Management & Technology Pvt Ltd. I am deeply grateful for their assistance in facilitating my studies. A special shoutout to my coordinator Mr. Dominic, whose guidance was invaluable throughout the program. I am always assured that I can contact him with any queries regarding my coursework."],
];
const institutions = [
  {code:"TGU",name:"The Global University",place:"Itanagar, Arunachal Pradesh",year:"Established in 2023",copy:"A UGC-recognized private university recognized by the Government of Arunachal Pradesh. It offers accessible multidisciplinary education with an emphasis on practical exposure, internships, industry-aligned learning and community engagement.",highlights:["Multidisciplinary UG and PG programmes","Internships and industry-aligned learning","Affordable education and career support"],fields:"Engineering, management, law, science, medical studies, pharmacy and other multidisciplinary programmes",approvals:["UGC","AIU","PCI","BCI"],images:["/images/universities/tgu-1.jpg","/images/universities/tgu-2.webp","/images/universities/tgu-3.webp"]},
];
const awarenessVideos = [
  {id:"UqwfDxJ3ghQ",title:"What is credit transfer?",url:"https://youtu.be/UqwfDxJ3ghQ?si=p_y2EXHEYh0Yoy3n"},
  {id:"wjVQ25HXuIQ",title:"Who is eligible for B.Tech Credit Transfer?",url:"https://youtu.be/wjVQ25HXuIQ?si=72uHsFVioJ9cFrbo"},
  {id:"YCzMKphVdzI",title:"Why Edu Acharya?",url:"https://youtu.be/YCzMKphVdzI?si=B0dAlqffWlahLeEE"},
  {id:"dtyx5-G7BJM",title:"What is Credit Mapping?",url:"https://youtu.be/dtyx5-G7BJM?si=15FGbHgXTIoWouWH"},
  {id:"ry8gc9nklog",title:"Should all steps follow a legal process?",url:"https://youtu.be/ry8gc9nklog?si=zbg24mNu6VqYCsd9"},
  {id:"ir8D1CykP-o",title:"Course duration in credit transfer",url:"https://youtu.be/ir8D1CykP-o?si=x4xjT_ZvmyHRN7Qk"},
];
const branchGroups = [
  {title:"Core engineering",copy:"Foundational disciplines that shape infrastructure, mobility, energy and manufacturing.",icon:Building2,branches:["Civil Engineering","Mechanical Engineering","Automobile Engineering","Electrical & Electronics Engineering","Production Technology","Metallurgical Engineering","Water Resources Engineering"]},
  {title:"Computing & electronics",copy:"Technology pathways spanning software, information systems, communication and instrumentation.",icon:Cpu,branches:["Computer Science & Engineering","Information Technology Engineering","Electronic & Instrumentation Engineering","Electronics & Telecommunication Engineering","Applied Electronics & Instrumentation"]},
  {title:"Advanced disciplines",copy:"Specialist programmes connecting engineering with aerospace, healthcare, materials and energy.",icon:Orbit,branches:["Aeronautical Engineering","Mechatronics Engineering","Biomedical Engineering","Petroleum Engineering","Polymer Engineering","Chemical Engineering","Textile Technology"]},
  {title:"Industry, safety & environment",copy:"Applied pathways focused on operations, resource industries, safety and sustainable development.",icon:Factory,branches:["Fire & Safety Engineering","Mining Engineering","Leather Technology & Cosmetology","Environmental Engineering"]},
];
const galleryImages = [
  "WhatsApp-Image-2025-12-19-at-2.42.07-PM-1.jpeg",
  "WhatsApp-Image-2025-12-19-at-2.42.08-PM-1.jpeg",
  "WhatsApp-Image-2025-12-19-at-2.42.10-PM-2.jpeg",
  "WhatsApp-Image-2025-12-19-at-2.42.11-PM-2.jpeg",
  "WhatsApp-Image-2025-12-19-at-2.42.11-PM.jpeg",
  "WhatsApp-Image-2025-12-19-at-2.42.12-PM-1.jpeg",
  "WhatsApp-Image-2025-12-19-at-2.42.12-PM-2.jpeg",
  "WhatsApp-Image-2025-12-19-at-2.42.12-PM.jpeg",
  "WhatsApp-Image-2025-12-19-at-2.42.13-PM-1.jpeg",
  "WhatsApp-Image-2025-12-19-at-2.42.13-PM.jpeg",
  "WhatsApp-Image-2025-12-19-at-2.42.14-PM-2.jpeg",
  "WhatsApp-Image-2025-12-19-at-2.42.14-PM.jpeg",
  "WhatsApp-Image-2025-12-19-at-2.42.15-PM-2-e1772517857744.jpeg",
  "WhatsApp-Image-2025-12-19-at-2.42.16-PM.jpeg",
];
const featuredGalleryImages = [galleryImages[3],galleryImages[4],galleryImages[5],galleryImages[6],galleryImages[8],galleryImages[11]];
const remainingGalleryImages = galleryImages.filter((image)=>!featuredGalleryImages.includes(image));

function Arrow(){return <MoveUpRight aria-hidden="true" size={16}/>}
function LeadForm({compact=false}:{compact?:boolean}){
  const [sent,setSent]=useState(false);
  return <form className={`lead-form ${compact?"compact":""}`} onSubmit={(e)=>{e.preventDefault();setSent(true)}}>
    {sent ? <div className="success"><b>Thank you!</b><span>Our counsellor will contact you shortly.</span></div> : <>
      <label><span>Your name</span><input required name="name" placeholder="Enter full name" /></label>
      <label><span>Phone number</span><input required name="phone" inputMode="tel" placeholder="+91 00000 00000" /></label>
      {!compact&&<label><span>Email address</span><input required name="email" type="email" placeholder="you@example.com" /></label>}
      <label><span>Previous university</span><input name="university" placeholder="University name" /></label>
      <label><span>Engineering branch</span><select name="branch" defaultValue=""><option value="" disabled>Select branch</option>{branches.map(x=><option key={x}>{x}</option>)}</select></label>
      {!compact&&<label><span>Completion year</span><input name="year" inputMode="numeric" placeholder="e.g. 2021" /></label>}
      <button className="button primary" type="submit">Get my eligibility report <Arrow/></button>
      <small>By submitting, you agree to receive counselling updates.</small>
    </>}
  </form>
}

function Home(){
  const [menu,setMenu]=useState(false);
  const [galleryOpen,setGalleryOpen]=useState(false);
  const [overseasSent,setOverseasSent]=useState(false);
  return <main>
    <header className="nav reference-nav"><a className="brand hero-brand" href="#top" aria-label="Edu Acharya home"><span className="brand-symbol">EA</span><span className="brand-name">Edu <b>Acharya</b></span></a><nav className={menu?"open":""}><a href="#about">Credit Transfer</a><a href="#universities">Universities</a><a href="#courses">Courses</a><a href="#process">How It Works</a><a href="#reviews">Success Stories</a></nav><div className="nav-actions"><a className="login" href="https://eduacharyaerp.in">Student Login</a><a className="button primary" href="#eligibility">Check Eligibility</a><button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">☰</button></div></header>
    <section className="hero visual-hero" id="top">
      <div className="visual-hero-copy reveal">
        <div className="trust-pill">19 YEARS OF TRUST <span>•</span> 5,000+ SUCCESS STORIES</div>
        <h1>Your B.Tech Story Isn’t Over.<br/><em>Complete What You Started.</em></h1>
        <p>Failed subjects, arrears or a discontinued degree?<br/>Transfer eligible credits and continue your journey<br/>with expert guidance.</p>
        <div className="visual-hero-actions"><a className="button primary" href="#eligibility">Check My Eligibility <MoveRight size={18}/></a><a className="button outline" href="tel:+919746363807">Talk to a Counsellor <Headphones size={18}/></a></div>
        <div className="student-trust"><div className="trust-faces"><i>S</i><i>A</i><i>R</i><i>M</i></div><div><b>★★★★★</b><span>Trusted by 5,000+ students</span></div></div>
      </div>
      <div className="student-stage" aria-label="EduAcharya graduate success">
        <img className="hero-student" src="/images/student-champagne-alpha.png" alt="EduAcharya engineering graduate holding a graduation cap" />
        <article className="hero-float mapped"><FileCheck2/><div><b>Credits Mapped</b><span>Maximise your<br/>earned credits</span></div></article>
        <article className="hero-float recognized"><Landmark/><div><b>UGC Recognised</b><span>Recognised by<br/>UGC &amp; AICTE</span></div></article>
        <article className="hero-float guidance"><Headphones/><div><b>24/7 Expert Support</b><span>Guidance whenever<br/>you need it</span></div></article>
      </div>
      <form className="quick-check" onSubmit={(event)=>event.preventDefault()}>
        <h2>Free Eligibility Check</h2>
        <label><GraduationCap/><select aria-label="Current course" defaultValue=""><option value="" disabled>Current Course</option><option>B.Tech</option><option>Diploma</option><option>Other engineering programme</option></select><ChevronDown/></label>
        <label><BookOpen/><select aria-label="Engineering branch" defaultValue=""><option value="" disabled>Branch</option>{branches.map(branch=><option key={branch}>{branch}</option>)}</select><ChevronDown/></label>
        <label><Clock3/><select aria-label="Completion year" defaultValue=""><option value="" disabled>Completion Year</option>{[2026,2025,2024,2023,2022,2021,2020,2019].map(year=><option key={year}>{year}</option>)}</select><ChevronDown/></label>
        <button className="button primary" type="submit">Get My Report</button><small><Clock3/> Takes less than 2 minutes</small>
      </form>
      <div className="hero-proof-bar">
        <div><ShieldCheck/><span><b>UGC Recognised</b><small>Trusted &amp; approved</small></span></div>
        <div><FileCheck2/><span><b>Credit Mapping Support</b><small>Maximise your credits</small></span></div>
        <div><ShieldCheck/><span><b>Transparent Process</b><small>Clear &amp; hassle-free</small></span></div>
        <div><Headphones/><span><b>Personal Counselling</b><small>Support at every step</small></span></div>
      </div>
    </section>
    <section className="section about" id="about" aria-labelledby="credit-transfer-title">
      <div className="section-heading">
        <div><span className="kicker">Understand the pathway</span><h2 id="credit-transfer-title">What is B.Tech<br/><em>credit transfer?</em></h2></div>
        <div className="about-intro"><p>Academic credit transfer allows students to move from one institution to another while carrying forward eligible credits earned in completed courses. The receiving university evaluates the previous curriculum, grades and relevance of each subject to determine equivalency, so accepted subjects do not need to be repeated.</p><a className="benefits-source" href="/b-tech-credit-transfer">Explore B.Tech credit transfer <Arrow/></a></div>
      </div>
      <div className="benefits-heading"><span className="kicker">Why students choose this route</span><h3>Benefits of B.Tech credit transfer</h3></div>
      <div className="benefit-grid">{[
        ["01","Save time & effort","Continue from eligible completed subjects instead of automatically repeating the entire programme."],
        ["02","Reduce education costs","Fewer repeated subjects may reduce tuition fees and other study-related expenses."],
        ["03","Keep your options flexible","Change institutions for academic, professional or personal reasons, subject to university approval."],
        ["04","Protect academic progress","Resume discontinued studies without losing every eligible credit already earned."],
      ].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div>
    </section>
    <section className="eligibility-showcase" aria-labelledby="eligibility-title">
      <div className="soft-grid eligibility-grid" />
      <div className="eligibility-copy">
        <div className="eyebrow"><span /> WHO CAN APPLY?</div>
        <h2 id="eligibility-title">Your past study may be<br/><em>your way forward.</em></h2>
        <p>Students who paused, discontinued or need to change universities can request an individual review. Eligibility depends on institution recognition, curriculum similarity, academic performance, completed semesters and the receiving university's transfer regulations.</p>
        <div className="eligibility-callout">
          <b>No two academic records are the same.</b>
          <span>Transfer limits are set by each university and may be around 50–70% of programme credits. Semester restrictions and minimum-grade requirements can also apply.</span>
        </div>
        <div className="hero-buttons"><a className="button primary" href="#eligibility">Review my academic record <Arrow/></a><a className="button text-button" href="#process">View the process <Arrow/></a></div>
      </div>
      <div className="eligibility-cards">
        {[
          {number:"01",title:"Recognized institution",copy:"Previous credits must come from an institution recognized by the relevant authority and accepted by the receiving university.",badge:"Foundation",cls:"e1"},
          {number:"02",title:"Curriculum match",copy:"Completed subjects, syllabus content and learning hours are compared with the new programme for equivalency.",badge:"Compared",cls:"e2"},
          {number:"03",title:"Academic performance",copy:"Passing grades, GPA, completed semesters and university-specific minimum standards are reviewed.",badge:"Individual",cls:"e3"},
          {number:"04",title:"Supporting documents",copy:"Transcripts, mark sheets, detailed syllabi and other academic records are required for the formal review.",badge:"Required",cls:"e4"},
        ].map((item)=><article className={item.cls} key={item.number}>
          <span className="eligibility-number">{item.number}</span><small>{item.badge}</small><h3>{item.title}</h3><p>{item.copy}</p><div className="card-arrow"><Arrow/></div>
        </article>)}
      </div>
      <div className="eligibility-proof">
        <div><b>50–70%*</b><span>Policy-dependent cap</span></div>
        <div><b>Case by case</b><span>Credit equivalency review</span></div>
        <div><b>Official records</b><span>Evidence-led mapping</span></div>
        <div><b>Final decision</b><span>By the university</span></div>
      </div>
    </section>
    <section className="section universities" id="universities">
      <div className="section-heading"><div><span className="kicker light">University pathway</span><h2>Continue your studies with<br/><em>The Global University.</em></h2></div><p>Explore the university's background, academic focus and recognition. Final programme availability and credit-transfer eligibility remain subject to The Global University's formal review.</p></div>
      <div className="university-showcase">{institutions.map((university,index)=><article className="university-profile" key={university.code}>
        <div className="university-gallery">
          {university.images.map((image,imageIndex)=><img key={image} src={image} alt={`${university.name} placeholder campus view ${imageIndex+1}`} loading="lazy" />)}
          <span className="university-code">{university.code}</span>
        </div>
        <div className="university-profile-copy">
          <div className="university-meta"><span>0{index+1}</span><p>{university.place}</p></div>
          <h3>{university.name}</h3><small>{university.year}</small><p className="university-summary">{university.copy}</p>
          <div className="tags">{university.approvals.map(approval=><b key={approval}>{approval}</b>)}</div>
          <details className="university-more"><summary>University details <ChevronDown/></summary><div><div className="university-fields"><b>Academic breadth</b><p>{university.fields}</p></div><ul>{university.highlights.map(highlight=><li key={highlight}>{highlight}</li>)}</ul></div></details>
          <a href="#eligibility">Discuss this university pathway <Arrow/></a>
        </div>
      </article>)}</div>
    </section>
    <section className="section course-pathways" id="courses">
      <div className="course-pathways-head">
        <div><span className="kicker">Courses &amp; branches</span><h2>Find the engineering path<br/><em>that matches your study.</em></h2></div>
        <div className="course-overview"><p>Explore B.Tech pathways across established core disciplines, computing, electronics and specialist industry fields. Branch availability and credit equivalency depend on university assessment.</p><div className="course-stats"><span><b>23</b> branches</span><span><b>4</b> discipline groups</span><span><b>1:1</b> eligibility review</span></div></div>
      </div>
      <div className="branch-groups compact">{branchGroups.map((group,groupIndex)=>{const Icon=group.icon;const previousCount=branchGroups.slice(0,groupIndex).reduce((total,item)=>total+item.branches.length,0);return <details key={group.title}>
        <summary className="branch-group-heading"><span><Icon/></span><div><small>Discipline 0{groupIndex+1}</small><h3>{group.title}</h3><p>{group.copy}</p></div><i><ChevronDown/></i></summary>
        <div className="branch-chips">{group.branches.map((branch,index)=><a href="#eligibility" key={branch}><span>{String(previousCount+index+1).padStart(2,"0")}</span>{branch}<Arrow/></a>)}</div>
      </details>})}</div>
      <div className="course-cta"><div><span className="kicker light">Not sure where your previous course fits?</span><h3>Let us map your branch and completed subjects.</h3></div><a className="button primary" href="#eligibility">Check branch eligibility <MoveRight/></a></div>
    </section>
    <section className="section process" id="process"><div className="center-heading"><span className="kicker">A clear admission journey</span><h2>From uncertainty to <em>your next step.</em></h2><p>We guide you through each stage and help you understand what the university needs.</p></div><div className="steps">{[
      {number:"01",title:"Check eligibility",copy:"Tell us about your previous study and share the basic academic details.",icon:ClipboardCheck},
      {number:"02",title:"Video verification",copy:"Meet a course counsellor, review the pathway and clear your questions.",icon:Video},
      {number:"03",title:"Seat reservation",copy:"Reserve your university seat and begin the formal admission process.",icon:BadgeCheck},
    ].map(({number,title,copy,icon:Icon})=><article key={number}><span>{number}</span><div className="step-icon"><Icon aria-hidden="true"/></div><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="section gallery-section" id="gallery">
      <div className="gallery-heading"><div><span className="kicker light">Inside Edu Acharya</span><h2>A space built for<br/><em>student support.</em></h2></div><div><Camera/><p>Take a look inside our counselling and student-support environment in Ernakulam.</p><span>{galleryImages.length} facility views</span></div></div>
      <div className="gallery-preview">{featuredGalleryImages.map((filename,index)=><figure key={filename}>
        <a href={`/images/gallery/${filename}`} target="_blank" rel="noreferrer" aria-label={`Open Edu Acharya gallery image ${index+1}`}>
          <img src={`/images/gallery/${filename}`} alt={`Edu Acharya office and student support facility, view ${index+1}`} loading="lazy" decoding="async"/>
          <figcaption><span>{String(index+1).padStart(2,"0")}</span><b>Edu Acharya</b><Maximize2/></figcaption>
        </a>
      </figure>)}</div>
      <div className={`gallery-expanded ${galleryOpen?"open":""}`} aria-hidden={!galleryOpen}>{remainingGalleryImages.map((filename,index)=><figure key={filename}><a href={`/images/gallery/${filename}`} target="_blank" rel="noreferrer"><img src={`/images/gallery/${filename}`} alt={`Edu Acharya office and student support facility, view ${featuredGalleryImages.length+index+1}`} loading="lazy" decoding="async"/><span>{String(featuredGalleryImages.length+index+1).padStart(2,"0")}</span></a></figure>)}</div>
      <button className="gallery-view-all button ghost" type="button" aria-expanded={galleryOpen} onClick={()=>setGalleryOpen((open)=>!open)}><Camera/> {galleryOpen?"Show fewer photos":`View all ${galleryImages.length} photos`}</button>
    </section>
    <section className="section form-section" id="eligibility"><div><span className="kicker light">Free eligibility report</span><h2>Let’s map your<br/><em>best route forward.</em></h2><p>Share a few details. An EduAcharya counsellor will review your case and call you with the next steps.</p><div className="contact-pills"><a href="tel:+919746363807">☎ 9746 363 807</a><a href="https://api.whatsapp.com/send?phone=919633830220">◉ WhatsApp 9633 830 220</a></div></div><LeadForm/></section>
    <section className="section reviews" id="reviews"><div className="center-heading"><span className="kicker">Student stories</span><h2>Real support. <em>Real progress.</em></h2><a href="https://eduacharyainstitute.in/" target="_blank" rel="noreferrer" className="rating">★★★★★ <b>800+ Google Reviews</b></a></div><div className="review-marquee"><div className="review-track">
      {[false,true].map((duplicate)=><div className="review-group" aria-hidden={duplicate||undefined} key={duplicate?"duplicate":"primary"}>{reviews.map(([name,copy],index)=><article className="review-card" key={`${duplicate?"duplicate":"primary"}-${name}`}><div className="quote">“</div><p>{copy}</p><div><span className={`avatar a${index%3}`}>{name[0]}</span><b>{name}</b><small>Student testimonial</small></div></article>)}</div>)}
    </div></div></section>
    <section className="section awareness-section" id="awareness-videos">
      <div className="awareness-heading"><div><span className="kicker">Awareness videos</span><h2>Understand credit transfer,<br/><em>one question at a time.</em></h2></div><p>Short, practical explanations covering eligibility, credit mapping, course duration and the importance of following a formal academic process.</p></div>
      <div className="awareness-grid">{awarenessVideos.map((video,index)=><a className="awareness-card" href={video.url} target="_blank" rel="noreferrer" key={video.id} aria-label={`Watch: ${video.title}`}><div className="awareness-thumb"><img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" decoding="async"/><span><Video/></span><small>{String(index+1).padStart(2,"0")}</small></div><div className="awareness-card-copy"><span>Edu Acharya explains</span><h3>{video.title}</h3><b>Watch on YouTube <MoveUpRight/></b></div></a>)}</div>
    </section>
    <section className="section faq-modern" id="faq">
      <div className="faq-guide">
        <span className="kicker">Frequently asked</span><h2>Questions deserve<br/><em>clear answers.</em></h2><p>Credit transfer is a formal academic evaluation—not a shortcut. The receiving university always makes the final decision based on its regulations and your records.</p>
        <div className="faq-assurance"><CircleHelp/><div><b>Still unsure about your case?</b><span>Speak with an Edu Acharya counsellor for a personal review of your academic history.</span></div></div>
        <a className="button dark" href="#eligibility">Ask a counsellor <MessageCircle/></a>
      </div>
      <div className="faq-list">{faqs.map(([question,answer],index)=><details key={question} open={index===0}>
        <summary><span className="faq-number">{String(index+1).padStart(2,"0")}</span><b>{question}</b><span className="faq-toggle">+</span></summary><div className="faq-answer"><p>{answer}</p></div>
      </details>)}</div>
    </section>
    <section className="section overseas-section" id="overseas">
      <div className="overseas-copy"><span className="kicker">Overseas education services</span><h2>Take your next step<br/><em>beyond borders.</em></h2><p>Explore international study opportunities with guidance for course selection, applications and the documentation journey.</p><div className="country-pathways">{[["GB","UK"],["IE","Ireland"],["AE","UAE"]].map(([code,country])=><article key={country}><span>{code}</span><div><b>{country}</b><small>Study pathway</small></div><Plane/></article>)}</div><div className="overseas-assurance"><Globe2/><span><b>Personal pathway guidance</b><small>Country and institution options depend on your profile, programme availability and admission requirements.</small></span></div></div>
      <form className="overseas-form" onSubmit={(event)=>{event.preventDefault();setOverseasSent(true)}}>{overseasSent?<div className="overseas-success"><BadgeCheck/><h3>Enquiry received</h3><p>Our overseas education team will contact you shortly.</p></div>:<><div className="overseas-form-heading"><span>For more details</span><h3>Tell us your study preference.</h3></div><label><span>Name</span><input required name="name" placeholder="Enter your full name"/></label><label><span>Phone number</span><input required name="phone" inputMode="tel" placeholder="+91 00000 00000"/></label><label><span>Preferred country</span><select required name="country" defaultValue=""><option value="" disabled>Select a country</option><option>United Kingdom</option><option>Ireland</option><option>United Arab Emirates</option><option>Not decided yet</option></select></label><label><span>Qualification</span><input required name="qualification" placeholder="Your highest qualification"/></label><button className="button primary" type="submit">Submit enquiry <Send/></button></>}</form>
    </section>
    <footer className="site-footer" id="contact">
      <div className="footer-location">
        <div className="footer-location-copy"><span className="kicker">Contact Edu Acharya</span><h2>Visit our student<br/><em>support centre.</em></h2><p>Speak directly with the right team for admissions, academics, applications, accounts or enrolled-student support.</p><a className="footer-address" href="https://www.google.com/maps?ll=9.989746,76.284179&z=12&t=m&hl=en&gl=US&mapclient=embed&cid=17545494236753287547" target="_blank" rel="noreferrer"><MapPin/><span>Grace Tower, Ground Floor, Door No. 67/1391, St. Vincent Road, Kacheripady, Ernakulam North, Kerala, India – 682018<small>Get directions in Google Maps</small></span></a><div className="footer-hours"><Clock3/><span><small>Office working hours</small><b>Monday–Saturday · 10 AM–5 PM</b></span></div></div>
        <div className="footer-map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62869.246333514486!2d76.284176!3d9.98975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1634917ba9%3A0xf37e1e0c5e57d97b!2sEduAcharya%20Institute%20of%20Advanced%20Management%20%26%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1755516251394!5m2!1sen!2sus" title="Edu Acharya Institute location on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe></div>
      </div>
      <div className="footer-departments-heading"><span>Department directory</span><p>Choose the team that matches your enquiry.</p></div>
      <div className="footer-directory">
        <article><h3>Admission enquiry</h3><small>Check seat availability</small><a className="footer-line" href="tel:+919746363807"><Smartphone/><span>974 63 63 807</span></a><a className="footer-line" href="mailto:enquiry@eduacharyainstitution.in"><Mail/><span>enquiry@eduacharyainstitution.in</span></a></article>
        <article><h3>Students support</h3><small>Enrolled students</small><div className="footer-line"><Phone/><span><a href="tel:+914844010117">0484 4010117</a> <i>|</i> <a href="tel:+914844010712">4010712</a> <i>|</i> <a href="tel:+914844010713">4010713</a></span></div><a className="footer-line" href="tel:+919633522254"><Smartphone/><span>9633 5222 54</span></a><a className="footer-line" href="mailto:administrator@eduacharyainstitution.in"><Mail/><span>administrator@eduacharyainstitution.in</span></a></article>
        <article><h3>Academics</h3><a className="footer-line" href="tel:+914844026109"><Phone/><span>0484 4026 109</span></a></article>
        <article><h3>Accounts</h3><div className="footer-line"><Phone/><span><a href="tel:+914844609794">0484 4609794</a> <i>|</i> <a href="tel:+914844066691">4066691</a> <i>|</i> <a href="tel:+914844863966">4863966</a></span></div><a className="footer-line" href="tel:+919633926220"><Smartphone/><span>9633 926 220</span></a><a className="footer-line" href="mailto:accounts@eduacharyainstitution.in"><Mail/><span>accounts@eduacharyainstitution.in</span></a></article>
        <article><h3>Additional application services</h3><div className="footer-line"><Phone/><span><a href="tel:+914844066677">0484 4066677</a> <i>|</i> <a href="tel:+914844010762">4010762</a></span></div><a className="footer-line" href="tel:+918136932224"><Smartphone/><span>8136 932 224</span></a><a className="footer-line" href="mailto:applications@eduacharyainstitution.in"><Mail/><span>applications@eduacharyainstitution.in</span></a></article>
        <article><h3>Administrator</h3><small>Help desk</small><a className="footer-line" href="tel:+914844011814"><Phone/><span>0484 4011814</span></a><a className="footer-line" href="tel:+918139832224"><Smartphone/><span>8139 832 224</span></a><a className="footer-line" href="mailto:helpdesk@eduacharyainstitution.in"><Mail/><span>helpdesk@eduacharyainstitution.in</span></a></article>
        <article><h3>Legal</h3><a className="footer-line" href="mailto:legal@eduacharyainstitution.in"><Mail/><span>legal@eduacharyainstitution.in</span></a></article>
      </div>
      <div className="footer-bottom"><a className="brand hero-brand" href="#top"><span className="brand-symbol">EA</span><span className="brand-name">Edu <b>Acharya</b></span></a><nav><a href="#about">About</a><a href="#courses">Courses</a><a href="#faq">FAQs</a></nav><p>© 2026 EduAcharya Pvt. Ltd. All rights reserved.</p></div>
    </footer>
    <div className="mobile-cta"><a href="tel:+919746363807">Call now</a><a href="https://api.whatsapp.com/send?phone=919633830220">WhatsApp</a><a href="#eligibility">Apply now</a></div>
  </main>
}
