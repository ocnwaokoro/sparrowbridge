# SparrowBridge — Stubs & Placeholders Inventory
Last updated: February 28, 2026
Total items: 34

---

## BLOCKING — must be resolved before the site can go live

### Forms
- [ ] **ContactForm submission** (`src/components/contact/ContactForm.tsx`) — Form posts nowhere when `VITE_CONTACT_FORM_ENDPOINT` is unset. Needs env var set in `.env` and a Formspree or backend POST endpoint wired.
- [ ] **ApplicationForm submission** (`src/components/careers/ApplicationForm.tsx`) — Same. Form does nothing when `VITE_APPLICATION_FORM_ENDPOINT` is unset. Needs env var and backend/Formspree URL.

### Routes / Links
- (None. The only broken link noted earlier was in `InsightsRail`, which is unused — see CLEANUP — so no subscribe link appears on the site.)

---

## VISIBLE — users can see these are incomplete

### Images
- [ ] **Insights article image** (`src/pages/Insights.tsx`) — Article body shows an "Image Placeholder" div (aspect-video). Needs per-article hero/feature image in `src/data/insights` or assets.
- [ ] **Founder headshot** (`src/pages/About.tsx` via `FounderBio`) — Currently uses real image `founder-kelechi-okereke.jpg`. No ImagePlaceholder in use; component supports `imagePlaceholder` prop and About passes an `<img>`.

### Content
- [ ] **Second team member card** (`src/pages/About.tsx`) — "Other Team Members" / "Additional roles (Placeholder)" / placeholder bio. Needs real name, role, and bio from client.
- [ ] **Contact form message when env unset** (`src/components/contact/ContactForm.tsx`) — Text: "Form submission is currently a placeholder. Set VITE_CONTACT_FORM_ENDPOINT…" Shown when env is missing.
- [ ] **Application form message when env unset** (`src/components/careers/ApplicationForm.tsx`) — Text: "Set VITE_APPLICATION_FORM_ENDPOINT to your backend or Formspree URL…" Shown when env is missing.
- [ ] **Contact page "Replace placeholders" text** (`src/pages/Contact.tsx`) — Dev note: "Replace placeholders with real URLs." Remove or replace once Calendly (and any other URLs) are set.
- [ ] **ApplicationForm input placeholders** (`src/components/careers/ApplicationForm.tsx`) — "Kelechi" and "k@sparrowbridge.com" as example placeholders; optional to change to generic copy.

### Links
- [ ] **Featured Insights "Read more"** (`src/pages/Home.tsx`) — Three cards with `href="#"`. Need links to `/insights#<article-id>` or full article URLs.

---

## SILENT — broken but not visibly obvious

### Forms
- [ ] **ContactForm action fallback** (`src/components/contact/ContactForm.tsx`) — When `VITE_CONTACT_FORM_ENDPOINT` is unset, `action={CONTACT_FORM_ENDPOINT || '#'}` so form submits to "#". User sees no error; submission does nothing.
- [ ] **ApplicationForm submit** (`src/components/careers/ApplicationForm.tsx`) — When env unset, `handleSubmit` returns early; form appears to submit but does nothing.

### Links
- [ ] **Calendly link** (`src/pages/Contact.tsx`) — `href="https://calendly.com/placeholder"`. Goes to placeholder URL; needs real scheduling link from client.
- [ ] **Footer LinkedIn** (`src/components/layout/Footer.tsx`) — `href="https://linkedin.com"` is generic. Should be company URL (e.g. `https://www.linkedin.com/company/sparrowbridge`). Contact page already uses real LinkedIn URLs.

---

## CLEANUP — dead code, unused exports, unused props

- [ ] **InsightsLayout** (`src/components/insights/InsightsLayout.tsx`) — Exported from `index.ts`; never imported in any page or component.
- [ ] **InsightsRail** (`src/components/insights/InsightsRail.tsx`) — Exported; never imported (Insights page uses custom layout).
- [ ] **InsightReader** (`src/components/insights/InsightReader.tsx`) — Exported; never imported (Insights uses inline article layout).
- [ ] **InsightsPager** (`src/components/insights/InsightsPager.tsx`) — Exported; never imported.
- [ ] **ConnectCard** (`src/components/contact/ConnectCard.tsx`) — Exported; never imported (Contact has custom Connect block).
- [ ] **GettingStarted** (`src/components/contact/GettingStarted.tsx`) — Exported; never imported.
- [ ] **RoleList** (`src/components/careers/RoleList.tsx`) — Exported; never imported.
- [ ] **RoleCard** (`src/components/careers/RoleCard.tsx`) — Exported; never imported.
- [ ] **CareersPrinciples** (`src/components/careers/CareersPrinciples.tsx`) — Exported; never imported.
- [ ] **ProcessDiagram** (`src/components/patterns/ProcessDiagram.tsx`) — Exported; never imported (Home uses ConsultingProcessDiagram).
- [ ] **TwoColumnLayout** (`src/components/patterns/TwoColumnLayout.tsx`) — Exported; never imported.
- [ ] **ComparisonTable** (`src/components/ui/ComparisonTable.tsx`) — Exported; never imported.
- [ ] **Icon** (`src/components/utility/Icon.tsx`) — Exported; never imported.
- [ ] **ImagePlaceholder** (`src/components/utility/ImagePlaceholder.tsx`) — Exported; never imported (About uses `<img>` in FounderBio `imagePlaceholder` prop, not `<ImagePlaceholder>`).
- [ ] **EmptyState** (`src/components/utility/EmptyState.tsx`) — Used only by RoleList; RoleList is unused, so effectively dead.
- [ ] **SolutionCard** (`src/components/solutions/SolutionCard.tsx`) — Exported; never imported (Solutions uses CaseStudyCard, CardGrid, custom cards).
- [ ] **SolutionsOverviewCard** (`src/components/solutions/SolutionsOverviewCard.tsx`) — Exported; never imported (Solutions uses custom Challenge/Expect divs).
- [ ] **StickyRail** (`src/components/nav/StickyRail.tsx`) — Exported; never imported.
- [ ] **FinePrint** (`src/components/typography/FinePrint.tsx`) — Exported; never imported.

---

## Environment Variables Required

| Variable | File | Controls | Has Fallback | In .env.example |
|---|---|---|---|---|
| `VITE_CONTACT_FORM_ENDPOINT` | `src/components/contact/ContactForm.tsx` | Form POST destination for contact form | Yes (action becomes `#`, submit no-op) | No (.env.example does not exist) |
| `VITE_APPLICATION_FORM_ENDPOINT` | `src/components/careers/ApplicationForm.tsx` | Form POST destination for job applications | No (submit no-op when unset) | No |

---

## Assets Required (not yet in src/assets/)

| Asset | Used In | Description |
|---|---|---|
| (none) | — | Hero and founder images are present: `hero-bg-home.jpg`, `founder-kelechi-okereke.jpg`, `about-landscape.jpg`. |
| Per-article image (optional) | `src/pages/Insights.tsx` | Article body shows "Image Placeholder"; add field to `src/data/insights` and render per article or use a default asset. |

---

## Stock Images Still Needed

| Slot ID | Page | Section | Description | Dimensions |
|---|---|---|---|---|
| STOCK-001 | Insights | Article body | Hero/feature image for each insight article (or one shared default) | aspect-video (16:9) |

---

## Unused / Dead Code

| Item | File | Notes |
|---|---|---|
| InsightReader | `src/components/insights/InsightReader.tsx` | Exported, never used; Insights uses custom inline layout |
| InsightsLayout | `src/components/insights/InsightsLayout.tsx` | Exported, never used |
| InsightsPager | `src/components/insights/InsightsPager.tsx` | Exported, never used |
| InsightsRail | `src/components/insights/InsightsRail.tsx` | Exported, never used. Contains a "Subscribe" link to #subscribe that never appears on the site. |
| ConnectCard | `src/components/contact/ConnectCard.tsx` | Exported, never used |
| GettingStarted | `src/components/contact/GettingStarted.tsx` | Exported, never used |
| RoleList | `src/components/careers/RoleList.tsx` | Exported, never used; uses EmptyState |
| RoleCard | `src/components/careers/RoleCard.tsx` | Exported, never used |
| CareersPrinciples | `src/components/careers/CareersPrinciples.tsx` | Exported, never used |
| ProcessDiagram | `src/components/patterns/ProcessDiagram.tsx` | Exported, never used; Home uses ConsultingProcessDiagram |
| TwoColumnLayout | `src/components/patterns/TwoColumnLayout.tsx` | Exported, never used |
| ComparisonTable | `src/components/ui/ComparisonTable.tsx` | Exported, never used |
| ImagePlaceholder | `src/components/utility/ImagePlaceholder.tsx` | Exported, never used |
| EmptyState | `src/components/utility/EmptyState.tsx` | Used only by RoleList (unused) |
| SolutionCard | `src/components/solutions/SolutionCard.tsx` | Exported, never used |
| SolutionsOverviewCard | `src/components/solutions/SolutionsOverviewCard.tsx` | Exported, never used |
| StickyRail | `src/components/nav/StickyRail.tsx` | Exported, never used |
| FinePrint | `src/components/typography/FinePrint.tsx` | Exported, never used |
