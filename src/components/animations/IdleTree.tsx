interface IdleTreeProps {
  children: React.ReactNode;
}

// Wraps anything (usually an image) in a slow, wind-like sway. Reusable —
// if you swap the tree image for a different one, nothing here needs to
// change, just keep wrapping whatever <img> you're using.
export default function IdleTree({ children }: IdleTreeProps) {
  return (
    <div className="idle-tree inline-block">
      {children}

      <style jsx>{`
        .idle-tree {
          transform-origin: bottom center;

          animation: idle-sway 6s cubic-bezier(.49,.02,.56,1.01) infinite;
        }

      @keyframes idle-sway {
        0%,
        100% {
          transform: rotate(-2deg);
        }
        50% {
          transform: rotate(2deg);
        }
      }

      `}</style>
    </div>
  );
}