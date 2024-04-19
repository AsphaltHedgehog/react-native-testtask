import { RootState } from "../store";

export const selectGetImgs = (state: RootState) => state.imgs.result;

export const selectIsLoading = (state: RootState) => state.imgs.isLoading;

export const selectIsError = (state: RootState) => state.imgs.error;