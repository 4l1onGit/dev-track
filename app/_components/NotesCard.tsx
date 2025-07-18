import DeleteNoteButton from "./DeleteNoteButton";

type Note = {
  title: string;
  lastUpdated: Date;
  createdAt: Date;
  skillId: string | null;
  content: string;
  id: string;
};

const NotesCard = ({ id, title, lastUpdated, content }: Note) => {
  return (
    <li className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md space-y-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors ">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <DeleteNoteButton id={id} />
      </div>
      <p className="text-sm text-gray-200">
        {content.length > 0 ? content.slice(0, 40) : ""}...
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Last edited: {String(lastUpdated)}
      </p>
    </li>
  );
};

export default NotesCard;
