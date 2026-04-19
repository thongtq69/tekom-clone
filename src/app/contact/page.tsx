import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Contact Us"
        description="Thank you for contacting TEKCOM. How can we help you today? We strive to respond to online inquiries within 72 hours on work days, or on the next work day following a weekend or holiday."
        bgImage="/images/factory-bd1.jpg"
        height="medium"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <SectionTitle eyebrow="Send a Message" title="Your Input is Valued to Us" />
            <form className="mt-8 grid md:grid-cols-2 gap-5">
              <Input label="Your Name *" />
              <Input label="Your Email *" type="email" />
              <Input label="Your Phone" />
              <Input label="Your Company" />
              <div className="md:col-span-2">
                <Input label="Subject *" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.2em] font-bold mb-2" style={{ color: "var(--color-navy)" }}>
                  Message *
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-[color:var(--color-line)] px-4 py-3 text-sm focus:border-[color:var(--color-gold)] focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <button type="button" className="btn-gold">
                  Send Message →
                </button>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display font-bold uppercase tracking-wider text-base mb-3" style={{ color: "var(--color-navy)" }}>
                TEKCOM Corporation
              </h3>
              <p className="font-bold text-sm mb-1" style={{ color: "var(--color-navy)" }}>
                Head Quarter — Binh Duong 1 Factory
              </p>
              <p className="text-[14px] text-[color:var(--color-muted)] leading-relaxed">
                Lots M1-M2-M7-M8, N2-N3 Street, Expanded Nam Tan Uyen Industrial Park, Binh Co Ward, Ho Chi Minh City, Vietnam
              </p>
              <a href="https://goo.gl/maps/mvpFrgczdoixrdjQ6" className="text-xs uppercase tracking-[0.2em] font-bold mt-2 inline-block" style={{ color: "var(--color-gold)" }}>
                View Map →
              </a>
            </div>
            <div>
              <p className="font-bold text-sm mb-1" style={{ color: "var(--color-navy)" }}>
                Binh Duong 2 Factory
              </p>
              <p className="text-[14px] text-[color:var(--color-muted)] leading-relaxed">
                Lots A1-A2-A3-A4-A5, N5 Street, Expanded Nam Tan Uyen Industrial Park, Binh Co Ward, Ho Chi Minh City, Vietnam
              </p>
              <a href="https://goo.gl/maps/oBwuK9u2YS4oqBDbA" className="text-xs uppercase tracking-[0.2em] font-bold mt-2 inline-block" style={{ color: "var(--color-gold)" }}>
                View Map →
              </a>
            </div>
            <div className="pt-6 border-t border-[color:var(--color-line)] space-y-2">
              <p className="text-sm">
                <span className="text-[color:var(--color-muted)]">Hotline:</span>{" "}
                <a href="tel:+84977668000" className="font-bold" style={{ color: "var(--color-navy)" }}>
                  (+84) 977 668 000
                </a>
              </p>
              <p className="text-sm">
                <span className="text-[color:var(--color-muted)]">Email:</span>{" "}
                <a href="mailto:info@tekcom.vn" className="font-bold" style={{ color: "var(--color-navy)" }}>
                  info@tekcom.vn
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] font-bold mb-2" style={{ color: "var(--color-navy)" }}>
        {label}
      </label>
      <input
        type={type}
        className="w-full border border-[color:var(--color-line)] px-4 py-3 text-sm focus:border-[color:var(--color-gold)] focus:outline-none"
      />
    </div>
  );
}
