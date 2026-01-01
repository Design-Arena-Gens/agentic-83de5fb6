"use client";

import { ChangeEvent } from "react";
import { Card } from "@/components/ui/Card";
import { useConversationStore, Platform, WebsiteStatus, InterestLevel } from "@/store/useConversationStore";

const platforms: Platform[] = ["Instagram", "WhatsApp", "Email", "Website form"];
const websiteStatuses: { value: WebsiteStatus; label: string }[] = [
  { value: "unknown", label: "Not sure yet" },
  { value: "no-website", label: "No website" },
  { value: "has-website", label: "Has website" }
];
const interestLevels: { value: InterestLevel; label: string }[] = [
  { value: "undisclosed", label: "Too early to tell" },
  { value: "curious", label: "Curious" },
  { value: "interested", label: "Interested" },
  { value: "not-interested", label: "Not interested" }
];

export function ContactIntake() {
  const {
    contactName,
    businessName,
    platform,
    websiteStatus,
    interestLevel,
    setContactName,
    setBusinessName,
    setPlatform,
    setWebsiteStatus,
    setInterestLevel
  } = useConversationStore();

  const handleSelectChange =
    <T extends string>(setter: (value: T) => void) =>
    (event: ChangeEvent<HTMLSelectElement>) => {
      setter(event.target.value as T);
    };

  return (
    <Card className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-midnight">Active Conversation</h3>
        <p className="text-sm text-slate-500">
          Capture the basics so you can stay personal in every follow-up.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-midnight">
          Contact Name
          <input
            type="text"
            value={contactName}
            onChange={(event) => setContactName(event.target.value)}
            placeholder="e.g. Ayesha"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-midnight outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/20"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-midnight">
          Business Name
          <input
            type="text"
            value={businessName}
            onChange={(event) => setBusinessName(event.target.value)}
            placeholder="e.g. Ayesha Boutique"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-midnight outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/20"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-midnight">
          Platform
          <select
            value={platform}
            onChange={handleSelectChange(setPlatform)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-midnight outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/20"
          >
            {platforms.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-midnight">
          Website Status
          <select
            value={websiteStatus}
            onChange={handleSelectChange(setWebsiteStatus)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-midnight outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/20"
          >
            {websiteStatuses.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-midnight sm:col-span-2">
          Interest Level
          <select
            value={interestLevel}
            onChange={handleSelectChange(setInterestLevel)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-midnight outline-none transition focus:border-ocean focus:ring-2 focus:ring-ocean/20"
          >
            {interestLevels.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </Card>
  );
}
