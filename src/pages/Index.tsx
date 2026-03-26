import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScHmq3EmwThSQjSpb0pyofm2H8-It5NoaNWSZvddPWIwmJB5w/viewform?usp=publish-editor";
const INSTAGRAM_URL = "https://www.instagram.com/_aixora_26_?igsh=MTk1czNiYnoyYmRudQ==";

const techEvents = [
  { title: "💫 Hackathon", desc: "NEURAHACK 1.0 – 6-Hour Hackathon. Build innovative AI solutions and compete for exciting prizes! (Flagship Event)", flagship: true },
  { title: "⭐ Ideathon", desc: "IdeaFlux 1.0 – Brainstorm creative ideas and present visionary solutions to expert judges." },
  { title: "⭐ Paper Presentation", desc: "Neural Nexus 2K26 – Showcase your research in AI, ML, Data Science, and emerging technologies." },
  { title: "⭐ Tech Quiz", desc: "QuizByte – Test your technical knowledge across AI, Data Science, and emerging technologies." },
];

const nonTechEvents = [
  { title: "⭐ Chess & Carrom", desc: "King's Arena 2K26 – Strategic games that test your mind. Compete in classic board games!" },
  { title: "⭐ E-Sports", desc: "Compete in your favorite gaming titles. Show off your gaming prowess and claim victory!" },
  { title: "⭐ Photography", desc: "Capture the essence of the symposium through your lens. Photography & Videography competition!" },
  { title: "⭐ Fun Sports", desc: "Fun Fiesta 2K26 – Song Snap & Rapid Recall. Team-based fun with fantastic prizes!" },
];

const registrationGuidelines = [
  "Online Registration: Fill in details properly and provide a unique team name.",
  "Hackathon: Once your proposal is approved via email, register immediately using the link in the email to confirm your seat.",
  "Payment Proof: Upload a valid payment screenshot PDF; any mismatch or cheating will cancel registration.",
  "Hackathon participants are not allowed to take part in any other events.",
  "Only team leader should submit the Registration form.",
];

const Index = () => {
  const fadeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-5");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    fadeRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const fadeRef = (el: HTMLDivElement | null) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative z-10">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b-2 border-secondary/30" style={{ background: "rgba(10, 10, 26, 0.8)", boxShadow: "0 8px 32px hsla(187, 100%, 50%, 0.15)" }}>
        <div className="container mx-auto px-5 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/AIXORA'26 FINAL LOGO.png"
              alt="AIXORA'26 Logo"
              className="h-10 w-10 object-contain"
            />
            <div className="font-display text-2xl md:text-3xl font-black tracking-wider text-gradient-section">AIXORA'26</div>
          </div>
          <nav className="flex flex-wrap justify-center gap-3 md:gap-10">
            {["events", "registration", "details", "contact"].map((s) => (
              <button key={s} onClick={() => scrollTo(s)} className="text-foreground text-xs md:text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                {s}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center text-center px-5 py-20 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" style={{ background: "radial-gradient(circle, hsla(187, 100%, 50%, 0.2) 0%, transparent 70%)", animation: "pulse-glow 4s ease-in-out infinite" }} />
        <div className="relative z-10 animate-slide-up">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-5 tracking-wider text-gradient-hero leading-tight">AIXORA'26</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-light tracking-wide">A Two-Day National Level Technical Symposium</p>
          <div className="font-display text-base md:text-lg text-secondary mb-12 uppercase tracking-widest">📅 01th & 02th APRIL 2026</div>
          <div className="flex gap-5 justify-center flex-wrap mb-10">
            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="btn-cta-primary px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-wide inline-block">Register Now</a>
            <button onClick={() => scrollTo("events")} className="btn-cta-secondary px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-wide">Explore Events</button>
          </div>
          <p className="text-sm text-muted-foreground">Venue: Aero Seminar Hall, Adhiyamaan College of Engineering</p>
        </div>
      </section>

      {/* Technical Events */}
      <section id="events" className="py-24 px-5">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-black mb-6 text-center tracking-wider text-gradient-section">Technical Events</h2>
          <p className="text-center mb-12">
            <Link to="/technical-events" className="text-secondary hover:text-primary transition-colors font-display text-sm uppercase tracking-widest">View All Details →</Link>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {techEvents.map((e) => (
              <Link to="/technical-events" key={e.title}>
                <div ref={fadeRef} className="card-event rounded-xl p-8 opacity-0 translate-y-5 transition-all duration-600 h-full">
                  <span className="font-display text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full inline-block mb-4" style={{ background: e.flagship ? "hsla(42, 100%, 50%, 0.2)" : "hsla(335, 100%, 43%, 0.2)", color: e.flagship ? "hsl(42, 100%, 50%)" : "hsl(335, 100%, 43%)" }}>{e.flagship ? "Flagship" : "Technical"}</span>
                  <h3 className="font-display text-xl font-bold mb-4 text-foreground">{e.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-black mb-6 text-center tracking-wider text-gradient-section">Non-Technical Events</h2>
          <p className="text-center mb-12">
            <Link to="/non-technical-events" className="text-secondary hover:text-primary transition-colors font-display text-sm uppercase tracking-widest">View All Details →</Link>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nonTechEvents.map((e) => (
              <Link to="/non-technical-events" key={e.title}>
                <div ref={fadeRef} className="card-event rounded-xl p-8 opacity-0 translate-y-5 transition-all duration-600 h-full">
                  <span className="font-display text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full inline-block mb-4" style={{ background: "hsla(187, 100%, 50%, 0.2)", color: "hsl(187, 100%, 50%)" }}>Non-Technical</span>
                  <h3 className="font-display text-xl font-bold mb-4 text-foreground">{e.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Guidelines */}
      <section id="registration" className="py-24 px-5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-black mb-16 text-center tracking-wider text-gradient-section">Registration Guidelines</h2>
          
          <div className="card-event rounded-xl p-8 md:p-12 mb-10">
            <ul className="space-y-4 mb-10">
              {registrationGuidelines.map((g, i) => (
                <li key={i} className="flex gap-3 text-foreground text-sm">
                  <span className="text-accent font-display font-bold text-lg leading-none">{i + 1}.</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-display text-lg font-bold text-secondary mb-6">💰 Registration Fee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="info-box-style rounded-lg p-6">
                <p className="text-accent font-display text-xs uppercase tracking-wide mb-2">🏆 Flagship Event</p>
                <p className="text-foreground font-bold text-lg mb-1">HACKATHON</p>
                <p className="text-secondary font-display text-xl font-black">₹250 /Per head</p>
                <p className="text-muted-foreground text-sm mt-1">(with food)</p>
              </div>
              <div className="info-box-style rounded-lg p-6">
                <p className="text-accent font-display text-xs uppercase tracking-wide mb-2">🎯 General Events</p>
                <p className="text-foreground text-sm mb-1">1 Technical + 2 Non-Technical = <strong className="text-secondary">₹250</strong> (with food)</p>
                <p className="text-foreground text-sm">3 Non-Technical = <strong className="text-secondary">₹250</strong> (with food)</p>
              </div>
            </div>

            <div className="text-center">
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="btn-cta-primary px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-wide inline-block">Register Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="py-24 px-5">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-black mb-16 text-center tracking-wider text-gradient-section">Event Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {([
              { icon: "📍", title: "Location", text: "Aero Seminar Hall\nAdhiyamaan College of Engineering\nDr. M.G.R. Nagar, Hosur-635130" },
              { icon: "📅", title: "Dates", text: "10th & 11th APRIL 2026\nA Two-Day Event" },
              { icon: "💰", title: "Registration Fee", text: "₹250 per participant\nIncludes food, events access, and prizes" },
              { icon: "🎁", title: "Prizes & Rewards", text: "Shields + Certificates for winners and runners in all events" },
            ]).map((item) => (
              <div key={item.title} className="info-box-style rounded-lg p-5">
                <h4 className="text-secondary font-display text-xs uppercase tracking-wide mb-3">{item.icon} {item.title}</h4>
                <p className="text-foreground text-sm whitespace-pre-line">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div id="contact" className="contact-box rounded-xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl md:text-3xl mb-10 text-secondary">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              <div className="contact-item-style rounded-lg p-5">
                <h4 className="text-primary font-display text-xs uppercase tracking-wide mb-3">📧 Email</h4>
                <p><a href="mailto:aixora.26@gmail.com" className="text-secondary hover:text-primary transition-colors">aixora.26@gmail.com</a></p>
              </div>
              <div className="contact-item-style rounded-lg p-5">
                <h4 className="text-primary font-display text-xs uppercase tracking-wide mb-3">👨‍💼 Student Coordinator</h4>
                <p className="text-foreground text-sm">Jey Harshini S<br /><a href="tel:+919943834203" className="text-secondary hover:text-primary transition-colors">+91 9943834203</a></p>
                <p className="text-foreground text-sm mt-2">Dhanush M<br /><a href="tel:+916380499621" className="text-secondary hover:text-primary transition-colors">+91 6380499621</a></p>
              </div>
              <div className="contact-item-style rounded-lg p-5">
                <h4 className="text-primary font-display text-xs uppercase tracking-wide mb-3">👩‍💼 Staff Coordinator</h4>
                <p className="text-foreground text-sm mt-2">Ms. K. Oviya<br /><a href="tel:+91 63856 65828" className="text-secondary hover:text-primary transition-colors">+91 63856 65828</a></p>
                <p className="text-foreground text-sm">Mrs. J. Ephi Smily<br /><a href="tel:+919842847036" className="text-secondary hover:text-primary transition-colors">+91 9842847036</a></p>
                <p className="text-foreground text-sm mt-2">Mrs. B. Hemamalini<br /><a href="tel:+918072816053" className="text-secondary hover:text-primary transition-colors">+91 8072816053</a></p>

              </div>
              <div className="contact-item-style rounded-lg p-5">
                <h4 className="text-primary font-display text-xs uppercase tracking-wide mb-3">📱 Social Media</h4>
                <p><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">Instagram: @_aixora_26_</a></p>
                <p className="mt-2"><a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">Register Here →</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-secondary/30 py-10 text-center relative z-10" style={{ background: "#050510" }}>
        <p className="text-muted-foreground text-xs tracking-wide">🚀 AIXORA'26 | Department of Artificial Intelligence and Data Science | Adhiyamaan College of Engineering</p>
        <p className="text-muted-foreground text-[11px] mt-4">© 2026 All Rights Reserved | Proudly Presented by AI&DS Department</p>
      </footer>
    </div>
  );
};

export default Index;
