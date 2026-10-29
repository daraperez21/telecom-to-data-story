import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Database, Code2, ChartColumn, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/page-meta";
import cover from "@/assets/portada-ciudad.png.asset.json";

export const Route = createFileRoute("/analisis-de-datos")({
  head: () => pageMeta("Análisis de datos y formación — Dara Judith", "Dara Judith busca su primera experiencia en análisis de datos. Habilidades en SQL, Python, Power BI, Tableau e inteligencia artificial, con estudios complementarios en UX/UI."),
  component: DataStudies,
});
const skills = [
  { icon: Database, title: "SQL", category: "Consulta de datos", text: "Consultar, organizar y relacionar información para responder preguntas." },
  { icon: Code2, title: "Python", category: "Análisis", text: "Trabajar con datos y explorar la información mediante programación." },
  { icon: ChartColumn, title: "Power BI · Tableau", category: "Visualización", text: "Dar forma visual a los datos y comunicar hallazgos con claridad." },
  { icon: Sparkles, title: "Inteligencia artificial", category: "Apoyo al análisis", text: "Incorporar herramientas de IA como complemento del trabajo analítico." },
];

function DataStudies() {
  return <main>
    <section className="page-intro"><div className="site-container"><span className="eyebrow">Un nuevo rumbo</span><h1>De conectar redes<br />a comprender datos.</h1><p>Me estoy preparando para iniciar mi camino en análisis de datos. Aporto mi experiencia técnica y de gestión, con la disposición de aprender en proyectos reales.</p></div></section>
    <section className="site-container section-space"><div className="grid gap-8 md:grid-cols-[1fr_1.3fr]"><div><span className="eyebrow">Mi punto de partida</span><h2>Formación que quiero<br />llevar a la práctica.</h2></div><div><p className="text-muted-foreground">He tomado cursos para desarrollar habilidades en análisis de datos. Aún no cuento con experiencia profesional en el área; busco una primera oportunidad para aplicar lo aprendido y seguir creciendo.</p><p className="mt-5 text-muted-foreground">Mi trayectoria en ingeniería me aporta contexto técnico, pensamiento estructurado y experiencia trabajando con las necesidades de un proyecto.</p><p className="mt-6 flex items-center gap-2 text-sm font-semibold"><span className="h-2 w-2 rounded-full bg-positive" />En búsqueda de mi primera oportunidad en datos</p></div></div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2">{skills.map(skill => <article key={skill.title} className="work-card"><skill.icon className="card-icon" /><span className="eyebrow">{skill.category}</span><h3 className="text-2xl">{skill.title}</h3><p className="section-copy">{skill.text}</p></article>)}</div>
    </section>
    <section className="bg-secondary"><div className="site-container section-space grid gap-8 md:grid-cols-2"><div><span className="eyebrow">Un complemento: UX/UI</span><h2>Información que también<br />piensa en las personas.</h2></div><div><p className="text-muted-foreground">También estudio diseño UX/UI. Esta formación complementa mi experiencia en proyectos TI y mi camino en datos al poner el foco en las necesidades de las personas y en una presentación clara de la información.</p><Button asChild className="mt-7"><Link to="/contacto">Conversemos sobre una oportunidad <ArrowUpRight /></Link></Button></div></div></section>
    <img src={cover.url} alt="Portada de Dara Judith: Ingeniería de Telecomunicaciones y Ciencia de Datos, con una ciudad conectada" loading="lazy" className="city-cover" />
  </main>;
}