import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Cable, ChartNoAxesCombined, Layers3, Check } from "lucide-react";
import photo from "@/assets/dara.jpg.asset.json";
import network from "@/assets/fiber-network.jpg";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/")({
  head: () => pageMeta("Dara Judith — Ingeniera en Telecomunicaciones | FTTH y proyectos TI", "Conoce a Dara Judith: experiencia en diseño FTTH y gerencia de proyectos TI, con formación en análisis de datos. Disponible para proyectos y oportunidades profesionales."),
  component: Home,
});

function Home() {
  return <main>
    <section className="home-hero">
      <img src={network} alt="Infraestructura de fibra óptica con paneles de conexión" width={1920} height={1024} className="hero-background" />
      <div className="site-container hero-content reveal">
        <span className="eyebrow">Ingeniera en Telecomunicaciones · Proyectos TI</span>
        <h1>Dara Judith<span className="block text-primary-glow">Conectar. Gestionar.<br />Analizar.</span></h1>
        <p className="hero-description">Experiencia en redes FTTH y gestión de proyectos. Una mirada técnica que hoy amplío hacia el análisis de datos.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/contacto">Hablemos de tu proyecto <ArrowUpRight /></Link></Button>
          <Button asChild size="lg" variant="outline" className="hero-button-secondary"><Link to="/trayectoria">Conoce mi trayectoria <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>
    <div className="expertise-strip"><div className="site-container flex flex-wrap justify-between gap-x-8 gap-y-3 py-5">
      {["Diseño de redes FTTH", "Gerencia de proyectos", "Soluciones TI", "Formación en análisis de datos"].map(item => <span key={item} className="flex items-center gap-2"><Check className="h-3 w-3 text-primary-glow" />{item}</span>)}
    </div></div>
    <section className="site-container section-space profile-grid">
      <div className="portrait-wrap"><img src={photo.url} alt="Dara Judith" loading="lazy" /><div className="portrait-caption"><p className="font-display text-base font-medium">Dara Judith</p><p className="text-xs text-muted-foreground">Ingeniera · Gerente de proyectos</p></div></div>
      <div><span className="eyebrow">Mi perfil</span><h2>Una base técnica.<br />Una visión de principio a fin.</h2>
        <p className="section-copy">Mi trayectoria reúne diseño de proyectos de fibra óptica, gerencia de proyectos y soluciones TI. Me interesa conectar las necesidades de un proyecto con una ejecución organizada y una visión clara de su alcance.</p>
        <p className="section-copy">Hoy continúo formándome en análisis de datos y UX/UI para ampliar esa perspectiva: comprender la información y comunicarla pensando en las personas.</p>
        <Link to="/trayectoria" className="text-link mt-7">Ver experiencia y herramientas <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
    <section className="bg-secondary"><div className="site-container section-space">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><span className="eyebrow">Áreas de enfoque</span><h2>Lo que puedo aportar.</h2></div><p className="max-w-sm text-sm text-muted-foreground">Experiencia consolidada y una nueva área en la que busco crecer.</p></div>
      <div className="grid gap-5 md:grid-cols-3">
        <article className="work-card"><Cable className="card-icon" /><h3 className="text-xl">Redes de fibra óptica</h3><p className="section-copy">Diseño de proyectos FTTH con una base técnica en infraestructura y herramientas de fibra óptica.</p><div className="mt-6 flex flex-wrap gap-4"><span className="skill-label">FTTH</span><span className="skill-label">AutoCAD</span></div><Link to="/trayectoria" className="text-link mt-7">Mi experiencia <ArrowUpRight className="h-4 w-4" /></Link></article>
        <article className="work-card"><Layers3 className="card-icon" /><h3 className="text-xl">Gestión de proyectos TI</h3><p className="section-copy">Organización, coordinación y seguimiento para dar estructura al trabajo y mantener el enfoque del proyecto.</p><div className="mt-6 flex flex-wrap gap-4"><span className="skill-label">Jira</span><span className="skill-label">Trello</span></div><Link to="/contacto" className="text-link mt-7">Conversemos <ArrowUpRight className="h-4 w-4" /></Link></article>
        <article className="work-card"><ChartNoAxesCombined className="card-icon" /><h3 className="text-xl">Análisis de datos</h3><p className="section-copy">Formación en consulta, análisis y visualización. Busco mi primera experiencia profesional en esta área.</p><div className="mt-6 flex flex-wrap gap-4"><span className="skill-label">SQL · Python</span><span className="skill-label">Power BI · Tableau</span></div><Link to="/analisis-de-datos" className="text-link mt-7">Mi nuevo rumbo <ArrowUpRight className="h-4 w-4" /></Link></article>
      </div>
    </div></section>
    <section className="contact-band"><div className="site-container section-space flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><span className="eyebrow text-primary-glow">Nuevas oportunidades</span><h2>¿Un proyecto en mente?<br />Empecemos una conversación.</h2><p className="mt-4 max-w-xl text-sm">Proyectos de telecomunicaciones, gestión TI u oportunidades para comenzar en análisis de datos.</p></div><Button asChild size="lg"><Link to="/contacto">Contactar a Dara <ArrowUpRight /></Link></Button></div></section>
  </main>;
}