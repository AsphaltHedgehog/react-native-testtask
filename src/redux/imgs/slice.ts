import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchImages } from "./operations";
import { Basic } from "unsplash-js/dist/methods/photos/types";

type imagesState = {
  result: Basic[];
  isLoading: boolean;
  error: string | null;
}

const initialState: imagesState = {
  result: [],
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
        state.result = payload; // TODO: 
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchImages.pending,
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchImages.rejected,
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = typeof action.payload === "string" ? action.payload : null;
        }
      );
  },
});

export const imagesReducer = imagesSlice.reducer;