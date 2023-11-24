"use client";
import { createSlice } from "@reduxjs/toolkit";
import { contestStatusApi } from "../services/contestStatusApi";

export const contestStatusSlice = createSlice({
  name: 'contestStatus',
  initialState: {
    contestStatus: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(contestStatusApi.endpoints.getContestStatus.matchFulfilled, (state, action) => {
        state.contestStatus = action.payload;
      });
  },
});

export default contestStatusSlice.reducer;

export const selectContestStatus = (state) => state.contestStatus.contestStatus;
