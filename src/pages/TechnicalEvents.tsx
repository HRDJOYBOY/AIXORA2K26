import { Link } from "react-router-dom";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScHmq3EmwThSQjSpb0pyofm2H8-It5NoaNWSZvddPWIwmJB5w/viewform?usp=publish-editor";

const TechnicalEvents = () => {
  return (
    <div className="relative z-10">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b-2 border-secondary/30" style={{ background: "rgba(10, 10, 26, 0.8)", boxShadow: "0 8px 32px hsla(187, 100%, 50%, 0.15)" }}>
        <div className="container mx-auto px-5 py-5 flex justify-between items-center">
          <Link to="/" className="font-display text-2xl md:text-3xl font-black tracking-wider text-gradient-section">AIXORA'26</Link>
          <nav className="flex gap-5 md:gap-10">
            <Link to="/" className="text-foreground text-xs md:text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">Home</Link>
            <Link to="/non-technical-events" className="text-foreground text-xs md:text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">Non-Tech</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-5 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-black mb-4 tracking-wider text-gradient-hero">Technical Events</h1>
        <p className="text-muted-foreground text-lg mb-8">Challenge your skills. Showcase your talent.</p>
        <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="btn-cta-primary px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-wide inline-block">Register Now</a>
      </section>

      {/* Hackathon */}
      <section className="py-16 px-5">
        <div className="container mx-auto max-w-4xl">
          <div className="card-event rounded-xl p-8 md:p-12 mb-12">
            <span className="font-display text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full inline-block mb-4" style={{ background: "hsla(42, 100%, 50%, 0.2)", color: "hsl(42, 100%, 50%)" }}>🏆 Flagship Event</span>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-2 text-gradient-section">NEURAHACK 1.0 2K26</h2>
            <p className="text-secondary font-display text-sm mb-8 tracking-wide">"Build Smart. Hack Smarter."</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Date", value: "10.04.2026" },
                { label: "Duration", value: "6 Hours" },
                { label: "Team Size", value: "2–4 Members" },
                { label: "Mode", value: "Offline / On-Campus" },
                { label: "Fee", value: "₹250/head (with food)" },
              ].map((d) => (
                <div key={d.label} className="info-box-style rounded-lg p-4 text-center">
                  <p className="text-secondary font-display text-[10px] uppercase tracking-wide mb-1">{d.label}</p>
                  <p className="text-foreground text-sm font-semibold">{d.value}</p>
                </div>
              ))}
            </div>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📋 Event Schedule</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-secondary/30">
                    <th className="text-left py-3 px-4 text-secondary font-display text-xs uppercase">Time</th>
                    <th className="text-left py-3 px-4 text-secondary font-display text-xs uppercase">Activity</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  {[
                    ["8:30 – 9:00 AM", "Participant Registration & Team Verification"],
                    ["9:00 – 9:30 AM", "Welcome Address & Hackathon Briefing"],
                    ["9:30 – 9:45 AM", "Problem Statement Announcement"],
                    ["9:45 – 10:30 AM", "Ideation & Planning"],
                    ["10:30 – 1:30 PM", "Development & Coding Phase"],
                    ["1:30 – 2:00 PM", "Testing & Final Preparation"],
                    ["2:00 – 2:50 PM", "Project Demonstration & Presentation"],
                    ["2:50 – 3:00 PM", "Judges Discussion & Result Finalization"],
                    ["3:00 – 4:00 PM", "Prize Distribution & Closing Ceremony"],
                  ].map(([time, activity]) => (
                    <tr key={time} className="border-b border-muted/30 hover:bg-muted/10 transition-colors">
                      <td className="py-3 px-4 text-accent font-medium whitespace-nowrap">{time}</td>
                      <td className="py-3 px-4">{activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📜 Rules</h3>
            <ul className="space-y-2 text-muted-foreground text-sm mb-10 list-disc list-inside">
              <li>Each team must consist of 2–4 members.</li>
              <li>Projects must be developed during the hackathon period.</li>
              <li>Pre-built projects are not allowed.</li>
              <li>Participants may use open-source tools and libraries.</li>
              <li>Internet access is allowed for research purposes.</li>
              <li>Every team must present their project to the judges.</li>
              <li>Judge's decision will be final.</li>
              <li>Hackathon participants are not allowed to take part in any other events.</li>
            </ul>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📞 Coordinators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="info-box-style rounded-lg p-4">
                <p className="text-foreground text-sm font-semibold">Afnan Saif M S</p>
                <a href="tel:+919042855211" className="text-secondary hover:text-primary text-sm transition-colors">+91 9042855211</a>
                
              </div>
              <div className="info-box-style rounded-lg p-4">
                <p className="text-foreground text-sm font-semibold">Dheep Hirthick S (Co-Coordinator)</p>
                <a href="tel:+918610050931" className="text-secondary hover:text-primary text-sm transition-colors">+91 8610050931</a>
                <p className="text-foreground text-sm font-semibold">NADHIYA S (TEAM)</p>
                <p className="text-foreground text-sm font-semibold">AMULYA A (TEAM)</p>
                <p className="text-foreground text-sm font-semibold">BHAVYA (TEAM)</p>
              </div>
            </div>
          </div>

          {/* Ideathon */}
          <div className="card-event rounded-xl p-8 md:p-12 mb-12">
            <span className="font-display text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full inline-block mb-4" style={{ background: "hsla(335, 100%, 43%, 0.2)", color: "hsl(335, 100%, 43%)" }}>Technical</span>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-2 text-gradient-section">IDEAFLUX 1.0 – IDEATHON</h2>
            <p className="text-secondary font-display text-sm mb-8 tracking-wide">"Ignite. Imagine. Innovate."</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Date", value: "10.04.2026" },
                { label: "Team Size", value: "2–4 Members" },
                { label: "Mode", value: "Offline / On-Campus" },
                { label: "Theme", value: "Open Innovation" },
              ].map((d) => (
                <div key={d.label} className="info-box-style rounded-lg p-4 text-center">
                  <p className="text-secondary font-display text-[10px] uppercase tracking-wide mb-1">{d.label}</p>
                  <p className="text-foreground text-sm font-semibold">{d.value}</p>
                </div>
              ))}
            </div>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📋 Event Schedule</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-secondary/30">
                    <th className="text-left py-3 px-4 text-secondary font-display text-xs uppercase">Time</th>
                    <th className="text-left py-3 px-4 text-secondary font-display text-xs uppercase">Activity</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  {[
                    ["09:45 – 10:00 AM", "Participant Registration"],
                    ["10:00 – 10:05 AM", "Welcome Address & Event Briefing"],
                    ["10:05 – 11:40 AM", "Idea Presentation by Teams"],
                    ["11:40 – 11:55 AM", "Judges Evaluation"],
                    ["11:55 – 12:00 PM", "Result Announcement"],
                  ].map(([time, activity]) => (
                    <tr key={time} className="border-b border-muted/30 hover:bg-muted/10 transition-colors">
                      <td className="py-3 px-4 text-accent font-medium whitespace-nowrap">{time}</td>
                      <td className="py-3 px-4">{activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📜 Rules</h3>
            <ul className="space-y-2 text-muted-foreground text-sm mb-10 list-disc list-inside">
              <li>Each team must consist of 2–4 members.</li>
              <li>Participants should present original and innovative ideas.</li>
              <li>Ideas can be presented using PowerPoint presentation or verbal explanation.</li>
              <li>Teams must follow the allotted presentation time.</li>
              <li>Ideas should focus on creative solutions for real-world problems.</li>
              <li>Judges' decision will be final.</li>
            </ul>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">🏆 Prizes</h3>
            <p className="text-foreground text-sm mb-6">Winner – Shield + Certificate | Runner – Shield + Certificate</p>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📞 Coordinators</h3>
            <div className="info-box-style rounded-lg p-4">
              <p className="text-foreground text-sm font-semibold">Kishore B, Kishanth M – III Year</p>
              <p className="text-muted-foreground text-sm mt-1">Team: Gayathri, Sowmiya, Atheeshwari (II & I Year)</p>
            </div>
          </div>

          {/* Paper Presentation */}
          <div className="card-event rounded-xl p-8 md:p-12 mb-12">
            <span className="font-display text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full inline-block mb-4" style={{ background: "hsla(335, 100%, 43%, 0.2)", color: "hsl(335, 100%, 43%)" }}>Technical</span>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-2 text-gradient-section">NEURAL NEXUS 2K26</h2>
            <p className="text-secondary font-display text-sm mb-8 tracking-wide">Paper Presentation</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Team Size", value: "Up to 4 Members" },
                { label: "Mode", value: "On-Campus" },
                { label: "Tool", value: "PowerPoint (PPT)" },
                { label: "Slides", value: "Max 10–12" },
              ].map((d) => (
                <div key={d.label} className="info-box-style rounded-lg p-4 text-center">
                  <p className="text-secondary font-display text-[10px] uppercase tracking-wide mb-1">{d.label}</p>
                  <p className="text-foreground text-sm font-semibold">{d.value}</p>
                </div>
              ))}
            </div>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📋 Event Schedule</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-secondary/30">
                    <th className="text-left py-3 px-4 text-secondary font-display text-xs uppercase">Time</th>
                    <th className="text-left py-3 px-4 text-secondary font-display text-xs uppercase">Activity</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  {[
                    ["10:00 – 10:30 AM", "Registration & Participant Briefing"],
                    ["10:30 AM – 12:30 PM", "Session 1"],
                    ["01:30 – 02:30 PM", "Session 2"],
                    ["02:30 – 03:00 PM", "Judges Evaluation"],
                    ["03:00 – 04:00 PM", "Prize Distribution"],
                  ].map(([time, activity]) => (
                    <tr key={time} className="border-b border-muted/30 hover:bg-muted/10 transition-colors">
                      <td className="py-3 px-4 text-accent font-medium whitespace-nowrap">{time}</td>
                      <td className="py-3 px-4">{activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📜 Rules</h3>
            <ul className="space-y-2 text-muted-foreground text-sm mb-10 list-disc list-inside">
              <li>Each participant/team must submit their paper in advance (1 day before).</li>
              <li>Paper should relate to AI, Data Science, emerging technologies, or innovative research.</li>
              <li>Participants can present individually or as a team (max 3 members presenting).</li>
              <li>Each team gets 5–7 min for presenting and 2–3 min for Q&A.</li>
              <li>Presentation must be prepared using PowerPoint (PPT), max 10–12 slides.</li>
              <li>Bring your presentation on a pen drive and report 30 min before the event.</li>
              <li>Plagiarism or copied content is strictly prohibited.</li>
              <li>Judges' decision will be final and binding.</li>
            </ul>

            <p className="text-muted-foreground text-sm mb-6"><strong className="text-foreground">Topics:</strong> AI, ML, DL, Data Science, Industry 4.0, IoT, Cybersecurity, or Related Innovative Technologies</p>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📞 Coordinators</h3>
            <div className="info-box-style rounded-lg p-4">
              <p className="text-foreground text-sm font-semibold">Sushmitha R – III Year</p>
              <a href="tel:+918825438806" className="text-secondary hover:text-primary text-sm transition-colors">+91 8825438806</a>
              <p className="text-muted-foreground text-sm mt-1">Co-Coordinators: Inbarasi, Sivarangini</p>
            </div>
          </div>

          {/* Tech Quiz */}
          <div className="card-event rounded-xl p-8 md:p-12 mb-12">
            <span className="font-display text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full inline-block mb-4" style={{ background: "hsla(335, 100%, 43%, 0.2)", color: "hsl(335, 100%, 43%)" }}>Technical</span>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-2 text-gradient-section">QUIZBYTE</h2>
            <p className="text-secondary font-display text-sm mb-8 tracking-wide">Technical Quiz</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Date", value: "10.04.2026" },
                { label: "Mode", value: "Offline / On-Campus" },
                { label: "Type", value: "Individual" },
              ].map((d) => (
                <div key={d.label} className="info-box-style rounded-lg p-4 text-center">
                  <p className="text-secondary font-display text-[10px] uppercase tracking-wide mb-1">{d.label}</p>
                  <p className="text-foreground text-sm font-semibold">{d.value}</p>
                </div>
              ))}
            </div>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📋 Event Schedule</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-secondary/30">
                    <th className="text-left py-3 px-4 text-secondary font-display text-xs uppercase">Time</th>
                    <th className="text-left py-3 px-4 text-secondary font-display text-xs uppercase">Activity</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  {[
                    ["09:45 – 10:00 AM", "Participant Registration"],
                    ["10:00 – 10:05 AM", "Round 1 – MCQ"],
                    ["10:05 – 11:40 AM", "Round 2 – Technical Round"],
                    ["11:40 – 11:55 AM", "Round 3 – Rapid Fire / Final"],
                    ["11:55 – 12:00 PM", "Result Announcement"],
                  ].map(([time, activity]) => (
                    <tr key={time} className="border-b border-muted/30 hover:bg-muted/10 transition-colors">
                      <td className="py-3 px-4 text-accent font-medium whitespace-nowrap">{time}</td>
                      <td className="py-3 px-4">{activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📜 Rules</h3>
            <ul className="space-y-2 text-muted-foreground text-sm mb-10 list-disc list-inside">
              <li>Participants must follow quiz instructions.</li>
              <li>Mobile phones and internet use are not allowed.</li>
              <li>Each question must be answered within the given time.</li>
              <li>No negative marking.</li>
              <li>The decision of the quiz coordinator/judges is final.</li>
            </ul>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">🏆 Prizes</h3>
            <p className="text-foreground text-sm mb-6">Winner – Shield + Certificate | Runner – Shield + Certificate</p>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📞 Coordinators</h3>
            <div className="info-box-style rounded-lg p-4">
              <p className="text-foreground text-sm font-semibold">Mohanasundaram V – III Year</p>
              <p className="text-muted-foreground text-sm mt-1">Team: Manimaran, Kaniyamutha</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-secondary/30 py-10 text-center relative z-10" style={{ background: "#050510" }}>
        <p className="text-muted-foreground text-xs tracking-wide">🚀 AIXORA'26 | Department of Artificial Intelligence and Data Science | Adhiyamaan College of Engineering</p>
        <p className="text-muted-foreground text-[11px] mt-4">© 2026 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default TechnicalEvents;
