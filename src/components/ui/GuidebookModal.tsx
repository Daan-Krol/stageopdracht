import { useState } from "react";
import { XIcon } from "./icons";

interface GuidebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type GuideTab = "What It Means" | "How It Works";

export default function GuidebookModal({ isOpen, onClose }: GuidebookModalProps) {
  const [tab, setTab] = useState<GuideTab>("What It Means");

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
          <h2 className="text-lg font-bold text-black sm:text-base">Guidebook</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            <XIcon size={18} />
          </button>
        </div>

        <div className="mb-4 flex rounded-full bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => setTab("What It Means")}
            className={
              "flex-1 rounded-full py-2 text-xs font-semibold sm:text-[11px] " +
              (tab === "What It Means" ? "bg-[#3FAE8B] text-white" : "text-gray-500")
            }
          >
            What It Means
          </button>
          <button
            type="button"
            onClick={() => setTab("How It Works")}
            className={
              "flex-1 rounded-full py-2 text-xs font-semibold sm:text-[11px] " +
              (tab === "How It Works" ? "bg-[#3FAE8B] text-white" : "text-gray-500")
            }
          >
            How It Works
          </button>
        </div>

        <div>
          {tab === "What It Means" ? (
            <div>
              <img src="/WhatItMeansPlaceholder.svg" alt="What it means" className="w-full" />
              <p className="mt-3 text-xs text-gray-400">
                Your virtual tree shows your Tree progress. The real-world contribution may use a different tree species or an equivalent conservation mechanism.
              </p>
            </div>
          ) : (
            <img src="/HowItWorksPlaceholder.svg" alt="How it works" className="w-full" />
          )}
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
