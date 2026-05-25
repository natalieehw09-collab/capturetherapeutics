import { useState } from "react";
import { MessageCircle, X, ExternalLink, Send } from "lucide-react";

const BOOK_URL = "https://physiofirst.janeapp.com/";

const PROMPTS = [
  "Book an appointment",
  "Find a location",
  "I’m a patient",
  "I’m an employer",
  "I need vocational services",
  "I want to contact the team",
];

type Msg = { from: "bot" | "user"; text: string; cta?: { label: string; href: string } };

const replyFor = (p: string): Msg => {
  switch (p) {
    case "Book an appointment":
      return {
        from: "bot",
        text: "Perfect — you can book directly through our Jane account. It takes about a minute.",
        cta: { label: "Open Jane booking", href: BOOK_URL },
      };
    case "Find a location":
      return { from: "bot", text: "We have three clinics: Moncton NB, Truro NS, and Woodstock NB. Scroll to the Locations section for addresses, phone, and email." };
    case "I’m a patient":
      return { from: "bot", text: "Welcome! Our patient care uses a whole-team approach — PT, OT, kinesiology, and mental health support. When you’re ready, tap ‘Book an appointment’." };
    case "I’m an employer":
      return { from: "bot", text: "We help employers with workplace wellness, ergonomics, and injury prevention. The Employers section above has more — or reply ‘contact’ and we’ll get someone in touch." };
    case "I need vocational services":
      return { from: "bot", text: "Our vocational team provides trusted, timely, independent evaluations including FCEs and return-to-work planning. See the Vocational Services section for details." };
    case "I want to contact the team":
      return { from: "bot", text: "You can reach us at moncton@capturetherapeutics.com or (506) 856-9380. The footer has full contact details for each clinic." };
    default:
      return { from: "bot", text: "Thanks! A team member will help with that — try one of the quick options below." };
  }
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi! I can help you find the right Capture Therapeutics service." },
  ]);

  const send = (p: string) => {
    if (!p.trim()) return;
    setMsgs((m) => [...m, { from: "user", text: p }, replyFor(p)]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-[var(--shadow-float)] hover:scale-110 transition-transform"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-3 left-3 sm:left-auto sm:right-5 z-50 sm:w-[24rem] max-h-[78vh] flex flex-col rounded-3xl bg-background border border-border shadow-[var(--shadow-float)] overflow-hidden animate-scale-in">
          <div className="px-5 py-4 bg-gradient-to-br from-primary to-primary/85 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-background/15 grid place-items-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="font-serif text-base leading-tight">Capture Crew Assistant</p>
                <p className="text-xs opacity-80">Online · usually replies instantly</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
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
                      className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-3.5 py-2 text-xs font-medium hover:opacity-90"
                    >
                      {m.cta.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 pt-3 border-t border-border bg-background">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground px-1 mb-2">Quick options</p>
            <div className="flex flex-wrap gap-1.5 pb-3">
              {PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="flex items-center gap-2 pb-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 px-3.5 py-2.5 text-sm rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center hover:bg-primary/90"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
