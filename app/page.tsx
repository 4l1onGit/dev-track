import AddNotePanel from './_components/AddNotePanel';
import ChartsPanel from './_components/ChartsPanel';
import RecentNotesPanel from './_components/RecentNotesPanel';
import RecentSkillsPanel from './_components/RecentSkillsPanel';
import UserProfilePanel from './_components/UserProfilePanel';

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  const params = await searchParams;
  const page = params?.page || 0;
  const notesPage = params?.notesPage || 0;
  const record = params?.record || 5;
  return (
    <div className="grid grid-cols-12 min-h-screen gap-4 p-4">
      <div className="col-span-5 h-full flex flex-col space-y-4">
        <ChartsPanel />
        <UserProfilePanel />
      </div>
      <div className="col-span-3 h-full flex flex-col space-y-4">
        <AddNotePanel />
        <RecentNotesPanel notesPage={Number(notesPage)} />
      </div>
      <div className="col-span-4 h-full">
        <RecentSkillsPanel page={Number(page)} record={Number(record)} />
      </div>
    </div>
  );
}
