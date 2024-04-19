import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchImages, fetchPictures } from "./operations";
import { Basic } from "unsplash-js/dist/methods/photos/types";

type imagesState = {
  result: Basic[];
  picture: Basic | {};
  isLoading: boolean;
  error: string | null;
}

const initialState: imagesState = {
  result: [],
  picture: {},
  isLoading: false,
  error: null,
}

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.fulfilled, (state, { payload }) => {
        state.result = payload;
        state.isLoading = false;
      })
      .addCase(fetchPictures.fulfilled, (state, { payload }) => {
        state.picture = payload; 
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchImages.pending,
          fetchPictures.pending,
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchImages.rejected,
          fetchPictures.rejected,
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = typeof action.payload === "string" ? action.payload : null;
        }
      );
  },
});

export const imagesReducer = imagesSlice.reducer;