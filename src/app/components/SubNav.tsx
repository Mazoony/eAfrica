'use client';
import Link from 'next/link';

export default function SubNav() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 lg:px-6 py-4">
        <nav className="flex flex-col items-center space-y-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                <Link href="/lessons" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                    All Lessons
                </Link>
                <Link href="/quizzes" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                    Quizzes
                </Link>
                <Link href="/progress" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                    My Progress
                </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 border-t pt-4 w-full">
                <Link href="/lessons" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                    Lessons
                </Link>
                <Link href="/social" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                    Social
                </Link>
                <Link href="/profile" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                    Profile
                </Link>
            </div>
        </nav>
      </div>
    </div>
  );
}
