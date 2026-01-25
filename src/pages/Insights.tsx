import React, { useState, useEffect } from 'react';
import { 
  PageShell, 
  SiteHeader, 
  Footer, 
  Container,
  Button
} from '../components';

const ARTICLES = [
  {
    id: "leadership-001",
    category: "leadership",
    categoryLabel: "Leadership",
    author: "SparrowBridge",
    dateISO: "2026-01-20",
    readMins: 6,
    title: "When Leaders Disagree on the Real Problem",
    lede: "Organizations stall when leaders operate from different truths. Diagnosis restores a shared reality.",
    body: [
      { h2: "What’s happening", p: "When a leadership team cannot agree on the root issue, the organization defaults to competing narratives. The result is motion without progress." },
      { h2: "Why it persists", p: "Misalignment is often reinforced by incentives, partial information, or patterns of avoidance. Clarity requires more than another meeting." },
      { p: "If leaders cannot name the same problem, they cannot own the same solution." },
      { h2: "A better starting point", p: "Begin with shared observation: what is true, measurable, and repeatable. Then trace causes rather than debating conclusions." }
    ]
  },
  {
    id: "culture-001",
    category: "culture",
    categoryLabel: "Culture",
    author: "SparrowBridge",
    dateISO: "2026-01-12",
    readMins: 5,
    title: "Culture Isn’t Soft—It’s Structural",
    lede: "Culture is the system of reinforcement that shapes behavior. If you want change, start there.",
    body: [
      { h2: "Culture is reinforcement", p: "People do what is rewarded, what is safe, and what is modeled. Values without reinforcement are theater." },
      { h2: "The real indicators", p: "Look at promotions, meeting dynamics, decision rights, and how conflict is handled. These reveal what the organization truly honors." },
      { p: "Culture is what the system produces—not what the poster claims." },
      { h2: "What to do next", p: "Identify 2–3 behaviors that must change and redesign the incentives and norms that currently protect the old pattern." }
    ]
  },
  {
    id: "strategy-001",
    category: "strategy",
    categoryLabel: "Strategy",
    author: "SparrowBridge",
    dateISO: "2025-12-18",
    readMins: 7,
    title: "Why Strategy Fails in Execution",
    lede: "Most strategy collapses in the handoff between intent and operating reality.",
    body: [
      { h2: "The handoff problem", p: "Strategy often lives as a document while the operating system lives in calendars, incentives, and decision bottlenecks." },
      { h2: "Where it breaks", p: "Ambiguity in ownership, weak feedback loops, and misaligned metrics create predictable failure—even with smart teams." },
      { p: "Execution is the truth test of strategy." },
      { h2: "Making it hold", p: "Translate strategy into an operating cadence: roles, decision rights, measures, and review cycles that keep it alive." }
    ]
  },
  {
    id: "faith-001",
    category: "faith",
    categoryLabel: "Faith & Work",
    author: "SparrowBridge",
    dateISO: "2025-11-28",
    readMins: 4,
    title: "Leading with Soul in a Systems World",
    lede: "Principled leadership is not sentiment. It is disciplined practice under pressure.",
    body: [
      { h2: "What it requires", p: "Leaders need inner clarity to meet outer complexity. Without it, urgency becomes reactivity." },
      { h2: "A practiced integrity", p: "Faith-informed leadership shows up as consistency, humility, courage, and care—not slogans." },
      { p: "The soul of leadership is revealed in what you refuse to do." },
      { h2: "Practical steps", p: "Name the principles that govern your decisions, and build accountability around them—especially when incentives push the other way." }
    ]
  }
];

const CATEGORIES = [
  { id: "leadership", label: "Leadership" },
  { id: "culture", label: "Culture" },
  { id: "strategy", label: "Strategy" },
  { id: "faith", label: "Faith & Work" }
];

const Insights: React.FC = () => {
  const [currentArticle, setCurrentArticle] = useState(ARTICLES[0]);
  const [openCategory, setOpenCategory] = useState<string | null>(ARTICLES[0].category);

  const formatDate = (iso: string) => {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const found = ARTICLES.find(a => a.id === hash);
      if (found) {
        setCurrentArticle(found);
        setOpenCategory(found.category);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentIndex = ARTICLES.findIndex(a => a.id === currentArticle.id);
  const prevArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : undefined;
  const nextArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : undefined;

  return (
    <PageShell>
      <SiteHeader activeLink="/insights" />
      
      {/* HERO */}
      <section className="bg-P text-white px-[28px] py-[70px] lg:px-[80px] lg:py-[90px] grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-7 items-start">
        <div className="flex flex-col gap-2">
          <div className="font-h text-[13px] font-extrabold tracking-[1.2px] uppercase text-white/75">Insights</div>
          <h1 className="font-h text-[40px] md:text-[52px] font-extrabold tracking-[-.6px] leading-[1.05] mt-[10px]">
            Wisdom in Practice
          </h1>
          <p className="text-[20px] text-white/82 max-w-[760px] mt-[10px]">
            A living library of reflections on leadership, culture, systems, and the work of building organizations that endure.
          </p>
        </div>

        <aside aria-label="What you’ll find here" className="bg-white/80 border border-[rgba(54,72,97,.14)] rounded-card p-[18px] flex flex-col gap-[10px]">
          <div className="font-h text-[14px] font-extrabold text-[rgba(54,72,97,.9)]">What you’ll find here</div>
          <div className="pill p-3 rounded-card border border-[rgba(54,72,97,.14)] bg-white/65 text-[13px] font-semibold text-[rgba(54,72,97,.9)]">
            Leadership & Decision-Making
          </div>
          <div className="pill p-3 rounded-card border border-[rgba(54,72,97,.14)] bg-white/65 text-[13px] font-semibold text-[rgba(54,72,97,.9)]">
            Culture & Trust
          </div>
          <div className="pill p-3 rounded-card border border-[rgba(54,72,97,.14)] bg-white/65 text-[13px] font-semibold text-[rgba(54,72,97,.9)]">
            Strategy & Execution
          </div>
          <div className="pill p-3 rounded-card border border-[rgba(54,72,97,.14)] bg-white/65 text-[13px] font-semibold text-[rgba(54,72,97,.9)]">
            Faith & Work
          </div>
        </aside>
      </section>

      {/* PAGE */}
      <section className="bg-white px-[28px] py-[64px] lg:px-[120px] lg:py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-[18px] items-start">
          
          {/* Sidebar */}
          <aside aria-label="Insights library" className="border border-[rgba(54,72,97,.16)] rounded-card bg-white overflow-hidden lg:sticky lg:top-[110px] lg:max-h-[calc(100vh-140px)] flex flex-col">
            <div className="p-[14px] bg-[rgba(54,72,97,.06)] border-b border-[rgba(54,72,97,.16)]">
              <div className="font-h text-[16px] font-extrabold tracking-[-.1px] text-[rgba(54,72,97,.95)]">
                Browse Insights
              </div>
            </div>
            <div className="p-3 overflow-auto flex flex-col gap-[10px]">
              {CATEGORIES.map(cat => {
                const categoryArticles = ARTICLES.filter(a => a.category === cat.id);
                if (categoryArticles.length === 0) return null;

                const isOpen = openCategory === cat.id;

                return (
                  <details 
                    key={cat.id} 
                    className="border border-[rgba(54,72,97,.16)] rounded-card overflow-hidden bg-[#FAFAFA] open:bg-white" 
                    open={isOpen}
                    onToggle={(e) => {
                      if ((e.target as HTMLDetailsElement).open) {
                        setOpenCategory(cat.id);
                      } else if (openCategory === cat.id) {
                        setOpenCategory(null);
                      }
                    }}
                  >
                    <summary className="cursor-pointer px-3 py-3 flex items-center justify-between gap-3 font-h text-[13px] font-extrabold text-[rgba(54,72,97,.92)] bg-[rgba(54,72,97,.06)] border-b border-[rgba(54,72,97,.12)] list-none [&::-webkit-details-marker]:hidden">
                      <span>{cat.label}</span>
                      <span className="font-b text-[12px] font-bold text-[rgba(54,72,97,.62)]">{categoryArticles.length}</span>
                    </summary>
                    <div className="p-[10px] bg-white flex flex-col gap-2">
                      {categoryArticles.map(article => (
                        <a 
                          key={article.id}
                          href={`#${article.id}`}
                          className={`group w-full text-left rounded-card border border-[rgba(54,72,97,.12)] bg-[#FAFAFA] text-[rgba(54,72,97,.92)] cursor-pointer px-[10px] py-[10px] flex flex-col gap-0 transition-colors duration-150 hover:bg-[rgba(54,72,97,.06)] no-underline ${
                            currentArticle.id === article.id 
                              ? 'bg-[rgba(54,72,97,.06)] border-[rgba(54,72,97,.22)]' 
                              : ''
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2.5">
                            <div className="font-h text-[13px] font-extrabold leading-[1.25] flex-1">
                              {article.title}
                            </div>
                            <div className="font-b text-[11px] font-bold text-[rgba(54,72,97,.55)] whitespace-nowrap">
                              {formatDate(article.dateISO)}
                            </div>
                          </div>
                          <div className="font-b text-[12px] text-[rgba(54,72,97,.78)] leading-[1.35] max-h-0 opacity-0 overflow-hidden group-hover:mt-1.5 group-hover:max-h-12 group-hover:opacity-100 transition-all duration-200">
                            {article.lede}
                          </div>
                        </a>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
          </aside>

          {/* Article */}
          <main aria-label="Selected insight" className="border border-[rgba(54,72,97,.16)] rounded-card bg-white overflow-hidden">
            <div className="p-[16px_18px] bg-[rgba(54,72,97,.06)] border-b border-[rgba(54,72,97,.16)] flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2 text-[12px] font-bold text-[rgba(54,72,97,.65)]">
                <span className="font-h font-extrabold tracking-[.2px] text-[rgba(54,72,97,.78)]">{currentArticle.categoryLabel}</span>
                <span>·</span>
                <span>{formatDate(currentArticle.dateISO)}</span>
                <span>·</span>
                <span>{currentArticle.readMins} min read</span>
                <span>·</span>
                <span>By {currentArticle.author}</span>
              </div>
              <h2 className="font-h text-[34px] font-extrabold tracking-[-.2px] leading-[1.15] text-[rgba(54,72,97,.96)]">
                {currentArticle.title}
              </h2>
              <div className="text-[16px] text-[rgba(54,72,97,.85)] max-w-[900px]">
                {currentArticle.lede}
              </div>
            </div>

            <div className="p-[18px] flex flex-col gap-[14px]">
              <div className="aspect-video border border-[rgba(54,72,97,.16)] rounded-card bg-[linear-gradient(135deg,rgba(54,72,97,.16),rgba(99,107,47,.14))] flex items-center justify-center font-h text-[12px] font-extrabold tracking-[1px] uppercase text-[rgba(54,72,97,.62)]">
                Image Placeholder
              </div>
              <div className="flex flex-col gap-3 max-w-[900px] 
                [&_h2]:font-h [&_h2]:text-[18px] [&_h2]:font-extrabold [&_h2]:tracking-[-.1px] [&_h2]:mt-1.5 [&_h2]:text-[rgba(54,72,97,.94)]
                [&_p]:text-[14px] [&_p]:text-[rgba(54,72,97,.88)] [&_p]:leading-[1.7]">
                {currentArticle.body.map((block, i) => (
                  <React.Fragment key={i}>
                    {block.h2 && <h2>{block.h2}</h2>}
                    {block.p && <p>{block.p}</p>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="p-[16px_18px] border-t border-[rgba(54,72,97,.16)] bg-[#FAFAFA] flex justify-between items-center gap-3 flex-wrap">
              <a 
                href={prevArticle ? `#${prevArticle.id}` : undefined} 
                className={`inline-flex items-center justify-center px-3 py-2.5 rounded-btn border border-[rgba(54,72,97,.16)] bg-white font-h text-[12px] font-extrabold text-[rgba(54,72,97,.9)] no-underline ${!prevArticle ? 'opacity-45 cursor-not-allowed' : ''}`}
              >
                ← Previous
              </a>
              <a 
                href={nextArticle ? `#${nextArticle.id}` : undefined} 
                className={`inline-flex items-center justify-center px-3 py-2.5 rounded-btn border border-[rgba(54,72,97,.16)] bg-white font-h text-[12px] font-extrabold text-[rgba(54,72,97,.9)] no-underline ${!nextArticle ? 'opacity-45 cursor-not-allowed' : ''}`}
              >
                Next →
              </a>
            </div>

            <div className="p-[18px]">
              <div className="border border-[rgba(54,72,97,.16)] rounded-card overflow-hidden">
                <div className="bg-P text-white p-[24px_18px] flex justify-between items-center gap-[14px] flex-wrap">
                  <div>
                    <div className="font-h text-[18px] font-extrabold tracking-[-.1px]">Want help building what lasts?</div>
                    <div className="text-[14px] text-white/82 max-w-[700px]">
                      If you’re navigating complexity and want clarity you can act on, let’s start a conversation.
                    </div>
                  </div>
                  <Button href="/contact" variant="primary">Start the Conversation</Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <Footer />
    </PageShell>
  );
};

export default Insights;
