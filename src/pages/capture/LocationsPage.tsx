import PageLayout from "@/components/capture/PageLayout";
import PageHero from "@/components/capture/PageHero";
import { Calendar, MapPin, Phone, Printer, Mail, Map } from "lucide-react";
import { LOCATIONS, BOOK_URL } from "@/lib/capture-links";

const LocationsPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Our Locations"
      title={<>Find care <span className="text-primary">close to home.</span></>}
      description="Five welcoming Capture Therapeutics clinics across the Maritimes."
    >
      <a
        href={BOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book an appointment with Capture Therapeutics"
        className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 font-semibold shadow-[var(--shadow-card)] hover:scale-[1.02] transition-all"
      >
        <Calendar className="w-4 h-4" /> Book at any clinic
      </a>
    </PageHero>

    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {LOCATIONS.map((l) => (
          <div key={l.city} className="rounded-3xl bg-background border border-border p-7 hover:shadow-[var(--shadow-card)] transition-all flex flex-col">
            <div className="flex items-center gap-2 text-primary mb-3">
              <MapPin className="w-5 h-5" />
              <h3 className="text-xl">{l.city}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{l.address}</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={l.phoneHref} className="hover:text-primary" aria-label={`Call ${l.city} at ${l.phone}`}>{l.phone}</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Printer className="w-4 h-4 text-accent shrink-0" /> Fax: {l.fax}
              </li>
              <li className="flex items-center gap-2 break-all">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a className="hover:text-primary" href={`mailto:${l.email}`} aria-label={`Email ${l.city} at ${l.email}`}>{l.email}</a>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book an appointment at ${l.city}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-primary/90"
              >
                <Calendar className="w-4 h-4" /> Book at {l.city.split(",")[0]}
              </a>
              <a
                href={l.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${l.city} on Google Maps`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted"
              >
                <Map className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default LocationsPage;
