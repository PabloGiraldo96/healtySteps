"use client";

import StepCounter from '@/components/StatsUI';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <header className="p-4 flex justify-end">
        <ThemeToggle />
      </header>
      <main className="text-center p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to WateRPG</h1>
        <StepCounter />
      </main>
    </div>
  );
}
