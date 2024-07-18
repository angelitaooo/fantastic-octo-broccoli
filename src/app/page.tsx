import Houses from './components/Houses';
import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://www.anapioficeandfire.com/api/houses';

type FetchDataOptions = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  params?: { page: number };
};

async function fetchData({
  url,
  method = 'GET',
  headers,
  params,
}: FetchDataOptions) {
  try {
    const response: AxiosResponse = await axios({
      url,
      method,
      headers,
      params,
    });

    return { data: response.data };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

async function Home() {
  const { data } = await fetchData({ url: BASE_URL });

  console.log('data', data);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl mb-16 font-mono">
        <h1 className="font-serif text-4xl pt-16 text-indigo-200">
          GAME OF THRONES
        </h1>
      </div>

      <Houses houses={[]} />
    </main>
  );
}

export default Home;
