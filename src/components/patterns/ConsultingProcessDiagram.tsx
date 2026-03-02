import React, { useState, useEffect, useRef } from 'react';

interface Segment {
  lines: string[];
  label: string;
  tooltip: string;
}

const SEGMENTS: Segment[] = [
  {
    lines: ['EXPLORATION'],
    label: 'EXPLORATION',
    tooltip: 'Initial discovery of your problem or opportunity.',
  },
  {
    lines: ['DIAGNOSE'],
    label: 'DIAGNOSE',
    tooltip: 'In-depth data collection and root-cause analysis.',
  },
  {
    lines: ['CO-DESIGN'],
    label: 'CO-DESIGN',
    tooltip: 'Strategy phase. Build alignment through participation.',
  },
  {
    lines: ['EXECUTIVE', 'COACHING'],
    label: 'EXECUTIVE COACHING',
    tooltip: 'Thought partnership throughout the change process.',
  },
  {
    lines: ['IMPLEMENT'],
    label: 'IMPLEMENT',
    tooltip: 'Integration phase. Move through resistance to embed sustainable practices.',
  },
  {
    lines: ['ASSESS'],
    label: 'ASSESS',
    tooltip: 'Measure progress, learn, and iterate.',
  },
];

// Tooltip positions keyed by segment index, anchored away from outer edge
const TOOLTIP_POSITIONS: React.CSSProperties[] = [
  { top: '10%', right: '2%' },    // 0: EXPLORATION  (upper-right)
  { top: '36%', right: '2%' },    // 1: DIAGNOSE     (right)
  { bottom: '10%', right: '2%' }, // 2: CO-DESIGN    (lower-right)
  { bottom: '10%', left: '2%' },  // 3: EXEC COACHING (lower-left)
  { top: '36%', left: '2%' },     // 4: IMPLEMENT    (left)
  { top: '10%', left: '2%' },     // 5: ASSESS       (upper-left)
];

const CX = 200;
const CY = 200;
const OUTER_R = 190;
const INNER_R = 80;
const LABEL_R = (OUTER_R + INNER_R) / 2; // 135

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function getSegmentPath(i: number): string {
  const startDeg = i * 60 - 90;
  const endDeg = startDeg + 60;
  const sRad = degToRad(startDeg);
  const eRad = degToRad(endDeg);

  const x1 = CX + OUTER_R * Math.cos(sRad);
  const y1 = CY + OUTER_R * Math.sin(sRad);
  const x2 = CX + OUTER_R * Math.cos(eRad);
  const y2 = CY + OUTER_R * Math.sin(eRad);
  const x3 = CX + INNER_R * Math.cos(eRad);
  const y3 = CY + INNER_R * Math.sin(eRad);
  const x4 = CX + INNER_R * Math.cos(sRad);
  const y4 = CY + INNER_R * Math.sin(sRad);

  return `M ${x1} ${y1} A ${OUTER_R} ${OUTER_R} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${INNER_R} ${INNER_R} 0 0 0 ${x4} ${y4} Z`;
}

function getLabelPos(i: number): { x: number; y: number } {
  const midRad = degToRad(i * 60 - 90 + 30);
  return {
    x: CX + LABEL_R * Math.cos(midRad),
    y: CY + LABEL_R * Math.sin(midRad),
  };
}

// 0-indexed: 0,2,4 → P palette; 1,3,5 → A1 palette
function getSegmentFill(i: number, hovered: boolean): string {
  if (i % 2 === 0) return hovered ? '#364861' : '#4A6080';
  return hovered ? '#636B2F' : '#7A8540';
}

export const ConsultingProcessDiagram: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const handleTouchOutside = (e: TouchEvent) => {
      const target = e.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) setActiveSegment(null);
    };
    document.addEventListener('touchstart', handleTouchOutside);
    return () => document.removeEventListener('touchstart', handleTouchOutside);
  }, []);

  const pathTransition = prefersReducedMotion ? 'none' : 'fill 0.2s ease';

  return (
    <div ref={containerRef} className="relative w-full aspect-square">
      <svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="SparrowBridge consulting process wheel"
      >
        {SEGMENTS.map((seg, i) => {
          const { x, y } = getLabelPos(i);
          const isHovered = hovered === i;
          const isActive = isHovered || activeSegment === seg.label;
          const tooltipId = `diagram-tooltip-${i}`;

          return (
            <g
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setActiveSegment(prev => (prev === seg.label ? null : seg.label))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveSegment(prev => (prev === seg.label ? null : seg.label));
                }
              }}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              aria-label={seg.label}
              aria-describedby={isActive ? tooltipId : undefined}
            >
              <path
                d={getSegmentPath(i)}
                style={{
                  fill: getSegmentFill(i, isActive),
                  stroke: '#ffffff',
                  strokeWidth: 2,
                  transition: pathTransition,
                }}
              />
              <text
                textAnchor="middle"
                style={{
                  fill: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.4px',
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                {seg.lines.length === 1 ? (
                  <tspan x={x} y={y} dominantBaseline="middle">
                    {seg.lines[0]}
                  </tspan>
                ) : (
                  <>
                    <tspan x={x} y={y - 7} dominantBaseline="middle">
                      {seg.lines[0]}
                    </tspan>
                    <tspan x={x} y={y + 7} dominantBaseline="middle">
                      {seg.lines[1]}
                    </tspan>
                  </>
                )}
              </text>
            </g>
          );
        })}

        {/* Center hub */}
        <circle cx={CX} cy={CY} r={INNER_R - 4} style={{ fill: '#364861' }} />
        <text
          textAnchor="middle"
          style={{
            fill: '#ffffff',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.3px',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <tspan x={CX} y={CY - 7} dominantBaseline="middle">
            SparrowBridge
          </tspan>
          <tspan x={CX} y={CY + 7} dominantBaseline="middle">
            Process
          </tspan>
        </text>
      </svg>

      {/* Tooltip (hover or tap) */}
      {SEGMENTS.map((seg, i) => {
        const isActive = hovered === i || activeSegment === seg.label;
        if (!isActive) return null;
        return (
          <div
            key={i}
            id={`diagram-tooltip-${i}`}
            role="tooltip"
            className="absolute z-10 max-w-[200px] p-3 bg-white border border-P rounded-card shadow-lg pointer-events-none"
            style={TOOLTIP_POSITIONS[i]}
          >
            <p className="font-h text-[13px] font-extrabold text-P mb-1 leading-tight">
              {seg.label}
            </p>
            <p className="font-b text-[14px] text-P/75 leading-[1.5]">
              {seg.tooltip}
            </p>
          </div>
        );
      })}
    </div>
  );
};
