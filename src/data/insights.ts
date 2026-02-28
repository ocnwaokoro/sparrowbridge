/**
 * Insights content. Replace with CMS/API fetch when backend is ready.
 */

export interface InsightBodyBlock {
  h2?: string;
  p?: string;
}

export interface InsightArticle {
  id: string;
  category: string;
  categoryLabel: string;
  author: string;
  dateISO: string;
  readMins: number;
  title: string;
  lede: string;
  body: InsightBodyBlock[];
}

export interface InsightCategory {
  id: string;
  label: string;
}

export const ARTICLES: InsightArticle[] = [
  {
    id: 'leadership-001',
    category: 'leadership',
    categoryLabel: 'Leadership',
    author: 'SparrowBridge',
    dateISO: '2026-01-20',
    readMins: 6,
    title: "When Leaders Disagree on the Real Problem",
    lede: "Organizations stall when leaders operate from different truths. Diagnosis restores a shared reality.",
    body: [
      { h2: "What's happening", p: "When a leadership team cannot agree on the root issue, the organization defaults to competing narratives. The result is motion without progress." },
      { h2: "Why it persists", p: "Misalignment is often reinforced by incentives, partial information, or patterns of avoidance. Clarity requires more than another meeting." },
      { p: "If leaders cannot name the same problem, they cannot own the same solution." },
      { h2: "A better starting point", p: "Begin with shared observation: what is true, measurable, and repeatable. Then trace causes rather than debating conclusions." }
    ]
  },
  {
    id: 'culture-001',
    category: 'culture',
    categoryLabel: 'Culture',
    author: 'SparrowBridge',
    dateISO: '2026-01-12',
    readMins: 5,
    title: "Culture Isn't Soft. It's Structural.",
    lede: "Culture is the system of reinforcement that shapes behavior. If you want change, start there.",
    body: [
      { h2: "Culture is reinforcement", p: "People do what is rewarded, what is safe, and what is modeled. Values without reinforcement are theater." },
      { h2: "The real indicators", p: "Look at promotions, meeting dynamics, decision rights, and how conflict is handled. These reveal what the organization truly honors." },
      { p: "Culture is what the system produces, not what the poster claims." },
      { h2: "What to do next", p: "Identify 2–3 behaviors that must change and redesign the incentives and norms that currently protect the old pattern." }
    ]
  },
  {
    id: 'strategy-001',
    category: 'strategy',
    categoryLabel: 'Strategy',
    author: 'SparrowBridge',
    dateISO: '2025-12-18',
    readMins: 7,
    title: "Why Strategy Fails in Execution",
    lede: "Most strategy collapses in the handoff between intent and operating reality.",
    body: [
      { h2: "The handoff problem", p: "Strategy often lives as a document while the operating system lives in calendars, incentives, and decision bottlenecks." },
      { h2: "Where it breaks", p: "Ambiguity in ownership, weak feedback loops, and misaligned metrics create predictable failure, even with smart teams." },
      { p: "Execution is the truth test of strategy." },
      { h2: "Making it hold", p: "Translate strategy into an operating cadence: roles, decision rights, measures, and review cycles that keep it alive." }
    ]
  },
  {
    id: 'faith-001',
    category: 'faith',
    categoryLabel: 'Spirituality in the Workplace',
    author: 'SparrowBridge',
    dateISO: '2025-11-28',
    readMins: 4,
    title: "Leading with Soul in a Systems World",
    lede: "Principled leadership is not sentiment. It is disciplined practice under pressure.",
    body: [
      { h2: "What it requires", p: "Leaders need inner clarity to meet outer complexity. Without it, urgency becomes reactivity." },
      { h2: "A practiced integrity", p: "Faith-informed leadership shows up as consistency, humility, courage, and care, not slogans." },
      { p: "The soul of leadership is revealed in what you refuse to do." },
      { h2: "Practical steps", p: "Name the principles that govern your decisions, and build accountability around them, especially when incentives push the other way." }
    ]
  }
];

export const CATEGORIES: InsightCategory[] = [
  { id: 'leadership', label: 'Leadership' },
  { id: 'culture', label: 'Culture' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'faith', label: 'Spirituality in the Workplace' }
];
