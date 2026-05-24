import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import "./index.css";

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>

      <div className={`accordion-content ${open ? "open" : ""}`}>
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
    </div>
  );
}

export default function App() {
  const fullText =
    "Creamos páginas web modernas, branding digital, automatizaciones inteligentes y sistemas que convierten visitantes en clientes.";

  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">

        <img src="/logo.png" alt="Viking Logo" className="hero-logo" />

        <h2 className="welcome">BIENVENIDO</h2>

        <h1 className="main-title">
          VIKING
          <span>DESARROLLO WEB</span>
        </h1>

        <p className="description">
          {text}
          <span className="cursor">|</span>
        </p>

        <a href="#services" className="cta-hero">
          Ver Servicios
        </a>
      </section>

      {/* SERVICIOS */}
      <section id="services" className="services">
        <h2>Servicios</h2>

        <Accordion
          title="Creación de páginas Web"
          content="Diseñamos páginas modernas, rápidas y optimizadas para vender."
        />

        <Accordion
          title="Marketing Digital & Branding"
          content="Creamos identidad de marca + campañas publicitarias que convierten."
        />

        <Accordion
          title="Automatización de Negocios"
          content="Sistemas automáticos para ahorrar tiempo y aumentar ventas."
        />
      </section>

      {/* CURSO */}
      <section className="course">
        <h2>Curso de Desarrollo Web</h2>

        <div className="course-card">
          <p>
            Aprendé Desarrollo Web Full Stack desde cero con proyectos reales y
            mentalidad de negocio.
          </p>

          <a
            href="https://hotmart.com/es/marketplace/productos/hagsxd-desarrollo-web-full-stack-6zw97/C87347302T?ref=Y105975706X"
            target="_blank"
            rel="noreferrer"
            className="course-button"
          >
            Acceder al Curso
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>VIKING</h3>
        <p>Desarrollo Web • Branding • Automatización</p>

        <div className="footer-social">
          <a href="https://instagram.com/viking_web" target="_blank" rel="noreferrer">
            Instagram
          </a>

          <a href="https://wa.me/5492616136651" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <span>© 2026 Viking Desarrollo Web</span>
      </footer>
    </div>
  );
}