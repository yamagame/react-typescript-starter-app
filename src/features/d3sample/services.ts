import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { D3SampleData } from './types';

interface Post {
  name: string;
  data: D3SampleData[];
}

export const d3sampleApi = createApi({
  reducerPath: 'd3sampleApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getD3SampleByName: builder.query<D3SampleData[], string>({
      query: (name) => `d3sample/${name}`,
    }),
    updateD3Sample: builder.mutation<Post, Partial<Post> & Pick<Post, 'name'>>({
      query: ({ name, ...patch }) => ({
        url: `d3sample/${name}`,
        method: 'POST',
        body: patch,
      }),
    }),
  }),
});

export const {
  useGetD3SampleByNameQuery, //
  useUpdateD3SampleMutation, //
} = d3sampleApi;
