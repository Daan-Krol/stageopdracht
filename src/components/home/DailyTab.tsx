import CircularStat from "@/components/ui/CircularStat";
import { WaterDropIcon, RunningIcon, MoonIcon } from "@/components/ui/icons";
import { WATER_GOAL, REST_GOAL, EXERCISE_GOAL } from "@/lib/gameData";
import { DAYS_PER_GENERATION, LEVEL_INFO } from "@/lib/gameData";

interface DayBubblesProps {
  completedDays: number;
  hasToday: boolean;
  className?: string;
}

function DayBubbles({ completedDays, hasToday, className = "" }: DayBubblesProps) {
  const emptyCount = DAYS_PER_GENERATION - completedDays - (hasToday ? 1 : 0);

  return (
    <div className={`flex justify-center gap-2 ${className}`}>
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

interface DailyTabProps {
  generation: number;
  level: number;
  water: number;
  exercise: number;
  rest: number;
  onOpenEdit: () => void;
}

export default function DailyTab({
  generation,
  level,
  water,
  exercise,
  rest,
  onOpenEdit,
}: DailyTabProps) {
  const stats = [
    {
      label: "Water",
      value: water,
      goal: WATER_GOAL,
      unitSuffix: "ml",
      icon: <WaterDropIcon size={40} />,
    },
    {
      label: "Exercise",
      value: exercise,
      goal: EXERCISE_GOAL,
      unitSuffix: " Minutes",
      icon: <RunningIcon size={40} />,
    },
    {
      label: "Rest",
      value: rest,
      goal: REST_GOAL,
      unitSuffix: " Hours",
      icon: <MoonIcon size={40} />,
    },
  ];

  return (
    <>
      <div className="relative rounded-4xl bg-white px-4 py-3">
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3FAE8B] px-4 py-1 text-xs font-semibold text-white">
          Generation {generation}
        </div>
        <DayBubbles
          completedDays={level-1}hasToday={true} className="mt-1"/>
      </div>

      <button
        type="button"
        onClick={onOpenEdit}
        className="flex flex-row justify-center gap-3"
      >
        {stats.map((stat) => (
          <CircularStat key={stat.label} {...stat} iconBg="#FDF3DC" />
        ))}
      </button>
    </>
  );
}
