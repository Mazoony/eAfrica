'use client';

import Link from 'next/link';
import { useAuth } from '../AuthContext';
import { HomeIcon, BellIcon, UserCircleIcon, CogIcon, BookOpenIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';

export default function MobileNav() {
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 lg:hidden z-50">
      <div className="flex justify-around items-center h-16">
        <Link href="/social" className="p-2">
          <HomeIcon className="h-7 w-7 text-gray-600 dark:text-gray-300" />
        </Link>
        <Link href="/lessons" className="p-2">
          <BookOpenIcon className="h-7 w-7 text-gray-600 dark:text-gray-300" />
        </Link>
        <Link href="/notifications" className="p-2">
          <BellIcon className="h-7 w-7 text-gray-600 dark:text-gray-300" />
        </Link>
        <Link href="/profile" className="p-2">
          <UserCircleIcon className="h-7 w-7 text-gray-600 dark:text-gray-300" />
        </Link>
        <Link href="/settings" className="p-2">
          <CogIcon className="h-7 w-7 text-gray-600 dark:text-gray-300" />
        </Link>
        <button onClick={handleLogout} className="p-2">
          <ArrowLeftOnRectangleIcon className="h-7 w-7 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </nav>
  );
}
