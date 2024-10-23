export default function Home() {
  return (
    <main className="w-full pt-20 font-bold text-center bg-brand-500 h-dvh">
      <h2 className="mb-10 text-4xl text-text-primary">Primary text</h2>
      <h2 className="mb-10 text-2xl text-text-secondary">Secondary text</h2>
      <h2 className="mb-10 text-lg text-text-disabled">disabled text</h2>
      <div className="flex items-center justify-center w-full gap-8 mt-120">
        <div className="size-24 bg-brand-400 ring-8 ring-black"></div>
        <div className="size-24 bg-brand-300 ring-8 ring-black"></div>
        <div className="size-24 bg-brand-200 ring-8 ring-black"></div>
        <div className="size-24 bg-brand-100 ring-8 ring-black"></div>
        <div className="size-24 bg-accent-1 ring-8 ring-black"></div>
        <div className="size-24 bg-accent-2 ring-8 ring-black"></div>
      </div>
    </main>
  );
}
