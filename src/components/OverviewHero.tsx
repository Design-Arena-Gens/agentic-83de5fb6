"use client";

import { useConversationStore } from "@/store/useConversationStore";

export function OverviewHero() {
  const businessName = useConversationStore((state) => state.businessName);
  const contactName = useConversationStore((state) => state.contactName);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-100 p-10 shadow-lg sm:p-14">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-ocean/10 px-4 py-1 text-sm font-medium text-ocean">
            Snap Web Studio · Outreach Companion
          </span>
          <h1 className="max-w-2xl text-3xl font-semibold text-midnight sm:text-4xl">
            Build trust-first conversations that open the door for modern web projects.
          </h1>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            Keep every outreach message human, calm, and professional. Follow the guided flow, adapt the script, and
            log key details in one place before you close the day.
          </p>
        </div>
        <div className="w-full max-w-xs rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
          <h3 className="text-base font-semibold text-midnight">Live Snapshot</h3>
          <dl className="mt-4 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <dt className="text-xs uppercase tracking-wide text-slate-400">Contact</dt>
              <dd className="text-sm font-medium text-midnight">{contactName || "—"}</dd>
            </div>
            <div className="flex items-start justify-between gap-3">
              <dt className="text-xs uppercase tracking-wide text-slate-400">Business</dt>
              <dd className="text-sm font-medium text-midnight">{businessName || "—"}</dd>
            </div>
            <div className="flex items-start justify-between gap-3">
              <dt className="text-xs uppercase tracking-wide text-slate-400">Signature</dt>
              <dd className="text-sm text-slate-600">
                Raj · snapwebstudioofficial@gmail.com <br />
                +91 9765894247
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
