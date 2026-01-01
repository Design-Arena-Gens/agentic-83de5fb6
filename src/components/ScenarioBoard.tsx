"use client";

import { scenarioLookup, scenarioOrder } from "@/lib/conversation";
import { useConversationStore } from "@/store/useConversationStore";
import clsx from "clsx";

export function ScenarioBoard() {
  const scenarioStage = useConversationStore((state) => state.scenarioStage);
  const pickScenario = useConversationStore((state) => state.pickScenario);

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {scenarioOrder.map((scenarioKey) => {
        const scenario = scenarioLookup[scenarioKey];
        const isActive = scenario.stageKey === scenarioStage;
        return (
          <button
            key={scenarioKey}
            type="button"
            onClick={() => pickScenario(scenarioKey)}
            className={clsx(
              "flex h-full flex-col justify-between rounded-2xl border bg-white p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean/50",
              isActive
                ? "border-ocean bg-gradient-to-br from-ocean to-ocean/80 text-white shadow-lg"
                : "border-slate-200 hover:border-ocean/30 hover:shadow-md"
            )}
          >
            <div className="space-y-2">
              <span
                className={clsx(
                  "text-xs font-semibold uppercase tracking-wide",
                  isActive ? "text-white/80" : "text-ocean"
                )}
              >
                Scenario
              </span>
              <h3 className={clsx("text-lg font-semibold", isActive ? "text-white" : "text-midnight")}>
                {scenario.label}
              </h3>
              <p className={clsx("text-sm", isActive ? "text-white/80" : "text-slate-500")}>{scenario.description}</p>
            </div>
            <span className={clsx("text-xs font-medium", isActive ? "text-white/70" : "text-slate-400")}>
              Tap to load matching script →
            </span>
          </button>
        );
      })}
    </div>
  );
}
