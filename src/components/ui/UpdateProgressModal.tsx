import {
  WaterDropIcon,
  RunningIcon,
  MoonIcon,
  CheckIcon,
  PlusIcon,
  MinusIcon,
  XIcon,
  HourglassIcon,
} from "./icons";

function formatNumber(n: number) {
  return n.toLocaleString("id-ID");
}

interface ProgressRowProps {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  subtitle: string;
  value: number;
  goal: number;
  step: number;
  unitLabel: string;
  pillLabel: string;
  onChange: (newValue: number) => void;
}

function ProgressRow({
  icon,
  iconBg,
  label,
  subtitle,
  value,
  goal,
  step,
  unitLabel,
  pillLabel,
  onChange,
}: ProgressRowProps) {
  const achieved = value >= goal;
  const progressPercent = Math.min(value / goal, 1) * 100;

  return (
    <div className="rounded-2xl border border-gray-100 p-4 shadow-sm sm:p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-2">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full sm:h-8 sm:w-8"
            style={{ backgroundColor: iconBg }}
          >
            {icon}
          </div>
          <div>
            <p className="font-semibold text-black sm:text-sm">{label}</p>
            <p className="text-xs text-gray-400">{subtitle}</p>
          </div>
        </div>

        {achieved ? (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3FAE8B] sm:h-5 sm:w-5">
            <CheckIcon size={12} color="white" />
          </div>
        ) : (
          <HourglassIcon size={18} />
        )}
      </div>

      <div className="mt-3 flex items-baseline gap-1 sm:mt-2">
        <span className="text-2xl font-bold text-black sm:text-lg">{formatNumber(value)}</span>
        <span className="text-sm text-gray-400 sm:text-xs">
          / {formatNumber(goal)} {unitLabel}
        </span>
      </div>

      <div className="mt-2 h-2 w-full rounded-full bg-gray-100">
        <div
          className="h-2 rounded-full bg-[#3FAE8B] transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="mt-3 flex w-fit items-center gap-3 rounded-full bg-[#FDF3DC] px-2 py-1 sm:mt-2 sm:gap-2">
        <button
          onClick={() => onChange(Math.max(value - step, 0))}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white hover:bg-gray-50 sm:h-6 sm:w-6"
        >
          <MinusIcon size={14} color="black" />
        </button>

        <span className="min-w-[3rem] text-center font-medium text-black sm:text-sm">
          {value}{pillLabel}
        </span>

        <button
          onClick={() => onChange(Math.min(value + step, goal))}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white hover:bg-gray-50 sm:h-6 sm:w-6"
        >
          <PlusIcon size={14} color="black" />
        </button>
      </div>
    </div>
  );
}

interface UpdateProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  water: number;
  waterGoal: number;
  onWaterChange: (newValue: number) => void;
  exercise: number;
  exerciseGoal: number;
  onExerciseChange: (newValue: number) => void;
  rest: number;
  restGoal: number;
  onRestChange: (newValue: number) => void;
}

export default function UpdateProgressModal({
  isOpen,
  onClose,
  water,
  waterGoal,
  onWaterChange,
  exercise,
  exerciseGoal,
  onExerciseChange,
  rest,
  restGoal,
  onRestChange,
}: UpdateProgressModalProps) {
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
        <div className="mb-4 flex items-center justify-between sm:mb-3">
          <h2 className="text-lg font-bold text-black sm:text-base">Update Progress</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            <XIcon size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-4 sm:gap-3">
          <ProgressRow
            icon={<WaterDropIcon size={20} />}
            iconBg="#EAF6FC"
            label="Water"
            subtitle="Body Hydration Goal"
            value={water}
            goal={waterGoal}
            step={50}
            unitLabel="ml"
            pillLabel="ml"
            onChange={onWaterChange}
          />

          <ProgressRow
            icon={<RunningIcon size={20} />}
            iconBg="#FDEEE3"
            label="Exercise"
            subtitle="Daily physical activity"
            value={exercise}
            goal={exerciseGoal}
            step={5}
            unitLabel="minute"
            pillLabel="mnt"
            onChange={onExerciseChange}
          />

          <ProgressRow
            icon={<MoonIcon size={20} />}
            iconBg="#ECEAF7"
            label="Rest"
            subtitle="Optimal sleep quality"
            value={rest}
            goal={restGoal}
            step={1}
            unitLabel="hours"
            pillLabel="hr"
            onChange={onRestChange}
          />
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-2xl bg-[#F5A623] py-3 font-semibold text-white hover:bg-[#e69a1d] sm:mt-4 sm:py-2 sm:text-sm"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
