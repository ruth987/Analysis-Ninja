
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContestStatus } from "../../../types/ContestStatus";

export const contestStatusApi = createApi({
  reducerPath: 'contestStatusApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://codeforces.com/api/',
  }),
  endpoints: (builder) => ({
    getContestStatus: builder.query<ContestStatus, { contestId: number; from: number; count: number }>({
      query: ({ contestId, from, count }) =>
        `contest.status?contestId=${contestId}&asManager=false&from=${from}&count=${count}`,
      transformResponse: (response: ContestStatus) => response.result,
    }),
  }),
});

export const { useGetContestStatusQuery } = contestStatusApi;
