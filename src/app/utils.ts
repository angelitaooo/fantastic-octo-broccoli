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

      const paginationInfo = {total: 0};

      if(params?.page) {
        const headersLink = response.headers.link;
        const headersParts = headersLink.split(', ')

        headersParts.forEach((link: string)  => {
            const [urlPart, relPart] = link.split('; ')
    
            if(relPart === 'rel="last"') {
              const regex = /[?&]page=(\d+)/;
              const match = urlPart.match(regex);
              const page = match ? Number(match[1]) : 0;
    
              paginationInfo['total'] = page
            }
          })
      }
  
      return { data: response.data, totalPages: paginationInfo.total };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }