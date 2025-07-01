import AddNotePanel from "./_components/AddNotePanel";
import ChartsPanel from "./_components/ChartsPanel";
import RecentNotesPanel from "./_components/RecentNotesPanel";
import RecentSkillsPanel from "./_components/RecentSkillsPanel";
import UserProfilePanel from "./_components/UserProfilePanel";

export default function Home() {
  return (
    <div className="grid grid-cols-12 min-h-screen gap-4 p-4">
      <div className="col-span-5 h-full flex flex-col space-y-4">
        <ChartsPanel />
        <UserProfilePanel />
      </div>
      <div className="col-span-3 h-full flex flex-col space-y-4">
        <AddNotePanel />
        <RecentNotesPanel />
      </div>
      <div className="col-span-4 h-full">
        <RecentSkillsPanel />
      </div>
    </div>
  );
}
