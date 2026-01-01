const guidelines = [
  {
    title: "Tone & Tempo",
    bullets: [
      "Sound human, calm, and respectful.",
      "One idea per message; avoid big blocks of text.",
      "Mirror their language; Hinglish is OK when they use it."
    ]
  },
  {
    title: "What to Avoid",
    bullets: [
      "No links, decks, or pricing unless they ask.",
      "Do not pressure them for calls or decisions.",
      "Never mention being an AI assistant."
    ]
  },
  {
    title: "Follow Up",
    bullets: [
      "Send only one check-in after 48–72 hours.",
      "Keep it light: “Just checking in — no worries if now isn’t the right time.”",
      "If they say no, close warmly and move on."
    ]
  }
];

export function CheatSheet() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-midnight">Conversation Guardrails</h3>
        <p className="text-sm text-slate-500">Keep this close whenever you’re balancing multiple chats.</p>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {guidelines.map((group) => (
          <div key={group.title} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
            <h4 className="text-sm font-semibold text-midnight">{group.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {group.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ocean" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
