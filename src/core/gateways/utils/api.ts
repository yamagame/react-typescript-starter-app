import axios, { AxiosError } from 'axios';

const bodyToData = (config: any) => {
  if (config) {
    if (config.data) {
      config.body = config.data;
      delete config.data;
    }
  }
  return config;
};

const Fetch = async (url: string, method: string, config: any) => {
  const res = await fetch(url, { method, ...bodyToData(config) });
  const text = await res.text();
  try {
    return { data: JSON.parse(text), status: res.status };
  } catch {
    return { data: text, status: res.status };
  }
};

const FetchAPI = {
  getAsync: async (url: string, config?: any) => {
    return await Fetch(url, 'GET', config);
  },
  postAsync: async (url: string, config?: any) => {
    return await Fetch(url, 'POST', config);
  },
  patchAsync: async (url: string, config?: any) => {
    return await Fetch(url, 'PATCH', config);
  },
};

const Axios = async (url: string, method: string, config: any) => {
  try {
    const res = await axios(url, { method, ...config });
    return { data: await res.data, status: res.status };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return {
        data: '',
        status: err.response?.status,
        error: err.message,
      };
    } else {
      throw err;
    }
  }
};

const AxiosAPI = {
  getAsync: async (url: string, config?: any) => {
    return await Axios(url, 'GET', config);
  },
  postAsync: async (url: string, config?: any) => {
    return await Axios(url, 'POST', config);
  },
  patchAsync: async (url: string, config?: any) => {
    return await Axios(url, 'PATCH', config);
  },
};

export const API = AxiosAPI;
