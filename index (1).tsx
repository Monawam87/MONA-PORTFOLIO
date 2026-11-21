import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun, Languages, Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "منى عوام — معرض الأعمال" },
      { name: "description", content: "معرض أعمال منى عوام: السيرة الذاتية، متحف الطيبات، ومشروع أوج للخدمات الرقمية." },
      { property: "og:title", content: "منى عوام — معرض الأعمال" },
      { property: "og:description", content: "مختارات من مشاريع منى عوام الرقمية." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/966508125532";
const MAIL = "mailto:monawam55@gmail.com";

const t = {
  ar: {
    kicker: "معرض الأعمال", name: "منى عوام",
    intro: "مختارات من المشاريع الرقمية التي تجمع بين الرقيّ والإتقان، من الهوية الشخصية إلى التراث والخدمات الرقمية.",
    visit: "زيارة المشروع ←", wa: "واتساب", mail: "البريد",
    soon: "03 · قيد الإنجاز", awj: "أَوْج",
    awjDesc: "منصة للخدمات الرقمية تُبنى بعناية لتأخذ الأعمال إلى قمّتها. قريبًا.",
    city: "جدة، المملكة العربية السعودية", contact: "لنعمل معًا",
    projects: [
      { title: "السيرة الذاتية العالمية", tag: "هوية شخصية", desc: "موقع سيرة ذاتية أنيق يعرض أكثر من عشرين عامًا من الخبرة في العمليات والضيافة وقيادة الفرق." },
      { title: "متحف الطيبات", tag: "ثقافة وتراث", desc: "موقع لمتحف مدينة الطيبات العالمية للعلوم والمعرفة في جدة، يأخذ الزائر في رحلة عبر قاعاته وتاريخه." },
    ],
  },
  en: {
    kicker: "Portfolio", name: "Mona Awam",
    intro: "A curated selection of digital projects blending elegance and craft — from personal identity to heritage and digital services.",
    visit: "Visit project →", wa: "WhatsApp", mail: "Email",
    soon: "03 · In progress", awj: "AWJ",
    awjDesc: "A digital services platform, carefully crafted to take businesses to their peak. Coming soon.",
    city: "Jeddah, Saudi Arabia", contact: "Let's work together",
    projects: [
      { title: "Global Resume", tag: "Personal identity", desc: "An elegant resume site presenting 20+ years of experience in operations, hospitality and team leadership." },
      { title: "Al-Tayebat Museum", tag: "Culture & heritage", desc: "A website for Al-Tayebat International City Museum in Jeddah, guiding visitors through its halls and history." },
    ],
  },
};

const meta = [
  { no: "01", img: "/images/resume.png", url: "https://mona-global-resume.lovable.app/" },
  { no: "02", img: "/images/museum.png", url: "https://al-tayebat-museum-we-swof.bolt.host" },
];

function Index() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [light, setLight] = useState(false);
  const L = t[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [light, lang]);

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onTilt = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.setProperty("--ry", `${x * 12}deg`);
    e.currentTarget.style.setProperty("--rx", `${-y * 12}deg`);
  };
  const offTilt = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--ry", "0deg");
    e.currentTarget.style.setProperty("--rx", "0deg");
  };

  const iconBtn = "flex h-10 items-center gap-2 border border-border px-3 text-sm text-gold transition hover:bg-accent";

  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"} className="mx-auto max-w-6xl px-6 pb-24">
      <div className="blob h-96 w-96 bg-primary -top-20 -start-20" />
      <div className="blob h-[28rem] w-[28rem] bg-olive bottom-0 end-0" style={{ animationDelay: "-6s" }} />
      <header className="flex items-center justify-end gap-2 py-8">
        <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className={iconBtn} aria-label="Language">
          <Languages size={16} /> {lang === "ar" ? "EN" : "عربي"}
        </button>
        <button onClick={() => setLight(!light)} className={iconBtn} aria-label="Theme">
          {light ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </header>

      <section className="fade-up py-20 text-center">
        <p className="mb-6 tracking-[0.4em] text-gold">{L.kicker}</p>
        <h1 className="font-display text-6xl leading-tight md:text-8xl"><span className="text-gold-gradient">{L.name}</span></h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-loose text-muted-foreground">{L.intro}</p>
        <div className="mt-10 flex justify-center gap-3">
          <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-primary px-6 py-3 text-primary-foreground hover:opacity-90 transition hover:-translate-y-1 hover:shadow-lg"><MessageCircle size={18} /> {L.wa}</a>
          <a href={MAIL} className="flex items-center gap-2 border border-gold px-6 py-3 text-gold hover:bg-accent"><Mail size={18} /> {L.mail}</a>
        </div>
      </section>

      <section className="space-y-28">
        {meta.map((m, i) => {
          const p = L.projects[i]!;
          return (
            <article key={m.no} className={`reveal grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>a]:order-2" : ""}`}>
              <a href={m.url} target="_blank" rel="noreferrer" onMouseMove={onTilt} onMouseLeave={offTilt} className="tilt group block overflow-hidden border border-border bg-card p-3">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={m.img} alt={p.title} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
                </div>
              </a>
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-5xl text-gold/40">{m.no}</span>
                  <span className="text-sm tracking-widest text-gold">{p.tag}</span>
                </div>
                <h2 className="mt-4 font-display text-4xl md:text-5xl">{p.title}</h2>
                <p className="mt-6 leading-loose text-muted-foreground">{p.desc}</p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <a href={m.url} target="_blank" rel="noreferrer" className="bg-primary px-8 py-3 text-primary-foreground hover:opacity-90 transition hover:-translate-y-1 hover:shadow-lg">{L.visit}</a>
                </div>
              </div>
            </article>
          );
        })}

        <article className="reveal border border-border bg-card px-8 py-20 text-center">
          <span className="text-sm tracking-widest text-gold">{L.soon}</span>
          <h2 className="mt-6 font-display text-7xl md:text-9xl text-gold-gradient float-slow inline-block">{L.awj}</h2>
          <p className="mx-auto mt-6 max-w-lg leading-loose text-muted-foreground">{L.awjDesc}</p>
          <div className="mx-auto mt-10 h-1 w-64 overflow-hidden bg-muted"><div className="h-full w-2/3 bg-primary" /></div>
        </article>
      </section>

      <footer className="reveal mt-28 border-t border-border pt-12 text-center">
        <h3 className="font-display text-3xl">{L.contact}</h3>
        <div className="mt-6 flex justify-center gap-3">
          <a href={WA} target="_blank" rel="noreferrer" className={iconBtn}><MessageCircle size={16} /> {L.wa}</a>
          <a href={MAIL} className={iconBtn}><Mail size={16} /> monawam55@gmail.com</a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{L.city}</p>
      </footer>
    </main>
  );
}
