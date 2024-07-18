import Houses from './components/Houses';
import { fetchData } from './utils';

const BASE_URL = 'https://www.anapioficeandfire.com/api/houses';

export type House = {
  url: string;
  name: string;
  swornMembers: string[];
};

async function Home() {
  const { data: houses } = await fetchData({ url: BASE_URL });

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl mb-16 font-mono">
        <h1 className="font-serif text-4xl pt-16 text-indigo-200">
          GAME OF THRONES
        </h1>
      </div>

      <Houses houses={houses} />
    </main>
  );
}

export default Home;
