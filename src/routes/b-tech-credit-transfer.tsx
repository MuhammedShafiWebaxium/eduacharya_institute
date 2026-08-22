import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, FileCheck2, GraduationCap, Landmark, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/b-tech-credit-transfer")({
  head: () => ({
    meta: [
      { title: "B.Tech Credit Transfer: Process & Eligibility | Edu Acharya" },
      { name: "description", content: "Understand the B.Tech credit transfer process, eligibility, documents and university review criteria. Request a free assessment from Edu Acharya." },
      { property: "og:title", content: "B.Tech Credit Transfer Guidance | Edu Acharya" },
      { property: "og:description", content: "A clear guide to B.Tech credit transfer eligibility, subject mapping, documents and next steps." },
    ],
    links: [{ rel: "canonical", href: "https://eduacharyainstitute.in/b-tech-credit-transfer" }],
  }),
  component: CreditTransferPage,
});

const eligibilityCriteria = [
  { icon: Landmark, title: "Recognized previous institution", copy: "Credits should be earned from an institution recognized by the relevant authority and accepted under the receiving university's rules." },
  { icon: BookOpen, title: "Comparable curriculum", copy: "Subjects, syllabus content, learning hours and programme outcomes are compared to determine meaningful equivalency." },
  { icon: ShieldCheck, title: "Required academic standing", copy: "Passing grades, GPA, completed semesters and any university-specific minimum performance requirements are reviewed." },
  { icon: FileCheck2, title: "Complete academic records", copy: "Transcripts, mark sheets, detailed syllabi and supporting university documents are needed for formal assessment." },
];

const reviewSteps = [
  ["01", "Share your academic history", "Tell us your previous course, university, branch, completed semesters and current academic status."],
  ["02", "Prepare the evidence", "Collect transcripts, mark sheets, course syllabi and recognition details for the university review."],
  ["03", "Map eligible subjects", "The receiving university compares your previous study with its curriculum and identifies possible equivalencies."],
  ["04", "Confirm the remaining pathway", "You receive the university's decision on accepted credits, remaining subjects and applicable study duration."],
];

function CreditTransferPage() {
  return (
    <main className="credit-page">
      <header className="credit-page-nav">
        <Link className="brand hero-brand" to="/">
          <img
            className="navbar-logo"
            src={`${import.meta.env.BASE_URL}images/logo_sm_black-CY_9RSwn.png`}
            alt=""
            aria-hidden="true"
          />
          <span className="brand-name">EduAcharya</span>
        </Link>
        <Link className="credit-back" to="/"><ArrowLeft /> Back to home</Link>
      </header>

      <section className="credit-page-hero">
        <div>
          <span className="credit-page-kicker">B.Tech credit transfer guide</span>
          <h1>Continue your degree.<br/><em>Keep eligible progress.</em></h1>
          <p>Credit transfer can help eligible students continue their B.Tech journey at a new university without automatically repeating every completed subject.</p>
          <div className="credit-page-actions"><a className="button primary" href="#credit-enquiry">Request a free assessment <ArrowRight /></a><a className="button outline" href="#how-it-works">See how it works</a></div>
        </div>
        <aside><GraduationCap/><b>Student-first guidance</b><p>Edu Acharya keeps transparency and open communication at the centre of every credit-transfer enquiry.</p><strong>10+ years</strong><span>of student guidance experience</span></aside>
      </section>

      <section className="credit-explainer">
        <div className="credit-section-heading"><span>01 · Understand the process</span><h2>What is B.Tech<br/>credit transfer?</h2></div>
        <div className="credit-prose"><p><strong>B.Tech credit transfer</strong> is the formal process of evaluating course credits earned at one university for possible acceptance by another university. When credits are approved, the student completes the remaining requirements of the new university's programme.</p><p>For example, a mechanical engineering student who studied at University A may wish to continue at University B. University B reviews the student's completed subjects, grades, syllabus and academic records before deciding which credits can be carried forward.</p><div className="credit-notice"><ShieldCheck/><p><b>Important:</b> Transfer is not automatic. The receiving university makes the final decision according to its academic regulations.</p></div></div>
      </section>

      <section className="credit-eligibility" id="eligibility-criteria">
        <div className="credit-section-heading"><span>02 · Eligibility criteria</span><h2>Are you eligible for<br/>B.Tech credit transfer?</h2><p>Every application is reviewed individually. These are the main factors universities generally consider.</p></div>
        <div className="credit-criteria-grid">{eligibilityCriteria.map(({icon:Icon,title,copy})=><article key={title}><span><Icon/></span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <p className="credit-policy-note">Universities may cap transferable credits—often around 50–70% of total programme credits—and may restrict transfers by year or semester. Limits vary by institution and are not guaranteed.</p>
      </section>

      <section className="credit-process" id="how-it-works">
        <div className="credit-section-heading"><span>03 · How it works</span><h2>A clear, evidence-led review.</h2></div>
        <div className="credit-process-grid">{reviewSteps.map(([number,title,copy])=><article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section className="credit-enquiry" id="credit-enquiry">
        <div><span className="credit-page-kicker">I need more information</span><h2>Tell us where you<br/>left off.</h2><p>Share your basic academic details. An Edu Acharya counsellor will contact you to explain the possible next steps.</p><small>No admission or credit outcome is guaranteed before formal university review.</small></div>
        <form onSubmit={(event)=>event.preventDefault()}>
          <label><span>Name</span><input name="name" required placeholder="Your full name" /></label>
          <label><span>Phone number</span><input name="phone" required inputMode="tel" placeholder="+91 00000 00000" /></label>
          <label><span>Course</span><input name="course" required placeholder="e.g. B.Tech" /></label>
          <label><span>Branch</span><input name="branch" required placeholder="e.g. Mechanical Engineering" /></label>
          <label><span>Previous university</span><input name="university" required placeholder="University name" /></label>
          <label><span>Course completion year</span><input name="year" inputMode="numeric" placeholder="e.g. 2023" /></label>
          <button className="button primary" type="submit">Check my eligibility <ArrowRight /></button>
        </form>
      </section>
    </main>
  );
}
