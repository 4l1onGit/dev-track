import React from 'react';
import { signInAction } from '../_actions/userActions';

const page = () => {
  return (
    <form
      action={signInAction}
      className="flex flex-col items-center justify-center h-screen"
    >
      <h1 className="text-2xl font-bold">Sign in to access dashboard</h1>
      <p className="text-gray-500">Please log in to continue.</p>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Sign In with GitHub
      </button>
    </form>
  );
};

export default page;
