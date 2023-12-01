import Home from "@/components/Home";

export default function dashboard() {
  return (
    <main className="grid h-screen w-screen grid-cols-[30%,1fr] gap-4 p-8 relative">
      

      <section className="h-full rounded-3xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
      </section>
      <section className="h-full overflow-x-auto rounded-3xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50">
        <Home />
      </section>
    </main>
  );
}
