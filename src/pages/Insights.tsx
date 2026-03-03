import React, { useState, useEffect } from 'react';
import { PageShell, SiteHeader, Hero, Footer, Button, HeroKickerStyle } from '../components';
import { ARTICLES, CATEGORIES } from '../data/insights';
import { formatDate } from '../utils/formatDate';

const Insights: React.FC = () => {
  const [currentArticle, setCurrentArticle] = useState(ARTICLES[0]);
  const [openCategory, setOpenCategory] = useState<string | null>(ARTICLES[0].category);
  const [browseOpen, setBrowseOpen] = useState(false);

  useEffect(() => {
    document.title = 'SparrowBridge - Insights';
  }, []);

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
      <SiteHeader />
      
      {/* HERO */}
      <Hero
        kicker={<HeroKickerStyle prefix="Insights" />}
        title="Wisdom in Practice"
        subtitle="A living library of reflections on leadership, culture, systems, and the work of building organizations that endure. Curated for leaders who want to go deeper."
        variant="dark"
        actions={<Button href="#browse" variant="inverse" className="border-2">Browse insights</Button>        }
      />

      {/* PAGE */}
      <section id="browse" className="scroll-mt-28 bg-white px-[28px] py-[64px] lg:px-[120px] lg:py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-[18px] items-start">
          
          {/* Mobile accordion */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setBrowseOpen(b => !b)}
              aria-expanded={browseOpen}
              aria-controls="insights-browse"
              className="w-full flex items-center justify-between px-4 py-3 bg-P/5 border border-P/15 rounded-card font-h text-[14px] font-semibold text-P min-h-[44px]"
            >
              Browse insights
              <span aria-hidden="true">{browseOpen ? '▴' : '▾'}</span>
            </button>
            {browseOpen && (
              <div id="insights-browse" className="mt-2 border border-P/15 rounded-card bg-white overflow-hidden max-h-[60vh] overflow-y-auto">
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
                          if ((e.target as HTMLDetailsElement).open) setOpenCategory(cat.id);
                          else if (openCategory === cat.id) setOpenCategory(null);
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
                                currentArticle.id === article.id ? 'bg-[rgba(54,72,97,.06)] border-[rgba(54,72,97,.22)]' : ''
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2.5">
                                <div className="font-h text-[13px] font-extrabold leading-[1.25] flex-1 min-w-0 truncate">
                                  {article.title}
                                </div>
                                <div className="font-b text-[11px] font-bold text-[rgba(54,72,97,.55)] shrink-0">
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
              </div>
            )}
          </div>
          {/* Desktop sidebar — fully unchanged */}
          <div className="hidden lg:block">
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
                            <div className="font-h text-[13px] font-extrabold leading-[1.25] flex-1 min-w-0 truncate">
                              {article.title}
                            </div>
                            <div className="font-b text-[11px] font-bold text-[rgba(54,72,97,.55)] shrink-0">
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
          </div>

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
              <h2 className="font-h text-[26px] lg:text-[34px] font-extrabold tracking-[-.2px] leading-[1.15] text-[rgba(54,72,97,.96)]">
                {currentArticle.title}
              </h2>
              <div className="text-[16px] text-[rgba(54,72,97,.85)] max-w-[900px]">
                {currentArticle.lede}
              </div>
            </div>

            <div className="p-[18px] flex flex-col gap-[14px]">
              {/* PLACEHOLDER [VISIBLE]: Article hero/feature image — needs per-article image in data/insights or asset; currently shows "Image Placeholder" */}
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
                    <div className="font-h text-[18px] font-extrabold tracking-[-.1px]">Want to start a conversation?</div>
                    <div className="text-[14px] text-white/82 max-w-[700px]">
                      If you're navigating complexity and want clarity you can act on, let's start a conversation.
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
