import React, { useState, useEffect } from 'react';
import './App.css';

const AREAS = [
  { n:"01", h:"Criminal litigation and trials",
    p:"Bail, FIR quashing, criminal complaints, trial advocacy including examination-in-chief and cross-examination, and defence in complex prosecutions.",
    acts:["Indian Penal Code","CrPC","NDPS Act","Prevention of Corruption Act"] },

  { n:"02", h:"White-collar and economic offences",
    p:"Defence in investigations and prosecutions involving money laundering, securities violations and corruption, including CBI and enforcement matters.",
    acts:["PMLA","SEBI Act","Prevention of Corruption Act","CBI matters"] },

  { n:"03", h:"Commercial and corporate litigation",
    p:"High-value contractual and shareholder disputes before commercial courts and High Courts, for corporates, banks and public sector entities.",
    acts:["Commercial Courts Act","Companies Act","Specific Relief Act"] },

  { n:"04", h:"Insolvency and bankruptcy",
    p:"Section 7, 9 and 10 petitions, resolution and liquidation proceedings, and appeals, for financial creditors, operational creditors and corporate debtors.",
    acts:["Insolvency and Bankruptcy Code","NCLT","NCLAT"] },

  { n:"05", h:"Arbitration",
    p:"Domestic ad hoc and institutional arbitrations, interim relief, and enforcement and setting-aside proceedings before the courts.",
    acts:["Arbitration and Conciliation Act","Sections 9, 11, 34 and 37"] },

  { n:"06", h:"Banking and finance disputes",
    p:"Recovery, enforcement of security interest, and borrower-side defence before the Debts Recovery Tribunal and its appellate tribunal.",
    acts:["SARFAESI Act","RDBI Act","DRT","DRAT"] },

  { n:"07", h:"Media, defamation and copyright",
    p:"Advisory and litigation for media houses and individuals on defamation, pre-publication risk, injunctions and copyright infringement.",
    acts:["Copyright Act","Defamation","Injunctions"] },

  { n:"08", h:"Matrimonial and family law",
    p:"High-value divorce, child custody, domestic violence proceedings and succession disputes, including cross-border matters for NRI clients.",
    acts:["Hindu Marriage Act","DV Act","Guardians and Wards Act","Succession"] },

  { n:"09", h:"Consumer and regulatory",
    p:"Representation before consumer fora and regulators for manufacturers, developers, hospitality companies and service providers.",
    acts:["Consumer Protection Act","NCDRC","State Commissions"] },

  { n:"10", h:"MSME disputes",
    p:"Claims and defence in delayed payment and supply disputes, including facilitation council proceedings and the arbitration that follows.",
    acts:["MSMED Act","Facilitation Council","Arbitration"] }
];

const TEAM = [
  { name:"Satyam Chaturvedi", role:"Criminal litigation and white-collar defence",
    bio:"Specialises in criminal trials, bail, FIR quashing, PMLA proceedings, CBI investigations and corruption prosecutions. Over a decade of courtroom experience, appearing regularly before High Courts and trial courts across India. His strengths lie in trial advocacy, advising clients on criminal exposure, and managing sensitive matters involving corporate executives, real estate developers and public figures.",
    mail:"satyam@satyamchaturvedi.in" },

  { name:"Ritu Raj Srivastava", role:"Commercial litigation, insolvency, banking and media law",
    bio:"Extensive experience in commercial and corporate litigation, insolvency and bankruptcy, banking and financial disputes, consumer law, media and defamation, and regulatory litigation. Has appeared for major automobile manufacturers, private sector banks, real estate developers, hospitality companies and leading media houses before the NCLT, NCLAT, DRT, DRAT, NCDRC, State Commissions and High Courts.",
    mail:"" },

  { name:"Nicholas Choudhury", role:"Commercial litigation, arbitration and insolvency",
    bio:"Focuses on high-value commercial litigation, arbitration and insolvency. Has appeared and argued before the Supreme Court of India, multiple High Courts, the NCLT, NCLAT, NCDRC and arbitral tribunals. His experience includes large-scale arbitrations, insolvency proceedings involving major corporate entities, and constitutional and appellate matters. Several matters handled by him have resulted in reported judgments.",
    mail:"" },

  { name:"Rytim Vohra Ahuja", role:"Matrimonial, family law and civil litigation",
    bio:"Specialises in matrimonial and family law, including high-value divorce disputes, child custody, domestic violence proceedings, succession disputes and related civil litigation. Regularly represents Indian and NRI clients in sensitive cross-border family disputes. Her practice also covers civil and criminal litigation arising from matrimonial conflict, copyright injunctions and real estate-related criminal proceedings.",
    mail:"" },

  { name:"Aparajita Budhwar", role:"Criminal litigation, arbitration and trial practice",
    bio:"Significant experience in criminal litigation, trial work and arbitration-related proceedings. Drafts and argues bail applications, FIR quashing petitions, criminal complaints and matrimonial matters, appearing regularly before the Punjab and Haryana High Court and district courts. Has worked extensively on PMLA, CBI, NDPS, MSME, domestic violence and arbitration matters.",
    mail:"" },

  { name:"Keshav Tomar", role:"Junior associate · Litigation and legal research",
    bio:"Supports the team across criminal, commercial, arbitration, insolvency and regulatory matters. His work includes legal research, drafting assistance, preparation of case notes, and support during proceedings before the Supreme Court, High Courts, tribunals and trial courts.",
    mail:"" }
];

export default function App() {
  const [gateHidden, setGateHidden] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formNote, setFormNote] = useState("Sending this form does not create an advocate-client relationship. Connect the form to the chamber inbox before the site goes live.");

  useEffect(() => {
    let agreed = false;
    try { 
      agreed = sessionStorage.getItem('gcAgreed') === '1'; 
    } catch(e) {}
    
    if (agreed) {
      setGateHidden(true);
      document.body.classList.remove('locked');
    } else {
      setGateHidden(false);
      document.body.classList.add('locked');
    }

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { 
        if(e.isIntersecting){ 
          e.target.classList.add('in'); 
          io.unobserve(e.target); 
        } 
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    
    return () => {
      document.body.classList.remove('locked');
      io.disconnect();
    };
  }, []);

  const handleAgree = () => {
    setGateHidden(true);
    document.body.classList.remove('locked');
    try { sessionStorage.setItem('gcAgreed', '1'); } catch(e){}
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSendEnquiry = () => {
    setFormNote("Connect this form to the chamber inbox or a CRM before the site goes live.");
  };

  return (
    <>
      {/* ================= BAR COUNCIL DISCLAIMER GATE ================= */}
      {!gateHidden && (
        <div className="gate" id="gate" role="dialog" aria-modal="true" aria-labelledby="gateTitle">
          <div className="gate-box">
            {/* NOTE: Please replace the src with the actual base64 string from line 282 in in.html */}
            <img src="/gate.png" alt="Bar Council" />
            <h2 id="gateTitle">Disclaimer</h2>
            <p>The Bar Council of India does not permit advertisement or solicitation by advocates. By accessing this website, you acknowledge and confirm that you are seeking information relating to G&amp;C Legal of your own accord, and that there has been no form of solicitation, advertisement or inducement by the firm or its members.</p>
            <p>The contents of this website are for informational purposes only and should not be construed as legal advice or as the creation of an advocate-client relationship. The firm is not liable for any consequence of any action taken by the user relying on material or information provided here.</p>
            <div className="gate-actions">
              <button className="btn btn--solid" id="gateAgree" type="button" onClick={handleAgree}>I agree</button>
              <a className="btn btn--line" href="https://www.google.com">Leave site</a>
            </div>
          </div>
        </div>
      )}

      {/* ================= HEADER ================= */}
      <header className="head">
        <div className="wrap head-in">
          <a className="brand" href="#top">
            {/* NOTE: Please replace the src with the actual base64 string from line 297 in in.html */}
            <img src="/logo.png" alt="G&C Legal Logo" />
            <span>Advocates<br />&amp; Solicitors</span>
          </a>
          <button 
            className="burger" 
            id="burger" 
            aria-expanded={menuOpen} 
            aria-controls="nav" 
            onClick={handleMenuToggle}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <nav className={`nav ${menuOpen ? 'open' : ''}`} id="nav">
            <a href="#firm" onClick={closeMenu}>The firm</a>
            <a href="#practice" onClick={closeMenu}>Practice</a>
            <a href="#people" onClick={closeMenu}>People</a>
            <a href="#approach" onClick={closeMenu}>Approach</a>
            <a className="btn btn--solid" href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero" id="top">
        <div className="wrap hero-in">
          <div>
            <p className="mark"><i>I</i> New Delhi</p>
            <h1>A litigation firm built on <em>specialisation</em>, not generalists.</h1>
            <p className="hero-sub">G&amp;C Legal represents individuals, corporations, financial institutions, media houses and public sector entities in high-stakes disputes. Every member of the firm holds focused expertise in a distinct area of law, and the matter goes to the person who argues it every week.</p>
            <div className="hero-cta">
              <a className="btn btn--solid" href="#contact">Speak to the firm</a>
              <a className="btn btn--line" href="#practice">Practice areas</a>
            </div>
          </div>

          {/* SIGNATURE: the forum index */}
          <div className="forums">
            <b>Appears before</b>
            <ol>
              <li style={{ animationDelay: '.05s' }}>Supreme Court of India <span>Delhi</span></li>
              <li style={{ animationDelay: '.13s' }}>High Courts <span>Pan-India</span></li>
              <li style={{ animationDelay: '.21s' }}>NCLT &amp; NCLAT <span>Insolvency</span></li>
              <li style={{ animationDelay: '.29s' }}>DRT &amp; DRAT <span>Banking</span></li>
              <li style={{ animationDelay: '.37s' }}>NCDRC &amp; State Commissions <span>Consumer</span></li>
              <li style={{ animationDelay: '.45s' }}>Arbitral Tribunals <span>Ad hoc &amp; institutional</span></li>
              <li style={{ animationDelay: '.53s' }}>Trial Courts <span>Across the country</span></li>
            </ol>
          </div>
        </div>
      </section>

      {/* ================= STATEMENT ================= */}
      <section className="band">
        <div className="wrap band-in">
          <blockquote>Litigation is won on preparation, not on presence. We staff a matter with the person who knows that statute best, and we keep them on it to the end.</blockquote>
          <div>
            <p>Most firms of our size place a single partner across every kind of dispute. We do the opposite. Criminal trials, insolvency proceedings, arbitrations and matrimonial matters each sit with a member whose practice is built around them.</p>
            <p>The result is a firm that can take on a PMLA prosecution, an IBC petition and a defamation injunction in the same week, without any of them being handled by someone learning on the file.</p>
          </div>
        </div>
      </section>

      {/* ================= THE FIRM ================= */}
      <section className="sec" id="firm">
        <div className="wrap ov-in">
          <div className="reveal">
            <p className="mark"><i>II</i> The firm</p>
            <h2>Structured around domain specialisation.</h2>
            <p className="lede" style={{ marginTop: '22px' }}>G&amp;C Legal is a litigation-centric law firm. Each member brings focused expertise in a distinct area of law, which allows the firm to handle complex, high-stakes disputes across criminal law, white-collar defence, commercial and corporate litigation, insolvency, arbitration, banking, media law, matrimonial and family law, and regulatory proceedings.</p>
            <p className="lede">The firm appears regularly before the Supreme Court of India, various High Courts, the NCLT and NCLAT, arbitral tribunals, and trial courts across the country, representing individuals, corporations, financial institutions, media houses and public sector entities.</p>
            <div className="ov-figs">
              <div><b>10</b><span>Practice areas</span></div>
              <div><b>7</b><span>Members of the firm</span></div>
              <div><b>2 decades</b><span>Experience at the head of the firm</span></div>
              <div><b>Patiala House</b><span>Chambers, New Delhi</span></div>
            </div>
          </div>
          <div className="ov-media reveal">
            <div className="shot" data-slot="Chambers / partners portrait"></div>
            <div className="shot" data-slot="Patiala House Courts exterior"></div>
          </div>
        </div>
      </section>

      {/* ================= PRACTICE AREAS ================= */}
      <section className="sec sec--alt" id="practice">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="mark"><i>III</i> Practice</p>
            <h2>What we argue.</h2>
            <p className="lede">Ten areas of contentious work, listed with the enactments they are conducted under.</p>
          </div>
          <div className="areas reveal" id="areaGrid">
            {AREAS.map((a, index) => (
              <article className="area" key={index}>
                <span className="area-no">{a.n}</span>
                <h3>{a.h}</h3>
                <p>{a.p}</p>
                <div className="area-acts">
                  <b>Conducted under</b>
                  <ul>
                    {a.acts.map((act, actIndex) => (
                      <li key={actIndex}>{act}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PEOPLE ================= */}
      <section className="sec sec--dark" id="people">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="mark mark--dk"><i>IV</i> People</p>
            <h2>The firm is its members.</h2>
            <p className="lede">Seven advocates, each holding a defined area of the practice.</p>
          </div>

          {/* Head of the firm */}
          <article className="lead reveal">
            <div className="shot" data-slot="Vikas Gogne — portrait"></div>
            <div>
              <p className="lead-role">Head of the firm</p>
              <h3>Vikas Gogne</h3>
              <p className="lead-title">Advocate &middot; Dispute resolution, white-collar crime, commercial litigation and arbitration</p>
              <p>Vikas Gogne heads G&amp;C Legal and has close to two decades of experience in dispute resolution, white-collar crime, commercial litigation, arbitration, MSME disputes and complex criminal prosecutions. He has led teams in high-profile matters involving multinational corporations, senior corporate executives, media personalities and public figures.</p>
              <p>His practice spans proceedings under the Commercial Courts Act, the Arbitration Act, PMLA, the SEBI Act, the Copyright Act, the NDPS Act, the Prevention of Corruption Act and the Indian Penal Code. He is known for handling matters carrying significant reputational, financial and regulatory exposure, and for securing quashing of proceedings, injunctions and protection orders across jurisdictions.</p>
              <a className="lead-mail" href="mailto:vikas.gogne@outlook.com">vikas.gogne@outlook.com</a>
            </div>
          </article>

          <div className="team reveal" id="teamGrid">
            {TEAM.map((m, index) => (
              <article className="member" key={index}>
                <div className="shot" data-slot={`${m.name} — portrait`}></div>
                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>
                <p>{m.bio}</p>
                {m.mail && <a href={`mailto:${m.mail}`}>{m.mail}</a>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="sec" id="approach">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="mark"><i>V</i> Approach</p>
            <h2>How we run a matter.</h2>
          </div>
          <div className="appr reveal">
            <div>
              <h3>The specialist takes the file</h3>
              <p>A matter is assigned by subject, not by availability. The member who conducts that class of proceeding week after week is the one who drafts, appears and advises on it.</p>
            </div>
            <div>
              <h3>Exposure is mapped first</h3>
              <p>Before strategy, we set out what is actually at risk: criminal exposure, regulatory consequence, financial liability and reputational effect. Clients are told the realistic range of outcomes, not the best one.</p>
            </div>
            <div>
              <h3>Discretion is assumed</h3>
              <p>Much of our work involves investigations, family disputes and matters that attract press attention. Confidentiality is the default position of the firm, not a service we bill for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="sec sec--alt" id="contact">
        <div className="wrap ct-in">
          <div className="reveal">
            <p className="mark"><i>VI</i> Contact</p>
            <h2>Speak to the firm.</h2>
            <p className="lede">If your matter is urgent, say so in the first line. Enquiries reaching the chambers are reviewed by the member who handles that area.</p>
            <dl className="detail">
              <div>
                <dt>Chambers</dt>
                <dd>G&amp;C Legal, Advocates and Solicitors<br />18, Lawyers' Chambers, Patiala House Courts<br />New Delhi</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:vikas.gogne@outlook.com">vikas.gogne@outlook.com</a></dd>
              </div>
              <div>
                <dt>Telephone</dt>
                <dd>[Add chamber telephone number]</dd>
              </div>
              <div>
                <dt>Bar enrolment</dt>
                <dd>[Add Bar Council enrolment numbers if you wish to display them]</dd>
              </div>
            </dl>
          </div>

          <div className="form reveal">
            <h3>Enquiry</h3>
            <p>Please do not send confidential or privileged material through this form.</p>
            <div className="two">
              <div className="field">
                <label htmlFor="f-name">Name</label>
                <input id="f-name" type="text" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="f-org">Organisation</label>
                <input id="f-org" type="text" autoComplete="organization" />
              </div>
            </div>
            <div className="two">
              <div className="field">
                <label htmlFor="f-mail">Email</label>
                <input id="f-mail" type="email" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="f-tel">Telephone</label>
                <input id="f-tel" type="tel" autoComplete="tel" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-area">Nature of matter</label>
              <select id="f-area">
                <option>Criminal litigation and trials</option>
                <option>White-collar and economic offences</option>
                <option>Commercial and corporate litigation</option>
                <option>Insolvency and bankruptcy</option>
                <option>Arbitration</option>
                <option>Banking and finance disputes</option>
                <option>Media, defamation and copyright</option>
                <option>Matrimonial and family law</option>
                <option>Consumer and regulatory</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="f-msg">Brief outline</label>
              <textarea id="f-msg" placeholder="Forum, stage of proceedings, and next date if listed"></textarea>
            </div>
            <button className="btn btn--solid" type="button" id="sendBtn" onClick={handleSendEnquiry}>Send enquiry</button>
            <p className="note" id="formNote">{formNote}</p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot-in">
            <div>
              <p className="foot-word">G<em>&amp;</em>C Legal</p>
              <p className="foot-tag">Advocates and Solicitors</p>
            </div>
            <div className="foot-col">
              <b>Navigate</b>
              <a href="#firm">The firm</a>
              <a href="#practice">Practice</a>
              <a href="#people">People</a>
              <a href="#approach">Approach</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="foot-col">
              <b>Chambers</b>
              <p>18, Lawyers' Chambers<br />Patiala House Courts<br />New Delhi<br /><br /><a href="mailto:vikas.gogne@outlook.com" style={{ display: 'inline' }}>vikas.gogne@outlook.com</a></p>
            </div>
          </div>

          <p className="disclaimer">
            <b style={{ color: 'rgba(255,255,255,.7)', fontWeight: '600' }}>Disclaimer.</b>
            The Bar Council of India does not permit advertisement or solicitation by advocates. The information on this website is provided solely at the request of the user and is intended for general information only. It does not constitute legal advice, nor does accessing it create an advocate-client relationship between the user and G&amp;C Legal. The firm accepts no liability for any action taken in reliance on the contents of this site. Transmission of information through this website does not amount to, and receipt of it does not constitute, an advocate-client relationship.
          </p>
          <div className="foot-base">
            <span>&copy; <span id="yr">{new Date().getFullYear()}</span> G&amp;C Legal. All rights reserved.</span>
            <span>New Delhi, India</span>
          </div>
        </div>
      </footer>
    </>
  );
}
