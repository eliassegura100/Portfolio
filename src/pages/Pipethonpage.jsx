import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PipethonPage.css';

const techStack = [
  { label: 'JavaScript', category: 'Core' },
  { label: 'Ohm.js', category: 'Core' },
  { label: 'Node.js', category: 'Core' },
  { label: 'Parser', category: 'Compiler' },
  { label: 'Analyzer', category: 'Compiler' },
  { label: 'Optimizer', category: 'Compiler' },
  { label: 'Generator', category: 'Compiler' },
  { label: 'React', category: 'Website' },
  { label: 'HTML / CSS', category: 'Website' },
  { label: 'GitHub Pages', category: 'Website' },
];

const features = [
  {
    icon: '▷',
    label: 'Pipeline composition',
    desc: 'The |> operator is the primary composition primitive. Every program is a series of clean data transformations — no tangled callbacks, no deeply nested conditionals.',
  },
  {
    icon: '◈',
    label: 'Exhaustive pattern matching',
    desc: 'Match by type, shape, value, or structure. Pattern blocks must cover all cases at compile time — the analyzer rejects non-exhaustive matches before they run.',
  },
  {
    icon: '◎',
    label: 'AI-native primitives',
    desc: 'llm() is syntax, not a library call. Call any AI model directly in a pipeline stage. Outputs are typed as String? and must be handled exhaustively.',
  },
  {
    icon: '◐',
    label: 'First-class optionals',
    desc: 'String?, Int?, etc. Null is only legal when declared. Assigning none to a non-optional is a compile error. Unwrap safely with the ?? coalesce operator.',
  },
  {
    icon: '◉',
    label: '13 static rules',
    desc: 'Pipethon enforces 13 static constraints at analysis time — from null safety to exhaustive matching. Violations are reported with precise source locations.',
  },
  {
    icon: '◍',
    label: 'Compiles to JavaScript',
    desc: 'The full compiler pipeline: parse → analyze → optimize → generate. Outputs clean, runnable JS from .pipe source files via the CLI.',
  },
];

const codeExamples = [
  {
    num: '01',
    title: 'Hello, pipeline',
    file: 'hello_world.pipe',
    desc: 'The simplest Pipethon program — a string piped to print using the |> operator.',
    code: `"hello, world" |> print;`,
  },
  {
    num: '02',
    title: 'Pattern matching with guards',
    file: 'grade_checker.pipe',
    desc: 'Pattern match on an integer with if-guard conditions. The block must be exhaustive — the wildcard _ arm covers any unmatched case.',
    code: `let score: Int = 87n;

score |> {
  int(n) if n >= 90n => "A"
  int(n) if n >= 80n => "B"
  int(n) if n >= 70n => "C"
  int(n)             => "F"
  _                  => "invalid"
} |> print;
// => "B"`,
  },
  {
    num: '03',
    title: 'Optional / null safety',
    file: 'null_coalesce.pipe',
    desc: 'Optional types, some/none pattern matching, and the ?? coalesce operator.',
    code: `let username: String? = none;

username ?? "Anonymous" |> print;
// => "Anonymous"

username |> {
  some(name) => name
  none       => "Guest"
} |> print;
// => "Guest"`,
  },
  {
    num: '04',
    title: 'LLM as a pipe stage',
    file: 'ai_query_handler.pipe',
    desc: 'Call an AI model directly in the pipeline. The output is typed String? — pattern matching handles the some/none branches exhaustively.',
    code: `"What is Pipethon?"
  |> llm(model: "claude", prompt: "Classify: {input}")
  |> {
       some(label) if label == "question" => "I'll answer that!"
       some(label) if label == "task"     => "On it."
       some(label)                        => label
       none                               => "unknown"
     }
  |> print;`,
  },
];

const compilerPipeline = [
  { step: '01', name: 'Parse', file: 'parser.js', desc: 'Ohm grammar parses .pipe source into a concrete syntax tree.' },
  { step: '02', name: 'Analyze', file: 'analyzer.js', desc: 'Semantic analysis enforces all 13 static rules with precise error locations.' },
  { step: '03', name: 'Optimize', file: 'optimizer.js', desc: 'Constant folding and strength reductions on the AST.' },
  { step: '04', name: 'Generate', file: 'generator.js', desc: 'Walks the optimized AST and emits clean, runnable JavaScript.' },
];

const staticRules = [
  'none can only be assigned to a variable declared with an explicit optional type (?).',
  'The source of a ?? expression must be typed as optional.',
  'The left operand of ?? must be an optional type.',
  'llm() calls must include a model argument.',
  'llm() calls must include a prompt argument.',
  'Pattern blocks must be exhaustive — must include a wildcard _ or cover all cases.',
  'The wildcard _ arm must be the last arm in a pattern block.',
  'Guard conditions must be boolean expressions.',
  'Type annotations in let and pipeline declarations must name known types.',
  'Object patterns must not repeat the same field name.',
  'Variables must be declared before use.',
  'No two declarations in the same scope may share a name.',
  'drop may only appear as an arm body inside filter, map, or each stages.',
];

const team = [
  { name: 'Elias Segura', role: 'Co-creator', desc: 'Language design and implementation, frontend, project lead.', href: 'https://www.linkedin.com/in/eliasseguracs' },
  { name: 'Garnik Gevorkyan', role: 'Co-creator', desc: 'Analyzer and compiler design, ML and GenAI pipeline architecture.', href: 'https://www.linkedin.com/in/garnik-gevorkyan-3b5a79276/' },
  { name: 'Riley Vegting', role: 'Co-creator', desc: 'TypeScript lead, game and software development, compiler contributions.', href: 'https://www.linkedin.com/in/riley-vegting/' },
];

export default function PipethonPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-root">

      {/* Back */}
      <button className="pt-back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Hero */}
      <header className="pt-hero">
        <div className="pt-hero-eyebrow">
          <span className="pt-tag">Completed · 2025</span>
          <span className="pt-tag">Programming Language</span>
          <span className="pt-tag">Co-creator</span>
        </div>
        <h1 className="pt-title">Pipethon</h1>
        <p className="pt-tagline">Flow · Match · Think</p>
        <p className="pt-subtitle">
          A modern programming language built for the age of intelligent systems.
          Designed around pipeline composition and pattern matching — Pipethon gives
          developers a clean, expressive way to build AI-powered applications without
          the boilerplate, fragility, and complexity of traditional code.
        </p>
        <div className="pt-hero-links">
          <a className="pt-btn-primary" href="https://github.com/eliassegura100/Pipethon" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a className="pt-btn-ghost" href="https://eliassegura100.github.io/Pipethon/" target="_blank" rel="noreferrer">
            Website ↗
          </a>
        </div>
        <div className="pt-hero-meta">
          <div className="pt-meta-item">
            <span className="pt-meta-label">Team</span>
            <span className="pt-meta-val">Elias Segura, Garnik Gevorkyan, Riley Vegting</span>
          </div>
          <div className="pt-meta-item">
            <span className="pt-meta-label">Role</span>
            <span className="pt-meta-val">Co-creator, Language Design, Frontend</span>
          </div>
          <div className="pt-meta-item">
            <span className="pt-meta-label">Stack</span>
            <span className="pt-meta-val">JavaScript, Ohm.js, Node.js</span>
          </div>
          <div className="pt-meta-item">
            <span className="pt-meta-label">License</span>
            <span className="pt-meta-val">MIT Open Source</span>
          </div>
        </div>
      </header>

      {/* Why */}
      <section className="pt-section">
        <div className="pt-section-label">Why we built it</div>
        <div className="pt-two-col">
          <div className="pt-problem-card">
            <div className="pt-problem-num">01</div>
            <p className="pt-problem-text">
              Building AI-powered applications in traditional languages means deeply nested callbacks,
              brittle string parsing, and unpredictable model output with no type safety.
            </p>
          </div>
          <div className="pt-problem-card">
            <div className="pt-problem-num">02</div>
            <p className="pt-problem-text">
              Pipethon was designed to solve all three at once — centering the language around
              <em> pipeline composition</em> and <em>pattern matching</em> to turn messy AI code
              into clear, readable programs that tell a story from input to output.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pt-section">
        <div className="pt-section-label">Language features</div>
        <div className="pt-features-grid">
          {features.map((f) => (
            <div key={f.label} className="pt-feature-card">
              <div className="pt-feature-icon">{f.icon}</div>
              <div className="pt-feature-label">{f.label}</div>
              <div className="pt-feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Code examples */}
      <section className="pt-section">
        <div className="pt-section-label">The language in action</div>
        <div className="pt-examples-list">
          {codeExamples.map((ex) => (
            <div key={ex.num} className="pt-example-row" data-num={ex.num}>
              <div className="pt-example-left">
                <div className="pt-example-title">{ex.title}</div>
                <div className="pt-example-file">{ex.file}</div>
                <p className="pt-example-desc">{ex.desc}</p>
              </div>
              <div className="pt-example-code">
                <pre><code>{ex.code}</code></pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compiler pipeline */}
      <section className="pt-section">
        <div className="pt-section-label">Compiler pipeline</div>
        <div className="pt-pipeline-flow">
          {compilerPipeline.map((s, i) => (
            <div key={s.step} className="pt-pipeline-stage">
              <div className="pt-pipeline-connector">
                <div className="pt-pipeline-dot" />
                {i < compilerPipeline.length - 1 && (
                  <div className="pt-pipeline-arrow">→</div>
                )}
              </div>
              <div className="pt-pipeline-body">
                <div className="pt-pipeline-header">
                  <span className="pt-pipeline-name">{s.name}</span>
                  <span className="pt-pipeline-file">{s.file}</span>
                </div>
                <p className="pt-pipeline-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-cli-note">
          <code>node src/pipethon.js compile examples/data_pipeline.pipe -o out.js</code>
          <span>→ outputs clean, runnable JavaScript</span>
        </div>
      </section>

      {/* Static rules */}
      <section className="pt-section">
        <div className="pt-section-label">13 static rules</div>
        <div className="pt-rules-grid">
          {staticRules.map((rule, i) => (
            <div key={i} className="pt-rule-card">
              <div className="pt-rule-num">{String(i + 1).padStart(1)}</div>
              <div className="pt-rule-text">{rule}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="pt-section">
        <div className="pt-section-label">Tech stack</div>
        <div className="pt-stack-groups">
          {['Core', 'Compiler', 'Website'].map((cat) => (
            <div key={cat} className="pt-stack-group">
              <div className="pt-stack-cat">{cat}</div>
              <div className="pt-stack-tags">
                {techStack.filter((t) => t.category === cat).map((t) => (
                  <span key={t.label} className="pt-stack-tag">{t.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="pt-section">
        <div className="pt-section-label">Built by three</div>
        <div className="pt-team-grid">
          {team.map((m) => (
            <a key={m.name} className="pt-team-card" href={m.href} target="_blank" rel="noreferrer">
              <div className="pt-team-name">{m.name}</div>
              <div className="pt-team-role">{m.role}</div>
              <div className="pt-team-desc">{m.desc}</div>
              <div className="pt-team-link">LinkedIn ↗</div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pt-section pt-cta-section">
        <div className="pt-cta-inner">
          <div>
            <div className="pt-section-label">Explore</div>
            <div className="pt-cta-heading">See Pipethon<br />in action.</div>
          </div>
          <div className="pt-cta-links">
            <a className="pt-btn-primary" href="https://github.com/eliassegura100/Pipethon" target="_blank" rel="noreferrer">
              View on GitHub ↗
            </a>
            <a className="pt-btn-ghost" href="https://eliassegura100.github.io/Pipethon/" target="_blank" rel="noreferrer">
              Visit website ↗
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}