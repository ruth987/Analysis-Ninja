"use client";

import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../services/userApi";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        friends: [],
        rating: [],
        status: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, action) => {
            state.user = action.payload[0];
        })
        .addMatcher(userApi.endpoints.getFriends.matchFulfilled, (state, action) => {
            state.friends = action.payload;
        })
        .addMatcher(userApi.endpoints.getRating.matchFulfilled, (state, action) => {
            state.rating = action.payload;
        })
        .addMatcher(userApi.endpoints.getStatus.matchFulfilled, (state, action) => {
            state.status = action.payload;
        });
    }
});

export default userSlice.reducer;

export const selectUser = (state) => state.user.user;

export const selectFriends = (state) => state.user.friends;

export const selectRating = (state) => state.user.rating;

export const selectStatus = (state) => state.user.status;


