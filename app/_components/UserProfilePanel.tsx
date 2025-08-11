import Image from 'next/image';
import { getUserNotes } from '../_actions/notesActions';
import { getUserSkills } from '../_actions/skillsActions';
import {
  getUserDetails,
  updateUserDetails,
  updateUserTheme,
} from '../_actions/userActions';
import { auth } from '../_lib/auth/auth';
import HomePanel from './HomePanel';
import { Theme } from '@prisma/client';

const UserProfilePanel = async () => {
  const session = await auth();
  const { displayName, bio, theme, lastActive, streakStart } =
    await getUserDetails();
  const { total: skillsTotal } = await getUserSkills();
  const { total: notesTotal } = await getUserNotes();
  const streak = Math.max(
    0,
    Math.floor(
      (new Date(lastActive!).setHours(0, 0, 0, 0) -
        new Date(streakStart!).setHours(0, 0, 0, 0)) /
        (1000 * 60 * 60 * 24)
    )
  );

  return (
    <HomePanel className={`h-1/2 flex flex-col justify-center space-y-4`}>
      <h2 className="text-3xl text-gray-300 pt-4 px-4">
        Hey {displayName}, Welcome
      </h2>
      <div className="flex justify-between w-full">
        <div className="w-2/3 p-4 rounded-lg">
          <div className="flex justify-between">
            <h3 className="text-2xl text-gray-200 ">Update Profile</h3>
            <div className="relative h-10 w-10">
              <Image
                alt="User Avatar"
                src={session!.user!.image!}
                fill
                className="w-1/3 absolute rounded-lg shadow-md"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <form className="mt-4 space-y-4" action={updateUserDetails}>
            <div className="mb-4">
              <label className="block text-gray-200 mb-2" htmlFor="name">
                Display Name
              </label>
              <input
                type="text"
                id="name"
                defaultValue={displayName || ''}
                name="name"
                className="w-full p-2 bg-gray-700 text-gray-200 rounded-xl"
                placeholder="Enter your display name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-200 mb-2" htmlFor="email">
                Short Bio
              </label>
              <textarea
                id="bio"
                defaultValue={bio || ''}
                name="bio"
                className="w-full p-2 bg-gray-700 text-gray-200 rounded-xl"
                placeholder="Tell us about yourself"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors"
            >
              Update Profile
            </button>
          </form>
        </div>
        <div className="w-1/2 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-2xl text-gray-200 mb-4">Profile</h3>
          <ul className="space-y-2">
            <li>
              <span>{bio || 'No bio available'}</span>
            </li>
            <li className="flex justify-between text-gray-300">
              <span>Total Notes</span>
              <span>{notesTotal}</span>
            </li>
            <li className="flex justify-between text-gray-300">
              <span>Total Skills</span>
              <span>{skillsTotal}</span>
            </li>
            <li className="flex justify-between text-gray-300">
              <span>Last Active</span>
              <span>{String(lastActive).split(' ').slice(0, 4).join(' ')}</span>
            </li>
            <li className="flex justify-between text-gray-300">
              <span>Current Streak</span>
              <span className="text-green-400">{streak}</span>
            </li>
          </ul>
          <form className="py-4" action={updateUserTheme}>
            <h3 className="text-2xl text-gray-200 mb-4">
              Theme Settings{' '}
              <span className="text-gray-400">({theme?.charAt(0)})</span>
            </h3>
            <div className="flex justify-between space-x-2">
              <select
                name="theme"
                defaultValue={theme || Theme.System}
                id="theme"
                className="bg-gray-700 text-gray-200 px-3 py-1 rounded hover:bg-gray-600 transition-colors"
              >
                <option value={Theme.Light}>Light</option>
                <option value={Theme.Dark}>Dark</option>
                <option value={Theme.System}>System</option>
              </select>
              <button
                type="submit"
                className=" bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors"
              >
                Update Theme
              </button>
            </div>
          </form>
        </div>
      </div>
    </HomePanel>
  );
};

export default UserProfilePanel;
