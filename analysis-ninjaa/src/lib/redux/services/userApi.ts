import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {codeforcesUser} from '../../../types/CodeforcesUser'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://codeforces.com/api/'
    }),

    endpoints: (builder) => ({

        getUser: builder.query<codeforcesUser, string>({
          query: (handle) => `user.info?handles=${handle}`
        }),
      
        getFriends: builder.query<codeforcesUser[], string>({
          query: (handle) => `user.friends?onlyOnline=false&handle=${handle}` 
        }), 
      
        getRating: builder.query<number[], string>({
          query: (handle) => `user.rating?handle=${handle}`
        }),
      
        getStatus: builder.query<any, string>({
          query: (handle) => `user.status?handle=${handle}` 
        })
      
      })
})

export const { 
    useGetUserQuery,
    useGetFriendsQuery, 
    useGetRatingQuery,
    useGetStatusQuery
} = userApi;
