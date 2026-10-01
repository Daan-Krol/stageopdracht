import { CheckIcon, PlusIcon } from "./icons";

const RING_RADIUS = 42;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

interface CircularStatProps {
  label: string;
  value: number;
  goal: number;
  unitSuffix: string;
  icon: React.ReactNode;
  iconBg: string;
}

export default function CircularStat({
  label,
  value,
  goal,
  unitSuffix,
  icon,
  iconBg,
}: CircularStatProps) {
  const achieved = value >= goal;
  const progress = Math.min(value / goal, 1);
  const dashOffset = RING_CIRCUMFERENCE * (1 - progress);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative h-20 w-20">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={RING_RADIUS} fill="none" stroke="#E7E2D6" strokeWidth={7} />
          <circle
            cx="50"
            cy="50"
            r={RING_RADIUS}
            fill="none"
            stroke="#3FAE8B"
            strokeWidth={7}
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            style={{ transition: "stroke-dashoffset 0.3s ease" }}
          />
        </svg>

        <div
          className="absolute inset-2 flex items-center justify-center rounded-full"
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>

        <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#F5A623]">
          {achieved ? <CheckIcon size={12} /> : <PlusIcon size={12} />}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold text-white">{label}</h2>
        <p className="text-sm text-white/90">
          {value}/{goal}{unitSuffix}
        </p>
      </div>

      <img
        src={achieved ? "/AchievedTag.svg" : "/ProgressTag.svg"}
        alt={achieved ? "Achieved" : "On Progress"}
        className="h-auto w-auto"
      />
    </div>
  );
}
