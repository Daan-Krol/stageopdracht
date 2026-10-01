// Small, dependency-free icon components.
// Kept in one file so CircularStat.tsx and UpdateProgressModal.tsx can both use them
// without copy-pasting the same SVG code twice.

export function WaterDropIcon({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#4FB6E8">
      <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0 0 14 0C19 10.5 12 2 12 2z" />
    </svg>
  );
}

export function RunningIcon({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#F2994A">
      <path
        d="M13.49,5.48c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S12.39,5.48,13.49,5.48z M9.89,19.38l1-4.4l2.1,2v6h2v-7.5
        l-2.1-2l0.6-3c1.3,1.5,3.3,2.5,5.5,2.5v-2c-1.9,0-3.5-1-4.3-2.4l-1-1.6c-0.4-0.6-1-1-1.7-1c-0.3,0-0.5,0.1-0.8,0.1l-5.2,2.2v4.7h2
        v-3.4l1.8-0.7l-1.6,8.1l-4.9-1l-0.4,2L9.89,19.38z"
      />
    </svg>
  );
}

export function MoonIcon({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#4B4785">
      <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 1 0 20.354 15.354z" />
    </svg>
  );
}

export function CheckIcon({ size = 16, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke={color} strokeWidth={3} fill="none">
      <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon({ size = 16, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke={color} strokeWidth={3} fill="none">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MinusIcon({ size = 16, color = "white" }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke={color} strokeWidth={3} fill="none">
      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function XIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke={color} strokeWidth={2} fill="none">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Gray outline hourglass — shown next to a stat row when the goal hasn't been reached yet.
export function HourglassIcon({ size = 18, color = "#9CA3AF" }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke={color} strokeWidth={2} fill="none">
      <path
        d="M6 2h12M6 22h12M7 2c0 5 4 6 5 8-1 2-5 3-5 8M17 2c0 5-4 6-5 8 1 2 5 3 5 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
