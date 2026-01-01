import { create } from "zustand";
import { StageKey, baseStages, scenarioLookup, scenarioOrder } from "@/lib/conversation";

export type Platform = "Instagram" | "WhatsApp" | "Email" | "Website form";
export type WebsiteStatus = "unknown" | "has-website" | "no-website";
export type InterestLevel = "undisclosed" | "curious" | "interested" | "not-interested";

type ConversationState = {
  contactName: string;
  businessName: string;
  platform: Platform;
  websiteStatus: WebsiteStatus;
  interestLevel: InterestLevel;
  primaryStage: StageKey;
  scenarioStage: StageKey | null;
  notes: string;
  customMessage: string;
};

type ConversationActions = {
  setContactName: (value: string) => void;
  setBusinessName: (value: string) => void;
  setPlatform: (value: Platform) => void;
  setWebsiteStatus: (value: WebsiteStatus) => void;
  setInterestLevel: (value: InterestLevel) => void;
  setPrimaryStage: (stage: StageKey) => void;
  pickScenario: (key: keyof typeof scenarioLookup) => void;
  setNotes: (value: string) => void;
  setCustomMessage: (value: string) => void;
  reset: () => void;
};

const greetingStage = baseStages[0].key;

const getDefaultCustomMessage = (stage: StageKey) => {
  const foundStage = baseStages.find(({ key }) => key === stage);
  return foundStage ? foundStage.script : "";
};

export const useConversationStore = create<ConversationState & ConversationActions>((set) => ({
  contactName: "",
  businessName: "",
  platform: "Instagram",
  websiteStatus: "unknown",
  interestLevel: "undisclosed",
  primaryStage: greetingStage,
  scenarioStage: null,
  notes: "",
  customMessage: getDefaultCustomMessage(greetingStage),
  setContactName: (value) => set({ contactName: value }),
  setBusinessName: (value) => set({ businessName: value }),
  setPlatform: (value) => set({ platform: value }),
  setWebsiteStatus: (value) => set({ websiteStatus: value }),
  setInterestLevel: (value) => set({ interestLevel: value }),
  setPrimaryStage: (stage) =>
    set(() => ({
      primaryStage: stage,
      customMessage: getDefaultCustomMessage(stage),
      scenarioStage: null
    })),
  pickScenario: (key) =>
    set(() => {
      const scenario = scenarioLookup[key];
      if (!scenario) return {};
      return {
        scenarioStage: scenario.stageKey,
        primaryStage: "qualify" as StageKey,
        customMessage: getDefaultCustomMessage(scenario.stageKey)
      };
    }),
  setNotes: (value) => set({ notes: value }),
  setCustomMessage: (value) => set({ customMessage: value }),
  reset: () =>
    set({
      contactName: "",
      businessName: "",
      platform: "Instagram",
      websiteStatus: "unknown",
      interestLevel: "undisclosed",
      primaryStage: greetingStage,
      scenarioStage: null,
      notes: "",
      customMessage: getDefaultCustomMessage(greetingStage)
    })
}));

export const stageOptions = baseStages
  .filter(({ key }) => !scenarioOrder.some((scenarioKey) => scenarioLookup[scenarioKey].stageKey === key))
  .map(({ key, title }) => ({ value: key, label: title }));
