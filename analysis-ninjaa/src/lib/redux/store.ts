"use client";

import { configureStore } from "@reduxjs/toolkit";
import userSlice from './features/userSlice';
import { userApi } from "./services/userApi";
import { contestStatusApi } from "./services/contestStatusApi";
import contestStatusSlice from "./features/contestStatusSlice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [contestStatusApi.reducerPath]: contestStatusApi.reducer,
    user: userSlice,
    contest: contestStatusSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, contestStatusApi.middleware),

});

export type RootState = ReturnType<typeof store.getState>;