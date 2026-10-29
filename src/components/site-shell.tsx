import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/" as const, label: "Inicio" },
  { to: "/trayectoria" as const, label: "Trayectoria" },
  { to: "/analisis-de-datos" as const, label: "Análisis de datos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="site-container flex h-20 items-center justify-between gap-6">
      <Link to="/" onClick={() => setOpen(false)} className="brand-name">Dara Judith<span className="text-primary">.</span></Link>
      <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
        {links.map(link => <Link key={link.to} to={link.to} activeOptions={{ exact: true }} activeProps={{ className: "nav-link nav-active" }} inactiveProps={{ className: "nav-link" }}>{link.label}</Link>)}
      </nav>
      <Button asChild className="hidden md:inline-flex"><Link to="/contacto">Hablemos <ArrowUpRight /></Link></Button>
      <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Navegación móvil" className="site-container flex flex-col gap-1 border-t border-border pb-5 md:hidden">
      {[...links, { to: "/contacto" as const, label: "Contacto" }].map(link => <Link key={link.to} to={link.to} className="nav-link py-3" onClick={() => setOpen(false)}>{link.label}</Link>)}
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container flex flex-col justify-between gap-5 py-9 sm:flex-row sm:items-center">
    <Link to="/" className="brand-name">Dara Judith<span className="text-primary-glow">.</span></Link>
    <p className="text-sm text-inverse-muted">Ingeniería, proyectos y nuevas perspectivas.</p>
    <span className="text-sm text-inverse-muted">© 2026 Dara Judith</span>
  </div></footer>;
}