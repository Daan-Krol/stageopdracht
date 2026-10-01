import { DAYS_PER_GENERATION, LEVEL_INFO } from "@/lib/gameData";


interface DayBubblesProps {
  completedDays: number;
  hasToday: boolean;
  className?: string;
}

function DayBubbles({ completedDays, hasToday, className = "" }: DayBubblesProps) {
  const emptyCount = DAYS_PER_GENERATION - completedDays - (hasToday ? 1 : 0);

  return (
    <div className={`flex justify-center gap-1 ${className}`}>
      {Array.from({ length: completedDays }).map((_, i) => (
        <img
          key={`check-${i}`}
          src="/CheckmarkGreenBubble.svg"
          alt="Completed day"
          className="h-6 w-6"
        />
      ))}

      {hasToday && <img src="/FullGreenBubble.svg" alt="Today" className="h-6 w-6" />}

      {Array.from({ length: emptyCount }).map((_, i) => (
        <img
          key={`empty-${i}`}
          src="/EmptyGreenBubble.svg"
          alt="Upcoming day"
          className="h-6 w-6"
        />
      ))}
    </div>
  );
}

interface CurrentLevelCardProps {
  generation: number;
  achievementDays: number;
  onOpenLevelJourney: () => void;
}

function CurrentLevelCard({
  generation,
  achievementDays,
  onOpenLevelJourney,
}: CurrentLevelCardProps) {
  const daysLeft = DAYS_PER_GENERATION - achievementDays - 1;

  return (
    <div className="rounded-3xl bg-[#FDF3DC] p-3">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-bold text-black">Full Leaves</p>
          <p className="text-sm text-black/60">Your tree is growing</p>
        </div>

        <button
          type="button"
          onClick={onOpenLevelJourney}
          className="flex h-9 w-9 items-center justify-center"
        >
          <img src="/ScrollIcon.svg" alt="Level journey" className="h-16 w-16" />
        </button>
      </div>

      <p className="mt-1 text-center text-sm font-medium text-black">
        Generation {generation} : Achievement Days
      </p>

      <DayBubbles completedDays={achievementDays} hasToday={true} className="mt-1" />

      <p className="mt-1 text-center text-xs text-black/60">
        {daysLeft} More Days To Complete Generation {generation}
      </p>

      <div className="mt-1 flex justify-center">
        <span className="rounded-full border-2 border-[#3FAE8B] px-4 py-2 text-sm font-semibold text-[#3FAE8B]">
          Next Stage: Mature Tree
        </span>
      </div>
    </div>
  );
}

function LockedLevelCard() {
  return (
    <div className="rounded-3xl bg-[#FDF3DC] p-4">
      <div className="flex justify-center">
        <span className="rounded-full border-2 border-[#3FAE8B] px-4 py-1 text-sm font-semibold text-[#3FAE8B]">
          This Level Is Locked
        </span>
      </div>

      <p className="mt-3 text-center text-sm font-medium text-black">Generation 1</p>

      <DayBubbles completedDays={0} hasToday={false} className="mt-3" />

      <button
        type="button"
        className="mt-4 w-full rounded-full bg-[#A9D9C6] py-2 text-sm font-semibold text-white"
      >
        Start Growing This Tree
      </button>
    </div>
  );
}

interface MyTreeTabProps {
  viewedLevel: number;
  level: number;
  generation: number;
  achievementDays: number;
  onOpenLevelJourney: () => void;
}

export default function MyTreeTab({
  viewedLevel,
  level,
  generation,
  achievementDays,
  onOpenLevelJourney,
}: MyTreeTabProps) {
  const viewedInfo = LEVEL_INFO[viewedLevel];
  const isViewingCurrentLevel = viewedLevel === level;

  return (
    <div className="flex w-full flex-col gap-1">
      <div
        className="rounded-3xl px-4 py-3 text-center scale-[0.85]"
        style={{
          backgroundImage: "url(/ButtonRect.svg)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="font-bold text-white">
          Level {viewedLevel} — {viewedInfo.name}
        </p>
        <p className="text-sm text-white/80">Virtual tree · {viewedInfo.species}</p>
      </div>

      {isViewingCurrentLevel ? (
        <CurrentLevelCard
          generation={generation}
          achievementDays={achievementDays}
          onOpenLevelJourney={onOpenLevelJourney}
        />
      ) : (
        <LockedLevelCard />
      )}
    </div>
  );
}
