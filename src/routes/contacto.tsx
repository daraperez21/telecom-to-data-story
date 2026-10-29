import { createFileRoute } from "@tanstack/react-router";
import { Cable, BriefcaseBusiness, ChartNoAxesCombined } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/contacto")({
  head: () => pageMeta("Contacto — Dara Judith | Proyectos y oportunidades", "Contacta a Dara Judith para proyectos de telecomunicaciones, gestión TI u oportunidades de análisis de datos. Envía tu nombre, correo y mensaje."),
  component: Contact,
});

function Contact() {
  return <main><section className="page-intro"><div className="site-container"><span className="eyebrow">Contacto</span><h1>Las buenas conexiones<br />empiezan conversando.</h1><p>¿Buscas apoyo para un proyecto o tienes una oportunidad profesional? Me gustaría conocerla.</p></div></section>
    <section className="site-container section-space grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><h2>Hablemos.</h2><p className="section-copy">Cuéntame el contexto, qué necesitas y cómo puedo aportar. Para una vacante en análisis de datos, puedes compartir el rol y lo que busca tu equipo.</p><div className="mt-9 space-y-6">{[{ icon: Cable, title: "Telecomunicaciones", text: "Diseño FTTH y proyectos de fibra óptica" }, { icon: BriefcaseBusiness, title: "Gestión TI", text: "Organización y gerencia de proyectos" }, { icon: ChartNoAxesCombined, title: "Oportunidades en datos", text: "Mi primera experiencia profesional en el área" }].map(item => <div key={item.title} className="flex gap-4"><item.icon className="mt-1 h-5 w-5 shrink-0 text-primary" /><div><h3 className="text-sm font-semibold">{item.title}</h3><p className="text-sm text-muted-foreground">{item.text}</p></div></div>)}</div></div><ContactForm /></section>
  </main>;
}