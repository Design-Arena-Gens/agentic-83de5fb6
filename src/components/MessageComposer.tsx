"use client";

import { baseStages } from "@/lib/conversation";
import { useConversationStore } from "@/store/useConversationStore";
import clsx from "clsx";
import { useMemo } from "react";

export function MessageComposer() {
  const primaryStage = useConversationStore((state) => state.primaryStage);
  const scenarioStage = useConversationStore((state) => state.scenarioStage);
  const customMessage = useConversationStore((state) => state.customMessage);
  const setCustomMessage = useConversationStore((state) => state.setCustomMessage);

  const activeStage = useMemo(() => {
    const stageKey = scenarioStage ?? primaryStage;
    return baseStages.find((stage) => stage.key === stageKey);
  }, [primaryStage, scenarioStage]);

  if (!activeStage) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-ocean">Suggested Message</span>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xl font-semibold text-midnight">{activeStage.title}</h3>
          <span
            className={clsx(
              "rounded-full border px-3 py-1 text-xs font-medium",
              scenarioStage ? "border-ocean text-ocean" : "border-slate-200 text-slate-500"
            )}
          >
            {scenarioStage ? "Scenario" : "Core Flow"}
          </span>
        </div>
        <p className="text-sm text-slate-500">{activeStage.headline}</p>
      </div>
      <textarea
        value={customMessage}
        onChange={(event) => setCustomMessage(event.target.value)}
        rows={8}
        className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-midnight shadow-inner outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/20"
      />
      <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 p-4 text-xs text-slate-500">
        Tip: Keep it short, one idea per message. Personalize the opening line with the business name or a detail you
        noticed about their work.
      </div>
    </div>
  );
}
