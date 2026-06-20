import PageLayout from "@/components/capture/PageLayout";
import { Link } from "react-router-dom";
import { Calendar, Home, MapPin } from "lucide-react";
import { BOOK_URL } from "@/lib/capture-links";

const NotFound = () => (
  <PageLayout>
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-xl space-y-6">
        <p className="text-sm uppercase tracking-[0.25em] text-accent">Error 404</p>
        <h1 className="text-5xl md:text-6xl">We can’t find that page.</h1>
        <p className="text-muted-foreground text-lg">
          The link may be outdated, or the page may have moved. Here’s how to get back on track.
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:bg-primary/90 transition-all"
          >
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book an appointment with Capture Therapeutics"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 font-semibold hover:scale-[1.02] transition-all"
          >
            <Calendar className="w-4 h-4" /> Book Appointment
          </a>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-6 py-3.5 font-medium hover:bg-muted transition-all"
          >
            <MapPin className="w-4 h-4" /> View Locations
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default NotFound;
