import { createFileRoute } from "@tanstack/react-router";
import photo from "@/assets/dara.jpg.asset.json";
import cover from "@/assets/portada.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dara Judith — Ingeniera en Telecomunicaciones + Ciencia de Datos" },
      { name: "description", content: "Ingeniera en telecomunicaciones, gerente de proyectos y diseñadora de proyectos TI en camino a la ciencia de datos y UX/UI." },
      { property: "og:title", content: "Dara Judith — Telecomunicaciones + Ciencia de Datos" },
      { property: "og:description", content: "Trayectoria en telecom y gestión de proyectos TI, rumbo a la ciencia de datos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const career = [
  { t: "Ingeniera en Telecomunicaciones", d: "Bases sólidas en redes, fibra óptica e infraestructura de comunicaciones." },
  { t: "Gerente de Proyectos", d: "Liderazgo de equipos, planeación, control de alcance, tiempos y presupuesto." },
  { t: "Diseñadora de Proyectos TI", d: "Diseño de soluciones tecnológicas alineadas a las necesidades del negocio." },
];

const Dot = () => <span className="mb-6 block h-1 w-14 rounded-full bg-primary" />;

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <section className="bg-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
          <div>
            <Dot />
            <p className="mb-3 text-accent">Hola, soy Dara Judith</p>
            <h1 className="text-4xl font-medium leading-tight md:text-6xl">
              Ingeniería de Telecomunicaciones <span className="text-primary-glow">+ Ciencia de Datos</span>
            </h1>
            <p className="mt-5 text-lg text-accent">Análisis de datos + fibra óptica</p>
          </div>
          <img src={photo.url} alt="Dara Judith" className="mx-auto aspect-square w-64 rounded-full border-4 border-primary object-cover shadow-glow md:w-80" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Dot />
        <h2 className="text-3xl font-medium md:text-4xl">Trayectoria profesional</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {career.map((c) => (
            <article key={c.t} className="rounded-xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-glow">
              <h3 className="text-xl font-medium text-primary-glow">{c.t}</h3>
              <p className="mt-3 text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Dot />
          <h2 className="text-3xl font-medium md:text-4xl">Mi siguiente camino: Ciencia de Datos</h2>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Estoy en busca de un camino en ciencia de datos. Aunque aún no cuento con experiencia
            profesional en el área, he tomado cursos para prepararme y estoy lista para nuevos retos,
            uniendo mi visión técnica de telecomunicaciones con el poder de los datos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Dot />
        <h2 className="text-3xl font-medium md:text-4xl">Diseño UX/UI</h2>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          También tomo cursos de diseño UX/UI, lo que aporta en ambas partes: diseño proyectos TI
          pensando en las personas y presento los datos de forma clara y visual.
        </p>
      </section>

      <footer className="border-t border-border">
        <img src={cover.url} alt="Portada: Ingeniería de Telecomunicaciones + Ciencia de Datos" className="w-full" />
        <p className="py-6 text-center text-sm text-muted-foreground">© 2026 Dara Judith</p>
      </footer>
    </main>
  );
}
