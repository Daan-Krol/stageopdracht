"use client";

import { useState } from "react";
import {
  WATER_GOAL,
  REST_GOAL,
  EXERCISE_GOAL,
  type TabOption,
} from "@/lib/gameData";

import TopBar from "@/components/home/TopBar";
import TreeScene from "@/components/home/TreeScene";
import DailyTab from "@/components/home/DailyTab";
import MyTreeTab from "@/components/home/MyTreeTab";
import MyImpactTab from "@/components/home/MyImpactTab";

import UpdateProgressModal from "@/components/ui/UpdateProgressModal";
import LevelJourneyModal from "@/components/ui/LevelJourneyModal";
import GuidebookModal from "@/components/ui/GuidebookModal";
import { usePlayerData } from "@/hooks/usePlayerData";

const generation = 5;
const level = 4;
const achievementDays = 4;

type ModalName = "progress" | "levelJourney" | "guidebook" | "history" | null;

export default function Home() {
  const { water, exercise, rest, updateWater, updateExercise, updateRest } =
    usePlayerData();

  const [selectedTab, setSelectedTab] = useState<TabOption>("Daily");
  const [viewedLevel, setViewedLevel] = useState(level);

  const [openModal, setOpenModal] = useState<ModalName>(null);
  const closeModal = () => setOpenModal(null);

  function handleSelectTab(tab: TabOption) {
    setSelectedTab(tab);
    if (tab !== "My Tree") setViewedLevel(level);
  }

  return (
    <main
      className="relative h-dvh overflow-hidden bg-cover bg-center bg-fixed text-black touch-none"
      style={{
        backgroundImage:
          selectedTab === "My Impact"
            ? "url(/TreeBackground2.png)"
            : `url(/background.png)`,
      }}
    >
      <TopBar
        selectedTab={selectedTab}
        onSelectTab={handleSelectTab}
      />

      <TreeScene
        viewedLevel={viewedLevel}
        level={level}
        generation={generation}
        showArrows={selectedTab === "My Tree"}
        onPrevLevel={() => setViewedLevel(viewedLevel - 1)}
        onNextLevel={() => setViewedLevel(viewedLevel + 1)}
      />

      <div
        className="fixed left-1/2 z-50 flex w-[90vw] max-w-sm -translate-x-1/2 flex-col items-center gap-1"
        style={{ bottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        {selectedTab === "Daily" && (
          <DailyTab
            generation={generation}
            level={level}
            water={water}
            exercise={exercise}
            rest={rest}
            onOpenEdit={() => setOpenModal("progress")}
          />
        )}

        {selectedTab === "My Tree" && (
          <MyTreeTab
            viewedLevel={viewedLevel}
            level={level}
            generation={generation}
            achievementDays={achievementDays}
            onOpenLevelJourney={() => setOpenModal("levelJourney")}
          />
        )}

        {selectedTab === "My Impact" && (
          <MyImpactTab onOpenGuidebook={() => setOpenModal("guidebook")} />
        )}
      </div>

      <UpdateProgressModal
        isOpen={openModal === "progress"}
        onClose={closeModal}
        water={water}
        waterGoal={WATER_GOAL}
        onWaterChange={updateWater}
        exercise={exercise}
        exerciseGoal={EXERCISE_GOAL}
        onExerciseChange={updateExercise}
        rest={rest}
        restGoal={REST_GOAL}
        onRestChange={updateRest}
      />

      <LevelJourneyModal
        isOpen={openModal === "levelJourney"}
        onClose={closeModal}
        level={level}
      />

      <GuidebookModal isOpen={openModal === "guidebook"} onClose={closeModal} />
    </main>
  );
}