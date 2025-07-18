import { getUserSkills } from '../_actions/skillsActions';
import HomePanel from './HomePanel';
import NoteForm from './NoteForm';

const AddNotePanel = async () => {
  const { skills } = await getUserSkills();
  return (
    <HomePanel className="h-1/2 flex flex-col space-y-4">
      <NoteForm skills={skills} />
    </HomePanel>
  );
};

export default AddNotePanel;
