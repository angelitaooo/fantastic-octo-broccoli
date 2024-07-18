import Houses from './components/Houses';
import Pagination from './components/Pagination';
import { fetchData } from './utils';

const BASE_URL = 'https://www.anapioficeandfire.com/api/houses';

export type House = {
  url: string;
  name: string;
  swornMembers: string[];
};

async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pageParam = Number(searchParams.page);
  const currentPage = searchParams?.page ? pageParam : 1;

  const { data: houses, totalPages } = await fetchData({
    url: BASE_URL,
    params: { page: currentPage },
  });

  if (!houses) {
    throw new Error('Failed to fetch houses');
  }

  console.log({ currentPage, totalPages });

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl mb-16 font-mono">
        <h1 className="font-serif text-4xl pt-16 text-indigo-200">
          GAME OF THRONES
        </h1>

        <Houses houses={houses} />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </main>
  );
}

export default Home;
