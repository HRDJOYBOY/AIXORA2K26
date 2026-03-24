import { Link } from "react-router-dom";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScHmq3EmwThSQjSpb0pyofm2H8-It5NoaNWSZvddPWIwmJB5w/viewform?usp=publish-editor";

const NonTechnicalEvents = () => {
  return (
    <div className="relative z-10">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b-2 border-secondary/30" style={{ background: "rgba(10, 10, 26, 0.8)", boxShadow: "0 8px 32px hsla(187, 100%, 50%, 0.15)" }}>
        <div className="container mx-auto px-5 py-5 flex justify-between items-center">
          <Link to="/" className="font-display text-2xl md:text-3xl font-black tracking-wider text-gradient-section">AIXORA'26</Link>
          <nav className="flex gap-5 md:gap-10">
            <Link to="/" className="text-foreground text-xs md:text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">Home</Link>
            <Link to="/technical-events" className="text-foreground text-xs md:text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">Tech</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-5 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-black mb-4 tracking-wider text-gradient-hero">Non-Technical Events</h1>
        <p className="text-muted-foreground text-lg mb-8">Fun, creativity, and friendly competition await!</p>
        <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="btn-cta-primary px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-wide inline-block">Register Now</a>
      </section>

      <section className="py-16 px-5">
        <div className="container mx-auto max-w-4xl">

          {/* Chess & Carrom */}
          <div className="card-event rounded-xl p-8 md:p-12 mb-12">
            <span className="font-display text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full inline-block mb-4" style={{ background: "hsla(187, 100%, 50%, 0.2)", color: "hsl(187, 100%, 50%)" }}>Non-Technical</span>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-2 text-gradient-section">KING'S ARENA 2K26</h2>
            <p className="text-secondary font-display text-sm mb-8 tracking-wide">Chess & Carrom</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Participation", value: "Individual" },
                { label: "Mode", value: "Online / On-Campus" },
                { label: "Venue", value: "III-Year Classroom" },
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
                    ["10:00 – 10:30 AM", "Round One (Knockout Match)"],
                    ["10:30 – 11:00 AM", "Round Two (Knockout Match)"],
                    ["11:00 – 11:30 AM", "Final Round"],
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
              <li>All participants must have a valid Chess.com account before the tournament.</li>
              <li>Participants must join the tournament using the link provided by organizers.</li>
              <li>Tournament will be conducted online through the Chess.com platform.</li>
              <li>Each match: 5-minute (Chess) / 10-minute (Carrom) time control per player.</li>
              <li>Join at least 10 minutes before the scheduled start time.</li>
              <li>Players must use only mobile phones to participate.</li>
              <li>Ensure stable internet connection during the match.</li>
              <li>Any cheating, external assistance, or unfair play leads to immediate disqualification.</li>
            </ul>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📞 Coordinators</h3>
            <div className="info-box-style rounded-lg p-4">
              <p className="text-foreground text-sm font-semibold">Samuvel K</p>
              <a href="tel:+918220985839" className="text-secondary hover:text-primary text-sm transition-colors">+91 8220985839</a>
              <p className="text-muted-foreground text-sm mt-1">Co-Coordinators: Logesh, Sandhya, Dharshini</p>
            </div>
          </div>

          {/* Photography / Videography */}
          <div className="card-event rounded-xl p-8 md:p-12 mb-12">
            <span className="font-display text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full inline-block mb-4" style={{ background: "hsla(187, 100%, 50%, 0.2)", color: "hsl(187, 100%, 50%)" }}>Non-Technical</span>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-2 text-gradient-section">Photography & Videography</h2>
            <p className="text-secondary font-display text-sm mb-8 tracking-wide">Capture. Create. Inspire.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Date", value: "02.04.2026" },
                { label: "Team Size", value: "1–2 Members" },
                { label: "Mode", value: "Offline / On-Campus" },
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
                    ["11:30 AM – 12:05 PM", "Round 1 – Shortlist"],
                    ["12:10 – 12:55 PM", "Round 2 – Final Round"],
                    ["3:00 – 4:00 PM", "Winner Announcement"],
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
              <li>Participants can take part individually or in teams of max 2 members.</li>
              <li>May use DSLR cameras, mirrorless cameras, or smartphones.</li>
              <li>Focus on vibrant colors found in nature, people, festivals, or daily life.</li>
              <li>Show traditions, festivals, clothing, dance, and culture.</li>
              <li>Videography: Create a 1–3 minute short story video with a message.</li>
              <li>Capture different emotions like happiness, sadness, excitement, friendship, etc.</li>
            </ul>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">🏆 Prizes</h3>
            <p className="text-foreground text-sm mb-6">🏆 Winner – Shield + Certificate | 🥈 Runner – Shield + Certificate</p>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📞 Coordinators</h3>
            <div className="info-box-style rounded-lg p-4">
              <p className="text-foreground text-sm font-semibold">Lakshaki MJ – III Year</p>
              <a href="tel:+918220985839" className="text-secondary hover:text-primary text-sm transition-colors">+91 8220985839</a>
              <p className="text-muted-foreground text-sm mt-1">Team: Kishore V (III Year), Swetha (II Year)</p>
            </div>
          </div>

         
          {/* E-Sports */}
          <div className="card-event rounded-xl p-8 md:p-12 mb-12">
            <span className="font-display text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full inline-block mb-4" style={{ background: "hsla(187, 100%, 50%, 0.2)", color: "hsl(187, 100%, 50%)" }}>Non-Technical</span>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-2 text-gradient-section">E-SPORTS</h2>
            <p className="text-secondary font-display text-sm mb-8 tracking-wide">Game On. Compete. Conquer.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Participation", value: "Individual / Squad" },
                { label: "Mode", value: "Online / On-Campus" },
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
                    ["10:00 – 10:30 AM", "Round One (Knockout Match)"],
                    ["10:30 – 11:00 AM", "Round Two (Knockout Match)"],
                    ["11:00 – 11:30 AM", "Final Round"],
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

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📜 Game Rules</h3>
            <ul className="space-y-2 text-muted-foreground text-sm mb-10 list-disc list-inside">
              <li>All participants must have a valid Free Fire or PUBG account.</li>
              <li>Players must join using the ID and password shared by organizers.</li>
              <li>Match will be conducted online through mobile devices.</li>
              <li>Players must report 10 minutes before the scheduled time.</li>
              <li>Any cheating or hacking leads to disqualification.</li>
              <li>Participants must ensure stable internet connection.</li>
            </ul>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📞 Coordinators</h3>
            <div className="info-box-style rounded-lg p-4">
              <p className="text-foreground text-sm font-semibold">Akash</p>
              <a href="tel:+919600473036" className="text-secondary hover:text-primary text-sm transition-colors">+91 9600473036</a>
              <p className="text-muted-foreground text-sm mt-1">Co-Coordinator: Aravind (+91 8778243172)</p>
            </div>
          </div>

          {/* Fun Sports */}
          <div className="card-event rounded-xl p-8 md:p-12 mb-12">
            <span className="font-display text-[11px] font-bold uppercase tracking-wide px-4 py-2 rounded-full inline-block mb-4" style={{ background: "hsla(187, 100%, 50%, 0.2)", color: "hsl(187, 100%, 50%)" }}>Non-Technical</span>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-2 text-gradient-section">FUN FIESTA 2K26</h2>
            <p className="text-secondary font-display text-sm mb-8 tracking-wide">Fun Sports</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Team Size", value: "4 Members" },
                { label: "Mode", value: "Offline / On-Campus" },
                { label: "Venue", value: "EEE Conference Hall" },
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
                    ["2:00 – 2:30 PM", "Round 1"],
                    ["2:30 – 3:00 PM", "Round 2"],
                    ["3:00 – 3:30 PM", "Final Round"],
                    ["3:30 PM", "Prize Distribution"],
                  ].map(([time, activity]) => (
                    <tr key={time} className="border-b border-muted/30 hover:bg-muted/10 transition-colors">
                      <td className="py-3 px-4 text-accent font-medium whitespace-nowrap">{time}</td>
                      <td className="py-3 px-4">{activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Song Snap */}
            <div className="mb-8 p-6 rounded-lg" style={{ background: "hsla(187, 100%, 50%, 0.05)" }}>
              <h3 className="font-display text-lg font-bold text-accent mb-3">🎵 Song Snap</h3>
              <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                <li>Individual participation.</li>
                <li>Images related to a song will be displayed on the screen.</li>
                <li>Identify the correct song name from the image clues.</li>
                <li>10–15 seconds to answer each question.</li>
                <li>Correct answer earns 1 point. Highest score wins.</li>
                <li>Judge's decision is final.</li>
              </ul>
            </div>

            {/* Rapid Recall */}
            <div className="mb-10 p-6 rounded-lg" style={{ background: "hsla(335, 100%, 43%, 0.05)" }}>
              <h3 className="font-display text-lg font-bold text-primary mb-3">⚡ Rapid Recall</h3>
              <ul className="space-y-2 text-muted-foreground text-sm list-disc list-inside">
                <li>Individual participation.</li>
                <li>A category/topic will be given by the judge.</li>
                <li>List as many relevant words as possible within 10 seconds.</li>
                <li>Repeated or unrelated answers are not allowed.</li>
                <li>Each correct answer gives 1 point. Highest score wins.</li>
                <li>Judge's decision is final.</li>
              </ul>
            </div>

            <h3 className="font-display text-lg font-bold text-secondary mb-4">📞 Coordinators</h3>
            <div className="info-box-style rounded-lg p-4">
              <p className="text-foreground text-sm font-semibold">Madhumitha M</p>
              <a href="tel:+917806831216" className="text-secondary hover:text-primary text-sm transition-colors">+91 7806831216</a>
              <p className="text-muted-foreground text-sm mt-1">Co-Coordinators: Chinmayee N R, Renuka Chowdary P</p>
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

export default NonTechnicalEvents;
