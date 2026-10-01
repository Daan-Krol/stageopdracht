import { XIcon } from "./icons";

const LEVELS = [
  { number: 1, title: "Level 1 · Tunas Harapan", subtitle: "Sengon" },
  { number: 2, title: "Level 2 · Sang Perintis", subtitle: "Jati" },
  { number: 3, title: "Level 3 · Penyaring Alam", subtitle: "Mahogany" },
  { number: 4, title: "Level 4 · Penjaga Air", subtitle: "Banyan" },
  { number: 5, title: "Level 5 · Pohon Kehidupan", subtitle: "Sea Hibiscus" },
  { number: 6, title: "Level 6 · Sang Pemberi Nafas", subtitle: "Eucalyptus" },
  { number: 7, title: "Level 7 · Penjaga Bumi", subtitle: "Trembesi" },
];

interface LevelJourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  level: number;
}

export default function LevelJourneyModal({ isOpen, onClose, level }: LevelJourneyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-3xl bg-white p-5 shadow-xl sm:max-w-xs sm:p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-1 flex items-center justify-between">
          <h2 className="text-lg font-bold text-black sm:text-base">Level Journey</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            <XIcon size={18} />
          </button>
        </div>

        <p className="mb-4 text-sm text-gray-400 sm:text-xs">
          Complete Each Tree Level To Unlock Its Contribution
        </p>

        <div className="flex flex-col gap-1.5">
          {LEVELS.map((lvl) => {
            const isAchieved = lvl.number < level;
            const isCurrent = lvl.number === level;
            const isLocked = lvl.number > level;

            return (
              <div
                key={lvl.number}
                className="flex items-center justify-between rounded-2xl border border-gray-100 px-3 py-1.5"
              >
                <div className="flex items-center gap-3 sm:gap-2">
                  <img src="/SengonIcon.svg" alt="" className="h-8 w-8 sm:h-7 sm:w-7" />
                  <div>
                    <p className="text-sm font-semibold text-black">{lvl.title}</p>
                    <p className="text-xs text-gray-400">{lvl.subtitle}</p>
                  </div>
                </div>

                {isAchieved && (
                 <img src="/AchievedTag.svg" alt="" className="h-10 w-16" />
                )}

                {isCurrent && (
                  <img src="/CurrentTag.svg" alt="" className="h-10 w-16" />
                )}

                {isLocked && (
                  <img src="/LockedTag.svg" alt="" className="h-10 w-16" />
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-2xl bg-[#F5A623] py-3 font-semibold text-white hover:bg-[#e69a1d] sm:mt-4 sm:py-2 sm:text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}
