import Houses from "./components/Houses";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl mb-16 font-mono">
       <h1 className="font-serif text-4xl pt-16 text-indigo-200">GAME OF THRONES</h1>
      </div>

      <Houses houses={[]} />
      
    </main>
  );
}
