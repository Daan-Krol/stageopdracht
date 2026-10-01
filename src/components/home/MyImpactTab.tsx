interface MyImpactTabProps {
  onOpenGuidebook: () => void;
}

function TbdRow({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-between text-sm ${className}`}>
      <span className="text-black/60">{label}</span>
      <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs text-black/60">
        To Be Determined
      </span>
    </div>
  );
}

export default function MyImpactTab({ onOpenGuidebook }: MyImpactTabProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center rounded-3xl bg-[#FDF3DC] px-4 py-1">
        <p className="text-sm font-semibold text-black/60">
          1 More Level To Your Next Tree Contribution.
        </p>
      </div>

      <div className="rounded-3xl bg-[#FDF3DC] p-3">
        <div className="flex items-start justify-between">
          <p className="font-bold text-[#3FAE8B]">Tree Contribution: 2</p>

          <button
            type="button"
            onClick={onOpenGuidebook}
            className="flex h-8 w-8 items-center justify-center"
          >
            <img src="/GuidebookIcon.svg" alt="Guidebook" className="h-24 w-24" />
          </button>
        </div>

        <TbdRow label="Total Contribution Value" className="mt-1" />
        <TbdRow label="Contribution value" className="mt-1" />

        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-black/60">Partner</span>
          <span className="flex items-center gap-1 text-black">
            <span className="h-2 w-2 rounded-full bg-[#3FAE8B]" />
            Yayasan KEHATI
          </span>
        </div>

        <button
          type="button"
          className="mt-1 w-full rounded-full bg-[#3FAE8B] py-1 text-sm font-semibold text-white"
        >
          View Contribution History →
        </button>

        <p className="mt-1 text-center text-xs text-black/50">
          A Tree Contribution is an environmental contribution made on your
          behalf — not a cash reward.
        </p>
      </div>
    </div>
  );
}
