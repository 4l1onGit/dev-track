import { auth } from "@/app/_lib/auth/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="bg-indigo-950 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">DevTracker</div>
        <ul className="flex space-x-6 items-center">
          <li className="hover:-translate-y-1 hover:text-gray-400 transition-transform">
            <Link href="/">Dashboard</Link>
          </li>
          <li className="hover:-translate-y-1 hover:text-gray-400 transition-transform">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="hover:-translate-y-1 hover:text-gray-400 transition-transform">
            <Link href="/notes">Notes</Link>
          </li>
          <li className="hover:-translate-y-1 hover:text-gray-400 transition-transform">
            {session?.user ? (
              <Link href="/api/auth/signout">
                <div className="relative h-8 w-8">
                  <Image
                    className="absolute rounded-2xl"
                    src={session.user.image!}
                    fill
                    alt={`${session.user.name} profile`}
                  />
                </div>
              </Link>
            ) : (
              <Link href="/api/auth/signin">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
