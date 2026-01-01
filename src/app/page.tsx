import { OverviewHero } from "@/components/OverviewHero";
import { ContactIntake } from "@/components/ContactIntake";
import { SectionHeader } from "@/components/SectionHeader";
import { StageSelector } from "@/components/StageSelector";
import { MessageComposer } from "@/components/MessageComposer";
import { ScenarioBoard } from "@/components/ScenarioBoard";
import { NotesPanel } from "@/components/NotesPanel";
import { CheatSheet } from "@/components/CheatSheet";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8">
      <OverviewHero />

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <SectionHeader
            eyebrow="Workflow"
            title="Prep the conversation so every message stays personal."
            description="Fill in the details, pick your stage, and adapt the script before you hit send."
          />
          <ContactIntake />
          <StageSelector />
          <MessageComposer />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <SectionHeader
            eyebrow="Playbook"
            title="Scenarios you might face today."
            description="Switch between quick responses depending on how the business replies."
          />
          <ScenarioBoard />
          <NotesPanel />
        </div>
      </section>

      <CheatSheet />
    </main>
  );
}
