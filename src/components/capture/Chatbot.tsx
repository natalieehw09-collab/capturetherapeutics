import { useState } from "react";
import { MessageCircle, X, ExternalLink } from "lucide-react";

const BOOK_URL = "https://physiofirst.janeapp.com/";

const PROMPTS = [
  "I want to book an appointment",
  "I need help choosing a service",
  "I’m looking for a location",
  "I’m an employer",
  "I need vocational services",
  "I want to contact the team",
];

type Msg = { from: "bot" | "user"; text: string; cta?: { label: string; href: string } };

const replyFor = (p: string): Msg => {
  if (p.startsWith("I want to book")) {
    return {
      from: "bot",
      text: "Wonderful! You can book directly through our Jane account below.",
      cta: { label: "Open Jane booking", href: BOOK_URL },
    };
  }
  if (p.includes("service")) return { from: "bot", text: "Take a look at our Services section — we cover Patients, Vocational, Employers, Community, and Clinic Owners." };
  if (p.includes("location")) return { from: "bot", text: "We have clinics in Moncton NB, Truro NS, and Woodstock NB. Scroll to the Locations section for details." };
  if (p.includes("employer")) return { from: "bot", text: "For employers we offer workplace wellness, ergonomics, and injury prevention. Visit the Employers section to learn more." };
  if (p.includes("vocational")) return { from: "bot", text: "Our Vocational Services provide trusted, timely, independent evaluations. See the Vocational Services section above." };
  return { from: "bot", text: "You can reach our team at moncton@capturetherapeutics.com or use the Contact section in the footer." };
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi! I’m the Capture Crew assistant. How can I help you today?" },
  ]);

  const handlePrompt = (p: string) => {
    setMsgs((m) => [...m, { from: "user", text: p }, replyFor(p)]);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-[var(--shadow-float)] hover:scale-110 transition-transform"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-96 max-h-[70vh] flex flex-col rounded-2xl bg-background border border-border shadow-[var(--shadow-float)] overflow-hidden animate-scale-in">
          <div className="px-4 py-3 bg-primary text-primary-foreground">
            <p className="font-serif text-base">Capture Crew Assistant</p>
            <p className="text-xs opacity-80">We usually reply in seconds</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/40">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-background border border-border rounded-bl-sm"
                  }`}
                >
                  <p>{m.text}</p>
                  {m.cta && (
                    <a
                      href={m.cta.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-3 py-1.5 text-xs font-medium hover:opacity-90"
                    >
                      {m.cta.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-border bg-background">
            <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-1.5">
              {PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => handlePrompt(p)}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
