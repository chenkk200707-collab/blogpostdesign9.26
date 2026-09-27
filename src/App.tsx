function Crosshair() {
  return (
    <span className="crosshair" aria-hidden="true">
      <span />
    </span>
  );
}

function ChromosomeViz() {
  return (
    <div className="chromosome-viz" aria-hidden="true">
      <div className="chromosome-track">
        <div className="chromosome-band" />
        <div className="chromosome-band" />
        <div className="chromosome-band" />
        <div className="chromosome-band" />
        <div className="chromosome-marker">
          <span />
        </div>
      </div>
      <div className="chromosome-meta">
        <span>CHR 06</span>
        <span>LOCUS / 6P24.3</span>
        <span>RREB1</span>
      </div>
    </div>
  );
}

function App() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Home">
          <span className="brand-mark">G</span>
        </a>

        <nav className="primary-nav">
          <a href="#top">
            <span>01</span>
            HOME
          </a>
          <a href="#article">
            <span>02</span>
            ARTICLE
          </a>
          <a href="#about">
            <span>03</span>
            ABOUT
          </a>
        </nav>

        <div className="system-status">
          <span className="status-dot" />
          SYSTEM ONLINE
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
              <span>FILE 01</span>
              <span className="eyebrow-line" />
              <span>UPDATED 2026</span>
            </div>

            <p className="hero-kicker">THE IMPORTANCE OF</p>
            <h1>
              GENETICS
              <span>IN TYPE 2 DIABETES</span>
            </h1>
            <p className="hero-cn-title">HOW GENES CONTRIBUTE TO TYPE 2 DIABETES</p>

            <div className="hero-actions">
              <button className="primary-action" onClick={() => scrollTo("#article")}>
                <span>READ ARTICLE</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-frame pure-blank-frame">
              <div className="blank-blueprint-grid" />
              <div className="image-screen" />
              <Crosshair />
            </div>
          </div>
        </section>

        <article className="article-body" id="article">
          <header className="article-head">
            <span className="section-code">FEATURE / GENETICS</span>
            <h2>
              The Importance of Genetics
              <br />
              in Type 2 Diabetes
            </h2>
            <p className="article-deck">
              New research is looking at type 2 diabetes from a genetic angle — and one gene in particular, RREB1, may help explain why some people are born with an innately higher risk.
            </p>
          </header>

          <section className="article-section" id="sec-00">
            <div className="section-num">00</div>
            <h3>THE HIDDEN VARIABLE</h3>
            <p>
              It&apos;s common knowledge that consuming highly processed foods and skipping the gym isn&apos;t exactly the optimal routine for our bodies. Now more than ever, health concerns associated with nutritional and environmental decline are on the rise. However, our bodies have been hiding a secret within our very own genetics.
            </p>
            <p>
              Historically, type 2 diabetes has been diagnosed and treated based on measurable characteristics such as body weight and blood sugar levels. But new research is looking at type 2 diabetes from a genetic angle, which can help explain if some people are born with an innately higher risk.
            </p>
          </section>

          <section className="article-section" id="sec-01">
            <div className="section-num">01</div>
            <h3>TWO PATIENTS, TWO TRAJECTORIES</h3>
            <div className="compare-grid">
              <div className="compare-card">
                <span className="compare-tag">PATIENT A</span>
                <p>Lifts 5x a week, maintains a healthy weight, and eats a balanced diet.</p>
                <span className="compare-verdict">STILL AT RISK?</span>
              </div>
              <div className="compare-card">
                <span className="compare-tag">PATIENT B</span>
                <p>Lives a sedentary lifestyle, is overweight, and frequently has junk food.</p>
                <span className="compare-verdict">STILL PROTECTED?</span>
              </div>
            </div>
            <p>
              If you thought Patient B has a diabetes diagnosis waiting for them, while Patient A is completely safe, you&apos;d be incorrect. While lifestyle plays a heavy role, Patient A could still develop type 2 diabetes if they carry certain genetic risk factors — and Patient B might never develop it if they possess genetics that are protective.
            </p>
            <p>
              This demonstrates how a person&apos;s diagnosis fate is also influenced by the unseen, yet all-encompassing instructions written in our DNA.
            </p>
          </section>

          <section className="article-section" id="sec-02">
            <div className="section-num">02</div>
            <h3>THE ROLE OF RREB1</h3>
            <p>
              Identifying the exact mechanisms behind diabetes can be done by studying specific regions of the human genome. Recently, researchers have zoomed in on a gene called <strong>Ras-Responsive Element Binding Protein 1 (RREB1)</strong>.
            </p>
            <ChromosomeViz />
            <p>
              Our DNA contains thousands of genes, and many of them are responsible for building our cells and their processes. Some genes are what&apos;s known as transcription factors, which are responsible for telling other genes when to increase, or decrease, their function. RREB1 is a transcription factor.
            </p>
            <p>
              Human population research has shown that genetic mutations in the RREB1 gene sequence affect a person&apos;s risk for type 2 diabetes.
            </p>
          </section>

          <section className="article-section" id="sec-03">
            <div className="section-num">03</div>
            <h3>WHEN RREB1 FAILS</h3>
            <p>
              To determine how RREB1 works within the genome, researchers investigated what happens when there is a loss of function in RREB1 — meaning the gene&apos;s activity was either turned down or shut down. They decreased RREB1 function in both human cell and animal models to predict RREB1&apos;s effects on metabolic disease.
            </p>
            <p>
              First, they found that in the pancreas, RREB1 is necessary for normal beta cell development. Beta cells produce insulin, which we need to prevent high blood sugar. When RREB1 loses function, these beta cells become impaired. This leads them to store less insulin and struggle to release it efficiently when blood sugar spikes — for example, after a meal.
            </p>
          </section>

          <section className="article-section" id="sec-04">
            <div className="section-num">04</div>
            <h3>WHAT THE MODELS SHOWED</h3>
            <div className="evidence-grid">
              <div className="evidence-card">
                <span className="evidence-tag">MODEL / 01</span>
                <strong>ZEBRAFISH</strong>
                <p>Lower insulin response, smaller livers and bodies when RREB1 was lost.</p>
              </div>
              <div className="evidence-card">
                <span className="evidence-tag">MODEL / 02</span>
                <strong>HUMAN BETA CELLS</strong>
                <p>Without RREB1, beta cells showed a lower capacity for insulin.</p>
              </div>
              <div className="evidence-card">
                <span className="evidence-tag">MODEL / 03</span>
                <strong>PATIENT MUTATIONS</strong>
                <p>Insulin secretion decreased, stayed the same, or even improved — depending on the mutation.</p>
              </div>
            </div>
            <p>
              And since RREB1 is a transcription factor, removing it from the genomic equation also lowered other genes that regulate insulin response and beta cell development.
            </p>
          </section>

          <section className="article-section" id="sec-05">
            <div className="section-num">05</div>
            <h3>PROTECTIVE ALLELES</h3>
            <p>
              Depending on the type of mutation in patients&apos; RREB1 gene, insulin secretion was either decreased, saw no change, or even improved. So not only do mutations in RREB1 alter our predetermined odds for type 2 diabetes — some can also lower it. This is called a <strong>protective allele</strong>.
            </p>
          </section>

          <section className="article-section" id="sec-06">
            <div className="section-num">06</div>
            <h3>WHY THIS MATTERS</h3>
            <p>
              With over 830 million people living with diabetes, there&apos;s no question that diabetes is a global issue that brings a social and economic burden. When we look at diabetes through a genetic lens, we can start coming up with ways of preventing cases — by determining someone&apos;s genetic risk of developing diabetes before any symptoms show, and treating it as a complex metabolic disorder, rather than a result of bad lifestyle choices.
            </p>
          </section>
        </article>

        <section className="data-band" aria-label="Global diabetes data">
          <div className="warning-label">
            <span>GLOBAL DATA</span>
            <strong>ALERT / 2026</strong>
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
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span>G</span>
        </div>
        <p>
          © 2026 CLINICAL GENOMICS OBSERVATION UNIT
          <br />
          ALL DATA FOR RESEARCH PURPOSES ONLY
        </p>
        <div className="footer-links">
          <a href="#top">HOME</a>
          <a href="#article">ARTICLE</a>
          <a href="#about">ABOUT</a>
        </div>
      </footer>
    </div>
  );
}

export default App;