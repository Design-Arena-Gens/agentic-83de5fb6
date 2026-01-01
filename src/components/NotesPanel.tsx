"use client";

import { Card } from "@/components/ui/Card";
import { useConversationStore } from "@/store/useConversationStore";

export function NotesPanel() {
  const notes = useConversationStore((state) => state.notes);
  const setNotes = useConversationStore((state) => state.setNotes);
  const reset = useConversationStore((state) => state.reset);

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-midnight">Internal Notes</h3>
          <p className="text-sm text-slate-500">
            Track helpful context, objections, or follow-up commitments for this contact.
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:border-ocean hover:text-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean/50"
        >
          Clear session
        </button>
      </div>
      <textarea
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        rows={6}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-midnight outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/20"
      />
      <ul className="list-disc space-y-1 pl-6 text-xs text-slate-500">
        <li>Respect “not interested” responses immediately.</li>
        <li>Never send more than one follow-up if they do not respond.</li>
        <li>Keep notes brief so handovers stay simple.</li>
      </ul>
    </Card>
  );
}
