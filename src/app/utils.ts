import axios, { AxiosResponse } from 'axios';


type FetchDataOptions = {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    params?: { page: number };
  };
  
export async function fetchData({
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