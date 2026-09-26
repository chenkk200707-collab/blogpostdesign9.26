import { useMemo, useState } from "react";

type Article = {
  id: string;
  category: "Genetics" | "Metabolic" | "Lifestyle";
  code: string;
  title: string;
  titleEn: string;
  excerpt: string;
  date: string;
  read: string;
  image: string;
  position: string;
};

const articles: Article[] = [
  {
    id: "01",
    category: "Genetics",
    code: "GEN/RREB1",
    title: "DECODING RREB1: THE GENETIC SWITCH BEHIND BLOOD SUGAR",
    titleEn: "THE GENETIC SWITCH",
    excerpt:
      "From pancreatic islet cells to genome-wide association studies — how we understand RREB1's influence on type 2 diabetes risk.",
    date: "2025.02.18",
    read: "08 MIN",
    image:
      "https://images.unsplash.com/photo-1637929476734-bd7f5f78e40a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
    position: "center",
  },
  {
    id: "02",
    category: "Metabolic",
    code: "MET/GLOBAL",
    title: "THE GLOBAL DIABETES MAP: NUMBERS STILL RISING",
    titleEn: "A GLOBAL SIGNAL",
    excerpt:
      "Numbers are more than statistics. We trace regional disparities, risk patterns, and intervention windows from epidemiological data.",
    date: "2025.02.04",
    read: "06 MIN",
    image:
      "https://images.unsplash.com/photo-1634063182137-e804a00b2bf8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    position: "center 35%",
  },
  {
    id: "03",
    category: "Lifestyle",
    code: "LIF/ACTIVE",
    title: "GENES ARE NOT DESTINY: HOW EXERCISE SHIFTS THE RISK CURVE",
    titleEn: "MOVE THE CURVE",
    excerpt:
      "Same genetic predisposition, different life trajectories. The real effect of regular exercise on insulin sensitivity.",
    date: "2025.01.26",
    read: "05 MIN",
    image:
      "https://images.unsplash.com/photo-1758520145147-c30bc656f314?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    position: "center",
  },
];

const categories = ["All", "Genetics", "Metabolic", "Lifestyle"] as const;

function Crosshair() {
  return (
    <span className="crosshair" aria-hidden="true">
      <span />
    </span>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(
    "All",
  );

  const visibleArticles = useMemo(
    () =>
      activeCategory === "All"
        ? articles
        : articles.filter((article) => article.category === activeCategory),
    [activeCategory],
  );

  const scrollToArticles = () => {
    document.querySelector("#articles")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Gene Scope Home">
          <span className="brand-mark">GS</span>
          <span className="brand-copy">
            <strong>GENE.SCOPE</strong>
            <small>MEDICAL INTELLIGENCE / 01</small>
          </span>
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          <a className="is-active" href="#top">
            <span>01</span>[ HOME ]
          </a>
          <a href="#articles">
            <span>02</span>[ ARCHIVE ]
          </a>
          <a href="#about">
            <span>03</span>[ ABOUT ]
          </a>
        </nav>

        <div className="system-status">
          <span className="status-dot" />
          SYS ONLINE
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-watermark" aria-hidden="true">
            DIABETES
          </div>

          <div className="hero-copy">
            <div className="eyebrow">
              <span>RESEARCH FILE / 024</span>
              <span className="eyebrow-line" />
              <span>UPDATED 2025</span>
            </div>

            <p className="hero-kicker">THE IMPORTANCE OF</p>
            <h1>
              GENETICS
              <span>IN TYPE 2 DIABETES</span>
            </h1>
            <p className="hero-cn-title">
              HOW GENES CONTRIBUTE TO TYPE 2 DIABETES
            </p>
            <p className="hero-intro">
              RREB1 is more than a gene code. It may influence how pancreatic
              islet cells sense glucose, release insulin, and ultimately alter a
              person&apos;s metabolic risk profile.
            </p>

            <div className="hero-actions">
              <button className="primary-action" onClick={scrollToArticles}>
                <span>ACCESS FULL ARCHIVE</span>
                <span aria-hidden="true">↗</span>
              </button>
              <div className="file-meta">
                <span>FILE SIZE / 08 MIN</span>
                <span>CLASS / GENETICS</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-frame">
              <img
                src={articles[0].image}
                alt="DNA double helix model on dark background"
              />
              <div className="image-screen" />
              <Crosshair />
              <div className="scan-label label-top">
                <span>SUBJECT</span>
                RREB1 / 6P24.3
              </div>
              <div className="scan-label label-bottom">
                <span>SCAN STATUS</span>
                ANALYSIS COMPLETE
              </div>
              <div className="vertical-code">SEQ.006839 / A—T—G—C</div>
            </div>
            <div className="visual-index" aria-hidden="true">
              <span>01</span>
              <i />
              <span>04</span>
            </div>
          </div>

          <div className="hero-side-note" aria-hidden="true">
            GS // CLINICAL GENOMICS OBSERVATION UNIT
          </div>
        </section>

        <section className="data-band" aria-label="Global diabetes data">
          <div className="warning-label">
            <span>GLOBAL DATA</span>
            <strong>ALERT / 2025</strong>
          </div>
          <div className="big-stat">
            <strong>830</strong>
            <span>MILLION</span>
          </div>
          <p>
            Approximately 830 million adults worldwide
            <br />
            are currently living with diabetes
          </p>
          <div className="data-source">
            <span>DATA SOURCE</span>
            WHO / GLOBAL REPORT
            <div className="barcode" aria-hidden="true" />
          </div>
        </section>

        <section className="articles-section" id="articles">
          <div className="section-heading">
            <div>
              <span className="section-code">ARCHIVE / LATEST</span>
              <h2>RESEARCH ARCHIVES</h2>
              <p>INDEXED INTELLIGENCE FILES</p>
            </div>
            <div className="section-count">
              <span>INDEXED</span>
              <strong>024</strong>
              <span>FILES</span>
            </div>
          </div>

          <div className="filter-row" role="group" aria-label="Article category filter">
            {categories.map((category, index) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                <span>0{index + 1}</span>
                {category}
              </button>
            ))}
          </div>

          <div className="article-grid">
            {visibleArticles.map((article, index) => (
              <article
                className={`article-card article-${article.id}`}
                key={article.id}
              >
                <div className="card-image">
                  <img
                    src={article.image}
                    alt=""
                    style={{ objectPosition: article.position }}
                  />
                  <div className="card-overlay" />
                  <span className="card-number">/{article.id}</span>
                  <span className="access-message">ACCESSING DATA...</span>
                  <Crosshair />
                </div>
                <div className="card-content">
                  <div className="card-meta">
                    <span>{article.code}</span>
                    <span>{article.date}</span>
                  </div>
                  <p className="card-en-title">{article.titleEn}</p>
                  <h3>{article.title}</h3>
                  <p className="card-excerpt">{article.excerpt}</p>
                  <div className="card-footer">
                    <span className="category-tag">{article.category}</span>
                    <a href={`#article-${article.id}`}>
                      OPEN FILE <span aria-hidden="true">→</span>
                    </a>
                    <span className="read-time">{article.read}</span>
                  </div>
                </div>
                {index === 0 && <span className="featured-flag">FEATURED</span>}
              </article>
            ))}
          </div>
        </section>

        <section className="manifesto" id="about">
          <div className="manifesto-code" aria-hidden="true">
            6P24.3
          </div>
          <div className="manifesto-copy">
            <span>OUR MISSION</span>
            <h2>
              Translating complex medical evidence
              <br />
              into <span>actionable intelligence.</span>
            </h2>
          </div>
          <p>
            GENE.SCOPE focuses on genetics, metabolic health, and precision medicine.
            We dissect research papers, verify data, and use clear visual language
            to connect laboratory findings with real people.
          </p>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span>GS</span>
          <strong>GENE.SCOPE</strong>
        </div>
        <p>MEDICAL INTELLIGENCE ARCHIVE</p>
        <div className="footer-links">
          <a href="#top">BACK TO TOP ↑</a>
          <span>© 2025 / ALL DATA VERIFIED</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
