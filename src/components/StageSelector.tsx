"use client";

import { baseStages } from "@/lib/conversation";
import { useConversationStore } from "@/store/useConversationStore";
import clsx from "clsx";

export function StageSelector() {
  const primaryStage = useConversationStore((state) => state.primaryStage);
  const setPrimaryStage = useConversationStore((state) => state.setPrimaryStage);

  const interactiveStages = baseStages.filter(
    (stage) =>
      stage.key === "greeting" || stage.key === "introduction" || stage.key === "qualify" || stage.key === "follow-up"
  );

  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-inner shadow-slate-100 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold text-midnight">Core Flow</p>
        <p className="text-xs text-slate-500">Pick where you are in the conversation.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {interactiveStages.map((stage) => {
          const isActive = stage.key === primaryStage;
          return (
            <button
              key={stage.key}
              type="button"
              onClick={() => setPrimaryStage(stage.key)}
              className={clsx(
                "rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean/50",
                isActive
                  ? "border-ocean/10 bg-ocean text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-ocean/30"
              )}
            >
              {stage.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
