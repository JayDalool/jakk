import React from 'react';
import Link from 'next/link';
import Home from '@/components/Home';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  return (
    <main className="grid h-screen w-screen grid-cols-[30%,1fr] gap-4 p-8 relative">
      {/* Circular DJ Button in the top right corner */}
      <div className="absolute top-12 right-12">
        
          <Button className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
            <Link href="/dj">DJ</Link>
          </Button>
        
      </div>

      <section className="h-full rounded-3xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
      </section>
      <section className="h-full overflow-x-auto rounded-3xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
        <Home />
      </section>
    </main>
  );
}
