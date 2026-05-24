import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from "lucide-react";

import "./index.css";

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">
      <div
        className="accordion-header"
        onClick={() => setOpen(!open)}
      >
        <h3>{title}</h3>

        {open ? <ChevronUp /> : <ChevronDown />}
      </div>

      {open && (
        <div className="accordion-content">
          <p>{content}</p>

          <div className="contact-buttons">

            <a
              href="https://wa.me/5492616136651"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a
              href="https://instagram.com/viking_web"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {

  const fullText =
    "Creamos páginas web modernas, branding digital, automatizaciones inteligentes y experiencias visuales épicas para negocios y marcas.";

  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">

        <img
          src="/logo.png"
          alt="Viking Logo"
          className="hero-logo"
        />

        <h2 className="welcome">
          BIENVENIDO
        </h2>

        <h1 className="main-title">
          VIKING
          <span>DE DESARROLLO WEB</span>
        </h1>

        {/* TYPEWRITER */}
        <p className="description">
          {text}
          <span className="cursor">|</span>
        </p>

      </section>

      {/* SERVICIOS */}
      <section className="services">

        <h2>Servicios</h2>

        <Accordion
          title="Creación de páginas Web"
          content="Diseñamos páginas web modernas, rápidas, responsivas y optimizadas para negocios, emprendimientos y marcas personales."
        />

        <Accordion
          title="Marketing Digital, Publicidad y Creación de marca"
          content="Creamos branding profesional, campañas publicitarias y estrategias digitales para potenciar tu negocio."
        />

        <Accordion
          title="Automatización"
          content="Automatizamos tareas, procesos y sistemas para ahorrar tiempo y mejorar la productividad."
        />

      </section>

      {/* CURSO */}
      <section className="course">

        <h2>Curso de Desarrollo Web</h2>

        <div className="course-card">

          <p>
            Aprende Desarrollo Web Full Stack desde cero
            con proyectos reales, diseño moderno y
            tecnologías actuales.
          </p>

          <a
            href="https://hotmart.com/es/marketplace/productos/hagsxd-desarrollo-web-full-stack-6zw97/C87347302T?ref=Y105975706X"
            target="_blank"
            rel="noreferrer"
            className="course-button"
          >
            Ver Curso
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <h3>VIKING</h3>

        <p>
          Desarrollo Web • Branding • Automatización
        </p>

        <div className="footer-social">

          <a
            href="https://instagram.com/viking_web"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/5492616136651"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle />
          </a>

        </div>

        <span>
          © 2026 Viking del Desarrollo Web
        </span>

      </footer>

    </div>
  );
}