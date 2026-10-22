import { useState, type FormEvent, type ReactNode } from "react";

const whatsappUrl =
  "https://wa.me/553330143580?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14m-5-5 5 5-5 5"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="check-icon" viewBox="0 0 24 24" fill="none">
      <path
        d="m5 12 4.2 4L19 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#inicio">
      <img
        className="brand-symbol"
        src="/images/garage-auto-center-logo.png"
        alt=""
      />
      <span className="brand-copy">
        <strong>Garage</strong>
        <small>Auto Center</small>
      </span>
    </a>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="section-label">
      <span />
      {children}
    </p>
  );
}

function App() {
  const [customerName, setCustomerName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [carProblem, setCarProblem] = useState("");

  function handleWhatsAppSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Olá! Gostaria de solicitar um orçamento.",
      "",
      `Nome: ${customerName.trim()}`,
      `Veículo: ${carModel.trim()}`,
      `Ano: ${carYear}`,
      `Problema/descrição: ${carProblem.trim()}`,
    ].join("\n");
    window.open(
      `https://wa.me/553330143580?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const services = [
    {
      number: "01",
      title: "Alinhamento",
      description:
        "Direção precisa, desgaste uniforme e mais segurança para o seu dia a dia.",
    },
    {
      number: "02",
      title: "Balanceamento",
      description:
        "Elimine vibrações e recupere o conforto ao dirigir em qualquer velocidade.",
    },
    {
      number: "03",
      title: "Pneus e rodas",
      description:
        "Avaliação técnica para você trocar apenas o que realmente precisa.",
    },
    {
      number: "04",
      title: "Manutenção",
      description:
        "Diagnóstico cuidadoso e orientação clara antes de qualquer serviço.",
    },
  ];

  const reviews = [
    {
      quote:
        "Serviço impecável e de altíssima qualidade. A equipe demonstrou competência técnica e cordialidade em todo o atendimento.",
      title: "Atendimento acima da média",
      author: "Avaliação pública",
    },
    {
      quote:
        "Minha oficina de confiança. Super profissional e serviço muito acima da média. Recomendo!",
      title: "Oficina de confiança",
      author: "Cliente Garage",
    },
  ];

  return (
    <main id="inicio">
      <div className="utility-bar">
        <div className="container utility-content">
          <p>Governador Valadares · MG</p>
          <p>Segunda a sexta · Consulte os horários</p>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <Brand />
          <nav aria-label="Navegação principal">
            <a href="#servicos">Serviços</a>
            <a href="#diferenciais">A Garage</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#contato">Contato</a>
          </nav>
          <a
            className="button button-dark nav-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Pedir orçamento
            <ArrowIcon diagonal />
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <SectionLabel>Auto center em Governador Valadares</SectionLabel>
            <h1>
              Seu carro.
              <br />
              <span>Nosso cuidado.</span>
            </h1>
            <div className="hero-intro">
              <p>
                Serviço automotivo sem complicação: avaliação criteriosa,
                conversa clara e o cuidado que o seu carro merece.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-accent"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar orçamento
                  <ArrowIcon />
                </a>
                <a className="text-link" href="#servicos">
                  Conhecer serviços
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <img
              src="/images/gac-bmw-audi.jpg"
              alt="Interior da Garage Auto Center com veículos em atendimento"
            />
            <div className="hero-media-shade" />
            <div className="hero-rating">
              <span className="rating-number">4,7</span>
              <div>
                <p className="stars" aria-label="5 estrelas">
                  ★★★★★
                </p>
                <p>Reputação online</p>
              </div>
            </div>
            <div className="hero-caption">
              <p>Precisão em cada detalhe.</p>
              <span>Garage Auto Center</span>
            </div>
          </div>
        </div>
        <div className="container trust-strip" aria-label="Diferenciais">
          <div>
            <span>01</span>
            <p>Atendimento direto</p>
          </div>
          <div>
            <span>02</span>
            <p>Diagnóstico claro</p>
          </div>
          <div>
            <span>03</span>
            <p>Serviço responsável</p>
          </div>
          <div>
            <span>04</span>
            <p>Confiança na estrada</p>
          </div>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="container">
          <div className="section-heading">
            <div>
              <SectionLabel>O que fazemos</SectionLabel>
              <h2>Cuidado completo para você rodar tranquilo.</h2>
            </div>
            <p>
              Da primeira conversa à entrega, cada etapa é conduzida com
              atenção e transparência.
            </p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <a
                className="service-row"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                key={service.number}
              >
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-arrow">
                  <ArrowIcon diagonal />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="location-showcase" aria-label="Conheça a Garage">
        <div className="container location-grid">
          <div className="location-copy">
            <SectionLabel>Nossa estrutura</SectionLabel>
            <h2>Uma oficina preparada para receber o seu carro.</h2>
            <p>
              Estrutura ampla, organizada e equipada para cuidar de cada
              veículo com segurança e precisão.
            </p>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=Garage+Auto+Center+Rua+Jose+Carlos+Pereira+341+Governador+Valadares"
              target="_blank"
              rel="noreferrer"
            >
              Como chegar
              <ArrowIcon diagonal />
            </a>
          </div>
          <figure className="location-photo">
            <img
              src="/images/gac-fachada.jpg"
              alt="Fachada da Garage Auto Center em Governador Valadares"
            />
            <figcaption>
              <span>Garage Auto Center</span>
              <span>Rua José Carlos Pereira, 341</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="about" id="diferenciais">
        <div className="about-photo">
          <img
            src="/images/gac-corolla.jpg"
            alt="Toyota Corolla realizando alinhamento na Garage Auto Center"
          />
          <div className="photo-tag">
            <strong>GV</strong>
            <span>Vila Bretas</span>
          </div>
        </div>
        <div className="about-content">
          <SectionLabel>Por que escolher a Garage</SectionLabel>
          <h2>Seu carro fala. A gente sabe ouvir.</h2>
          <p className="about-lead">
            Aqui, você entende o que está acontecendo antes de tomar qualquer
            decisão. Sem pressão, sem excesso de termos técnicos.
          </p>
          <ul className="feature-list">
            <li>
              <CheckIcon />
              <div>
                <h3>Contato direto</h3>
                <p>Converse com quem entende do assunto.</p>
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <h3>Orçamento transparente</h3>
                <p>Informação clara sobre serviço, prazo e valor.</p>
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <h3>Cuidado de verdade</h3>
                <p>Seu veículo tratado com atenção em cada detalhe.</p>
              </div>
            </li>
          </ul>
          <a
            className="button button-accent"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Falar com a equipe
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="reviews section" id="avaliacoes">
        <div className="container">
          <div className="reviews-top">
            <div>
              <SectionLabel>Quem conhece, recomenda</SectionLabel>
              <h2>Confiança que se constrói na prática.</h2>
            </div>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=Garage+Auto+Center+Rua+Jose+Carlos+Pereira+341+Governador+Valadares"
              target="_blank"
              rel="noreferrer"
            >
              Ver avaliações no Google
              <ArrowIcon diagonal />
            </a>
          </div>
          <div className="review-grid">
            {reviews.map((review, index) => (
              <article className="review-card" key={review.title}>
                <div className="review-meta">
                  <span>0{index + 1}</span>
                  <p className="stars" aria-label="5 estrelas">
                    ★★★★★
                  </p>
                </div>
                <blockquote>“{review.quote}”</blockquote>
                <div>
                  <h3>{review.title}</h3>
                  <p>{review.author}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contato">
        <div className="container cta-inner">
          <div>
            <SectionLabel>Vamos conversar?</SectionLabel>
            <h2>
              Seu próximo passo
              <br />
              começa com uma mensagem.
            </h2>
          </div>
          <div className="cta-aside">
            <p>
              Preencha os dados do veículo e conte o que está acontecendo.
              As informações serão enviadas junto com sua mensagem no WhatsApp.
            </p>
            <form className="whatsapp-form" onSubmit={handleWhatsAppSubmit}>
              <label>
                Seu nome
                <input
                  autoComplete="name"
                  name="customerName"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                  placeholder="Como podemos chamar você?"
                  required
                />
              </label>
              <label>
                Modelo do carro
                <input
                  name="carModel"
                  value={carModel}
                  onChange={(event) => setCarModel(event.target.value)}
                  placeholder="Ex.: Toyota Corolla"
                  required
                />
              </label>
              <label>
                Ano do veículo
                <input
                  name="carYear"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  value={carYear}
                  onChange={(event) => setCarYear(event.target.value)}
                  placeholder="Ex.: 2020"
                  required
                />
              </label>
              <label>
                Problema ou descrição
                <textarea
                  name="carProblem"
                  value={carProblem}
                  onChange={(event) => setCarProblem(event.target.value)}
                  placeholder="Descreva o que está acontecendo com o carro..."
                  rows={3}
                  required
                />
              </label>
              <button className="button button-light" type="submit">
                Chamar no WhatsApp
                <ArrowIcon diagonal />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <Brand light />
          <div className="footer-info">
            <div>
              <span>Endereço</span>
              <p>
                Rua José Carlos Pereira, 341
                <br />
                Vila Bretas · Governador Valadares
              </p>
            </div>
            <div>
              <span>Telefone</span>
              <a href="tel:+553330143580">(33) 3014-3580</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Garage Auto Center</p>
          <a href="#inicio">
            Voltar ao topo
            <ArrowIcon />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
