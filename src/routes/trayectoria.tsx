import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/page-meta";
import photo from "@/assets/dara.jpg.asset.json";

export const Route = createFileRoute("/trayectoria")({
  head: () => pageMeta("Trayectoria profesional — Dara Judith | FTTH y gestión TI", "Perfil profesional de Dara Judith: diseño de proyectos FTTH, gerencia de proyectos TI, herramientas de fibra óptica, AutoCAD, Jira y Trello."),
  component: Experience,
});

const areas = [
  { title: "Diseño de proyectos FTTH", description: "Experiencia en diseño de proyectos de fibra hasta el hogar, uniendo la visión de la red con la documentación técnica del proyecto.", items: ["Diseño de infraestructura de fibra óptica", "Planos y documentación con AutoCAD", "Uso de herramientas de fibra óptica"] },
  { title: "Gerencia de proyectos", description: "Gestión del trabajo desde la planeación hasta el seguimiento, con atención al alcance, los tiempos y la coordinación del equipo.", items: ["Planeación y seguimiento de actividades", "Coordinación de equipos de trabajo", "Organización de tareas con Jira y Trello"] },
  { title: "Diseño de proyectos TI", description: "Una perspectiva técnica para estructurar soluciones tecnológicas alineadas con las necesidades de cada proyecto.", items: ["Comprensión de necesidades y alcance", "Diseño de soluciones tecnológicas", "Documentación y seguimiento del proyecto"] },
];

function Experience() {
  return <main>
    <section className="page-intro"><div className="site-container"><span className="eyebrow">Trayectoria profesional</span><h1>De la infraestructura<br />a la ejecución del proyecto.</h1><p>Mi experiencia se centra en telecomunicaciones, redes FTTH y proyectos TI. Una combinación de diseño técnico, organización y gestión.</p><Button variant="outline" className="mt-6 print-hide" onClick={() => window.print()}><Printer /> Imprimir perfil</Button></div></section>
    <section className="site-container section-space">
      <div className="mb-8 flex items-center gap-5"><img src={photo.url} alt="Dara Judith" className="h-20 w-20 rounded-full object-cover" /><div><h2 className="text-2xl">Dara Judith</h2><p className="text-sm text-muted-foreground">Ingeniera en Telecomunicaciones</p></div></div>
      {areas.map((area, i) => <article key={area.title} className="experience-row"><span className="experience-number">0{i + 1}</span><div><h2 className="text-2xl">{area.title}</h2><p className="section-copy">{area.description}</p></div><ul className="space-y-4 text-sm text-muted-foreground">{area.items.map(item => <li key={item} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{item}</li>)}</ul></article>)}
      <div className="mt-12"><span className="eyebrow">Herramientas de trabajo</span><div className="flex flex-wrap gap-x-10 gap-y-5">{["AutoCAD", "Jira", "Trello", "Herramientas de fibra óptica"].map(tool => <span key={tool} className="font-display text-lg">{tool}</span>)}</div></div>
    </section>
    <section className="bg-secondary"><div className="site-container section-space grid gap-8 md:grid-cols-2"><div><span className="eyebrow">Formación complementaria</span><h2>La perspectiva también evoluciona.</h2></div><div><p className="text-muted-foreground">Mis estudios en análisis de datos y UX/UI amplían mi forma de abordar proyectos: explorar información, visualizar hallazgos y considerar la experiencia de las personas.</p><Button asChild variant="outline" className="mt-6"><Link to="/analisis-de-datos">Conocer mi formación <ArrowUpRight /></Link></Button></div></div></section>
  </main>;
}