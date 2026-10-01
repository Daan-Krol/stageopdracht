import IdleTree from "@/components/animations/IdleTree";
import { MAX_LEVEL } from "@/lib/gameData";

interface TreeSceneProps {
  viewedLevel: number;
  level: number;
  generation: number;
  showArrows: boolean;
  onPrevLevel: () => void;
  onNextLevel: () => void;
}

export default function TreeScene({
  viewedLevel,
  level,
  generation,
  showArrows,
  onPrevLevel,
  onNextLevel,
}: TreeSceneProps) {

  const treeStage =
    viewedLevel === level ? generation : viewedLevel > level ? 0 : 7;

  return (
    <>
      <div
        className="pointer-events-none fixed left-1/2 w-fit -translate-x-1/2"
        style={{ height: "57vh", bottom: "31vh" }}
      >
        <IdleTree>
          <img
            src={`/Trees/${viewedLevel}/${treeStage}.svg`}
            alt=""
            className="h-[46vh] w-auto"
          />
        </IdleTree>
      </div>

      {showArrows && viewedLevel > 1 && (
        <button
          type="button"
          onClick={onPrevLevel}
          className="fixed left-1/2 z-40 -translate-x-[170px] rotate-180"
          style={{ bottom: "55vh" }}
        >
          <img src="/ArrowWhiteButton.svg" alt="Previous level" className="h-10 w-10" />
        </button>
      )}

      {showArrows && viewedLevel < MAX_LEVEL && (
        <button
          type="button"
          onClick={onNextLevel}
          className="fixed left-1/2 z-40 translate-x-[130px]"
          style={{ bottom: "55vh" }}
        >
          <img src="/ArrowWhiteButton.svg" alt="Next level" className="h-10 w-10" />
        </button>
      )}

      <img
        src="/terrain.png"
        alt=""
        className="pointer-events-none fixed bottom-0 left-0 h-[46vh] w-full object-cover object-top"
      />
    </>
  );
}
