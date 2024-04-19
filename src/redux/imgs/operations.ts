import { createAsyncThunk } from "@reduxjs/toolkit";
// import { AppDispatch, RootState } from "../store";
import { createApi } from 'unsplash-js';
// import { Basic } from "unsplash-js/dist/methods/photos/types";

// interface AsyncThunkConfig {
//   state: RootState;
//   dispatch: AppDispatch;
//   rejectValue: string;
// };


const unsplash = createApi({
  accessKey: "Zo2_R13GCaDp3KnwYza6ivMP0d9hlkj7pvMdszCcCL0"
})


export const fetchImages = createAsyncThunk
  ("getImgs", async (_, thunkApi) => {
    try {
      const data = await unsplash.photos.list({ page: 1, perPage: 8 })
      return data.response.results; 
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
  });

  export const fetchPictures = createAsyncThunk
  ("getPicture", async (id: string, thunkApi) => {
    try {
      const data = await unsplash.photos.get({ photoId: id })
      return data.response;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(
      `${(error as Error)?.message ?? "Unknown error"}`
    );
  }
});