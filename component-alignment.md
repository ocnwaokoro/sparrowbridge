# Component Alignment Audit: SparrowBridge v2

This document tracks the alignment between the original `@sparrowbridge-tailwind` HTML implementation and the new `@sparrowbridge-v2` React component library.

## 1. Layout & App-Level Components
| Component | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| `SiteHeader` | ✅ Aligned | All | Includes sticky behavior, mobile toggle, and active state. |
| `PageShell` | ✅ Aligned | All | Main wrapper with font/color defaults. |
| `Container` | ✅ Aligned | All | Max-width 1440px + horizontal padding. |
| `Footer` | ✅ Aligned | All | Multi-column layout with social/legal links. |

## 2. Typography Primitives
| Component | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| `Kicker` | ✅ Aligned | Hero, Insights | Uppercase, tracked label. |
| `PageTitle` | ✅ Aligned | Hero | H1 with responsive sizing. |
| `SectionTitle` | ✅ Aligned | Sections | H2/H3 with alignment options. |
| `BodyText` | ✅ Aligned | All | Standard and large paragraph variants. |
| `FinePrint` | ✅ Aligned | Footer, Forms | Small muted text. |
| `Prose` | ✅ Aligned | Insights | Long-form content styling. |

## 3. UI Primitives
| Component | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| `Button` | ✅ Aligned | All | Primary, secondary, inverse, ghost variants. |
| `Card` | ✅ Aligned | All | Base wrapper with border/radius. |
| `CardHeader` | ✅ Aligned | All | Header strip variant. |
| `CardTitle` | ✅ Aligned | All | Strong header text. |
| `CardBody` | ✅ Aligned | All | Padding/spacing container. |
| `Badge` | ✅ Aligned | Solutions, Team | Tag/Pill variants. |
| `Divider` | ✅ Aligned | All | Horizontal/Vertical separators. |
| `Testimonial` | ✅ Aligned | Homepage | Quote block with attribution. |
| `ComparisonTable`| ✅ Aligned | Homepage | Implemented for "Challenges" section. |

## 4. Structural / Pattern Components
| Component | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| `Hero` | ✅ Aligned | All | Flexible hero with 2-col support. |
| `TwoColumnLayout`| ✅ Aligned | Solutions | Rail + Main content layout. |
| `CardGrid` | ✅ Aligned | All | Responsive grid for cards. |
| `ProcessDiagram` | ✅ Aligned | Homepage | Specific layout for Engagement/Process steps. |

## 5. Navigation & Rail Components
| Component | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| `StickyRail` | ✅ Aligned | Solutions | Sticky container with header offset. |
| `RailSection` | ✅ Aligned | Solutions | Grouped rail blocks. |
| `RailLink` | ✅ Aligned | Solutions | Active state support. |

## 6. Homepage-Specific Components
| Component | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| `HeroValueList` | ✅ Aligned | Homepage | Inline verbs list. |
| `ValuePropCard` | ✅ Aligned | Homepage | Hero aside benefit cards. |
| `CTAInline` | ✅ Aligned | All | Bottom-of-page CTA band. |

## 7. Solutions Page Components
| Component | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| `SolutionsOverviewCard`| ✅ Aligned | Solutions | Hero right-side list. |
| `SolutionCard` | ✅ Aligned | Solutions | Detailed solution block. |
| `SolutionCriteriaList`| ✅ Aligned | Solutions | Bullet list block. |
| `CaseStudyCard` | ✅ Aligned | All | Supports color accents and images. |

## 8. Insights Page Components
| Component | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| `InsightsLayout` | ✅ Aligned | Insights | Specific 2-col reader layout. |
| `InsightsRail` | ✅ Aligned | Insights | Category + Newsletter sidebar. |
| `InsightReader` | ✅ Aligned | Insights | Full article layout. |
| `InsightsPager` | ✅ Aligned | Insights | Prev/Next navigation. |

## 9. Contact Page Components
| Component | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| `ConnectCard` | ✅ Aligned | Contact | Social/Booking links. |
| `ConnectRow` | ✅ Aligned | Contact | Single row with icon. |
| `GettingStarted` | ✅ Aligned | Contact | Step-by-step grid. |
| `StepCard` | ✅ Aligned | Contact | Numbered step card. |
| `ContactForm` | ✅ Aligned | Contact | Full form implementation. |
| `FormField` | ✅ Aligned | Contact | Label/Input wrapper. |

## 10. Careers Page Components
| Component | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| `RoleList` | ✅ Aligned | Careers | Open roles container. |
| `RoleCard` | ✅ Aligned | Careers | Individual job card. |
| `CareersPrinciples`| ✅ Aligned | Careers | Standard card grid for values. |
| `ApplicationForm` | ✅ Aligned | Careers | Specialized careers application form. |

## 11. About Page Components (New)
| Component | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| `TeamMemberCard` | ✅ Aligned | About | For team member bios. |
| `FounderBio` | ✅ Aligned | About | Specific layout for Kelechi's story. |
| `ValueCard` | ✅ Aligned | About | Vision/Mission/Purpose/Careers values. |

## 12. Utility / Support Components
| Component | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| `Icon` | ✅ Aligned | All | SVG wrapper. |
| `ImagePlaceholder` | ✅ Aligned | All | Aspect-ratio placeholder. |
| `EmptyState` | ✅ Aligned | All | Content unavailable state. |

---

## 13. Pages Implementation
| Page | Status | Source | Notes |
| :--- | :--- | :--- | :--- |
| `Home` | ✅ Assembled | `homepage.html` | Full assembly with all homepage-specific logic. |
| `About` | ✅ Assembled | `about.html` | Includes Team and Founder sections. |
| `Solutions` | ✅ Assembled | `solutions.html` | Sticky sidebar and solution detail blocks. |
| `Insights` | ✅ Assembled | `insights.html` | State-based article reader included. |
| `Contact` | ✅ Assembled | `contact.html` | Hero with sidebar and full form. |
| `Careers` | ✅ Assembled | `careers.html` | Value blocks and specialized application form. |

---

## Action Items
1. [x] Implement `ComparisonTable` for homepage Challenges section.
2. [x] Implement `ProcessStep` and `ProcessDiagram` for homepage.
3. [x] Implement `TeamMemberCard` for about/team page.
4. [x] Implement `FounderBio` for about page.
5. [x] Implement `ValueCard` for Vision/Mission/Purpose blocks.
6. [x] Refine `ContactForm` or add `ApplicationForm` for careers.
7. [x] Ensure `CaseStudyCard` supports both solid color and image backgrounds.
8. [x] Assemble all pages using components.
