import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Download, Mail, Moon, Sun, Languages, MapPin, Phone, Linkedin, MessageCircle } from "lucide-react";
import portrait from "@/assets/mona_portrait.png.asset.json";
import cvFile from "@/assets/Mona_Awam_CV.docx.asset.json";
import { contact, ui, skills, jobs, education, type Lang } from "@/lib/cv-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mona Awam — Operations Supervisor | منى عوام" },
      { name: "description", content: "Curriculum vitae of Mona Awam, Operations Supervisor in Jeddah with experience in hospitality, operations and team leadership." },
      { property: "og:title", content: "Mona Awam — Operations Supervisor" },
      { property: "og:description", content: "Hospitality, operations and team leadership — Jeddah, Saudi Arabia." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("ar");
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const l = localStorage.getItem("lang") as Lang | null;
    const d = localStorage.getItem("dark");
    if (l) setLang(l);
    if (d) setDark(d === "1");
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
    localStorage.setItem("dark", dark ? "1" : "0");
  }, [lang, dark]);
  const t = (o: { en: string; ar: string }) => o[lang];

  const iconBtn = "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur transition hover:border-gold hover:text-gold";

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <span className="font-display text-2xl tracking-wide text-gold-gradient">{lang === "ar" ? "م . ع" : "M · A"}</span>
          <div className="flex items-center gap-2">
            <button aria-label="Language" onClick={() => setLang(lang === "ar" ? "en" : "ar")} className={`${iconBtn} w-auto gap-1.5 px-4 text-sm`}>
              <Languages size={16} /> {lang === "ar" ? "EN" : "عربي"}
            </button>
            <button aria-label="Theme" onClick={() => setDark(!dark)} className={iconBtn}>
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a aria-label={t(ui.download)} href={cvFile.url} download="Mona_Awam_CV.docx" className="inline-flex h-11 items-center gap-2 rounded-full bg-gold-gradient px-5 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90 dark:text-background">
              <Download size={16} /> <span className="hidden sm:inline">{t(ui.download)}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 md:grid-cols-[1.1fr_0.9fr]">
        <div className="fade-up">
          <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-10 bg-gold" /> {t(ui.role)}
          </p>
          <h1 className="font-display text-6xl leading-[1.05] text-foreground md:text-8xl">{t(ui.name)}</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{t(ui.summary)}</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><MapPin size={15} className="text-gold" />{t(ui.location)}</span>
            <span className="flex items-center gap-2" dir="ltr"><Phone size={15} className="text-gold" />{contact.phone}</span>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 text-sm text-foreground transition hover:bg-gold hover:text-background"><MessageCircle size={16} />{t(ui.whatsapp)}</a>
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition hover:border-gold hover:text-gold"><Mail size={16} />{t(ui.email)}</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition hover:border-gold hover:text-gold"><Linkedin size={16} />LinkedIn</a>
          </div>
        </div>
        <div className="fade-up relative mx-auto w-full max-w-sm" style={{ animationDelay: ".15s" }}>
          <div className="absolute -inset-3 rounded-t-full border border-gold/50" />
          <div className="overflow-hidden rounded-t-full bg-gold-gradient/20 shadow-elegant">
            <img src={portrait.url} alt={t(ui.name)} className="aspect-[3/4] w-full bg-secondary object-cover object-top" />
          </div>
          <div className="absolute -bottom-6 start-1/2 flex -translate-x-1/2 gap-8 rounded-full border border-border bg-card px-8 py-3 shadow-elegant rtl:translate-x-1/2">
            <Stat n="35" l={t(ui.courses)} /><Stat n="20+" l={t(ui.years)} />
          </div>
        </div>
      </section>

      <Divider />

      {/* Skills */}
      <Section title={t(ui.skillsTitle)}>
        <div className="flex flex-wrap gap-3">
          {skills[lang].map((s) => (
            <span key={s} className="rounded-full border border-border bg-card px-5 py-2 text-sm text-foreground transition hover:border-gold hover:text-gold">{s}</span>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title={t(ui.expTitle)}>
        <ol className="relative border-s border-gold/40">
          {jobs.map((job, i) => (
            <li key={i} className="relative ps-8 pb-12 last:pb-0">
              <span className="absolute -start-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-gold bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl text-foreground md:text-3xl">{t(job.title)}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-gold">{t(job.period)}</span>
              </div>
              <p className="mt-1 text-muted-foreground">{t(job.company)}</p>
              <ul className="mt-4 space-y-2">
                {job.points[lang].map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />{p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* Education */}
      <Section title={t(ui.eduTitle)}>
        <div className="grid gap-5 md:grid-cols-3">
          {education.map((e) => (
            <div key={e.t.en} className="rounded-lg border border-border bg-card p-6 transition hover:border-gold">
              <h3 className="font-display text-xl text-foreground">{t(e.t)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(e.s)}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">{t(ui.devTitle)}</p>
            <p className="mt-3 text-foreground/85">{t(ui.dev)}</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">{t(ui.langTitle)}</p>
            <p className="mt-3 font-display text-2xl text-foreground">{t(ui.langs)}</p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid items-center gap-10 rounded-2xl border border-border bg-card p-8 shadow-elegant md:grid-cols-[1fr_auto] md:p-14">
          <div>
            <h2 className="font-display text-4xl text-foreground md:text-6xl">{t(ui.contactTitle)}</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" className={iconBtn} aria-label="WhatsApp"><MessageCircle size={18} /></a>
              <a href={`mailto:${contact.email}`} className={iconBtn} aria-label="Email"><Mail size={18} /></a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className={iconBtn} aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={cvFile.url} download="Mona_Awam_CV.docx" className={iconBtn} aria-label={t(ui.download)}><Download size={18} /></a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground" dir="ltr">{contact.email}</p>
          </div>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3">
            <div className="rounded-xl border border-gold/60 bg-card p-4">
              <QRCodeSVG value={contact.linkedin} size={160} bgColor="transparent" fgColor="currentColor" className="text-foreground" />
            </div>
            <span className="text-xs tracking-wide text-gold">{t(ui.scan)}</span>
          </a>
        </div>
        <p className="mt-10 text-center text-xs tracking-[0.3em] text-muted-foreground">© {t(ui.name)}</p>
      </section>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-2xl text-gold">{n}</div>
      <div className="whitespace-nowrap text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
    </div>
  );
}
function Divider() {
  return <div className="mx-auto my-6 h-px max-w-6xl bg-gradient-to-r from-transparent via-gold/50 to-transparent" />;
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="mb-10 flex items-center gap-4 font-display text-4xl text-foreground md:text-5xl">
        {title}<span className="h-px flex-1 bg-border" />
      </h2>
      {children}
    </section>
  );
}
