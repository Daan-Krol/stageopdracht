import { XIcon } from "./icons";

interface HowProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HowProgressModal({ isOpen, onClose }: HowProgressModalProps) {
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
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-black sm:text-base">Information</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            <XIcon size={18} />
          </button>
        </div>

        <div className="max-h-[55vh] overflow-y-auto touch-auto">
          <img
            src="/HowprogressIsRecorderPlaceholder.svg"
            alt="How progress is recorded"
            className="w-full"
          />
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
