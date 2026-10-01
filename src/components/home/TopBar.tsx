import Link from "next/link";
import type { TabOption } from "@/lib/gameData";

const TABS: { label: TabOption; icon: string }[] = [
  { label: "Daily", icon: "/DailyButton.svg" },
  { label: "My Tree", icon: "/MyTreeButton.svg" },
  { label: "My Impact", icon: "/MyImpactButton.svg" },
];

interface TopBarProps {
  selectedTab: TabOption;
  onSelectTab: (tab: TabOption) => void;
}

export default function TopBar({
  selectedTab,
  onSelectTab,
}: TopBarProps) {
  return (
    <>
      <div className="fixed left-1/2 top-2 z-50 flex -translate-x-1/2 gap-2 scale-[0.9]">
        {TABS.map((tab) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => onSelectTab(tab.label)}
            className={selectedTab === tab.label ? "opacity-100" : "opacity-70"}
          >
            <img src={tab.icon} alt={tab.label} />
          </button>
        ))}
      </div>
    </>
  );
}
