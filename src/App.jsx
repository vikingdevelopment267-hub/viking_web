import { useState, useEffect } from "react";

import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ShoppingCart,
  Menu,
  X,
  Trash2,
} from "lucide-react";

import "./index.css";

function Accordion({
  title,
  content,
  whatsapp,
  instagram,
}) {

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

      <div className={`accordion-content ${open ? "open" : ""}`}>

        <p>{content}</p>

        <div className="contact-buttons">

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <a
            href={instagram}
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

  const [menuOpen, setMenuOpen] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);

  const [cart, setCart] = useState([]);

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

  const addToCart = (product) => {

    setCart([...cart, product]);

    setCartOpen(true);
  };

  const removeFromCart = (index) => {

    const updatedCart = cart.filter((_, i) => i !== index);

    setCart(updatedCart);
  };

  const total = cart.reduce((acc, item) => {
    return acc + item.value;
  }, 0);

  const sendWhatsApp = () => {

    const message = cart
      .map((item) => `• ${item.name} - ${item.price}`)
      .join("%0A");

    const url =
      `https://wa.me/5492616136651?text=Hola Viking,%20quiero%20solicitar:%0A${message}%0A%0ATotal:%20$${total.toLocaleString()} ARS`;

    window.open(url, "_blank");
  };

  return (

    <div className="container">

      {/* NAVBAR */}

      <nav className="navbar">

        <div
          className="cart-icon"
          onClick={() => setCartOpen(true)}
        >

          <ShoppingCart />

          {cart.length > 0 && (
            <span className="cart-count">
              {cart.length}
            </span>
          )}

        </div>

        <h2 className="nav-logo">
          VIKING
        </h2>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(true)}
        >
          <Menu />
        </div>

      </nav>

      {/* MENU HAMBURGUESA */}

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>

        <div
          className="close-menu"
          onClick={() => setMenuOpen(false)}
        >
          <X />
        </div>

        <a href="#">
          Inicio
        </a>

        <a href="#services">
          Servicios
        </a>

        <a href="#packs">
          Packs
        </a>

        <a href="#course">
          Curso
        </a>

        <a href="#contact">
          Contacto
        </a>

      </div>

      {/* CARRITO */}

      <div className={`cart-sidebar ${cartOpen ? "open" : ""}`}>

        <div className="cart-header">

          <h2>
            Carrito
          </h2>

          <X
            className="close-cart"
            onClick={() => setCartOpen(false)}
          />

        </div>

        {cart.length === 0 ? (

          <p className="empty-cart">
            No hay servicios agregados.
          </p>

        ) : (

          <>

            {cart.map((item, index) => (

              <div
                key={index}
                className="cart-item"
              >

                <div>

                  <h4>{item.name}</h4>

                  <p>{item.price}</p>

                </div>

                <button
                  className="delete-button"
                  onClick={() => removeFromCart(index)}
                >
                  <Trash2 size={18} />
                </button>

              </div>

            ))}

            <div className="cart-total">

              <h3>
                Total:
              </h3>

              <span>
                ${total.toLocaleString()} ARS
              </span>

            </div>

            <button
              className="finish-button"
              onClick={sendWhatsApp}
            >
              Finalizar por WhatsApp
            </button>

          </>

        )}

      </div>

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

          <span>
            DESARROLLO WEB
          </span>

        </h1>

        <p className="description">

          {text}

          <span className="cursor">
            |
          </span>

        </p>

        <a
          href="#services"
          className="cta-hero"
        >
          Ver Servicios
        </a>

      </section>

      {/* SERVICIOS */}

      <section
        id="services"
        className="services"
      >

        <h2>
          Servicios
        </h2>

        {/* VIKING */}

        <Accordion
          title="Creación de páginas Web"
          content="Diseñamos páginas modernas, rápidas y optimizadas para vender."
          whatsapp="https://wa.me/5492616136651"
          instagram="https://instagram.com/viking_web"
        />

        {/* VALMAR STUDIO */}

<Accordion
  title="Marketing Digital & Branding"
  content="Creamos identidad de marca + campañas publicitarias que convierten."
  whatsapp="https://wa.me/5492612051343"
  instagram="https://instagram.com/valmarstudio_"
/>
        {/* VIKING */}

        <Accordion
          title="Automatización de Negocios"
          content="Sistemas automáticos para ahorrar tiempo y aumentar ventas."
          whatsapp="https://wa.me/5492616136651"
          instagram="https://instagram.com/viking_web"
        />

      </section>

      {/* PACKS */}

      <section
        id="packs"
        className="packs"
      >

        <h2>
          Planes & Servicios
        </h2>

        <div className="packs-grid">

          {/* PACK 1 */}

          <div className="pack-card">

            <h3>
              Branding inicial
            </h3>

            <p>
              Identidad de marca + 5 historias + 3 publicaciones
              para Instagram.
            </p>

            <span>
              $50.000 ARS
            </span>

            <button
              onClick={() =>
                addToCart({
                  name: "Branding Inicial",
                  price: "$50.000 ARS",
                  value: 50000,
                })
              }
            >
              Agregar
            </button>

          </div>

          {/* PACK 2 */}

          <div className="pack-card premium">

            <h3>
              Desarrollo de Marca y Social Media Manager
            </h3>

            <p>
              Desarrollo visual + Manejo de redes por mes
            </p>

            <span>
              $100.000 ARS
            </span>

            <button
              onClick={() =>
                addToCart({
                  name: "Desarrollo de Marca y Social Media Manager",
                  price: "$100.000 ARS",
                  value: 100000,
                })
              }
            >
              Agregar
            </button>

          </div>

          {/* PACK 3 */}

          <div className="pack-card">

            <h3>
              Landing Page PRO
            </h3>

            <p>
              Landing page + Instagram optimizado +
              integración WhatsApp.
            </p>

            <span>
              $250.000 ARS
            </span>

            <button
              onClick={() =>
                addToCart({
                  name: "Landing Page PRO",
                  price: "$250.000 ARS",
                  value: 250000,
                })
              }
            >
              Agregar
            </button>

          </div>

        </div>

      </section>

      {/* CURSO */}

      <section
        id="course"
        className="course"
      >

        <h2>
          Curso de Desarrollo Web
        </h2>

        <div className="course-card">

          <p>
            Aprendé Desarrollo Web Full Stack
            desde cero con proyectos reales
            y mentalidad de negocio.
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

      <footer
        id="contact"
        className="footer"
      >

        <h3>
          VIKING
        </h3>

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
            WhatsApp
          </a>

        </div>

        <span>
          © 2026 Viking Desarrollo Web
        </span>

      </footer>

    </div>
  );
}