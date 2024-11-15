import { createSlice } from "@reduxjs/toolkit";
import { createContact } from "./thunk";
import { RootState } from "./app/store";
import { IContact } from "./types";

export interface SearchTvShowState {
  shows: IContact[];
  showDisplay: IContact | null;
  fetchLoading: boolean;
  isCreateLoading: boolean;
}

const initialState: SearchTvShowState = {
  shows: [],
  showDisplay: null,
  fetchLoading: false,
  isCreateLoading: false,
};

export const selectCreateContactLoading = (state: RootState) =>
  state.contact.isCreateLoading;

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.isCreateLoading = true;
      })
      .addCase(createContact.fulfilled, (state) => {
        state.isCreateLoading = false;
      })
      .addCase(createContact.rejected, (state) => {
        state.isCreateLoading = false;
      });
  },
});

export const contactReducer = contactSlice.reducer;
export const selectAutocomplete = (state: RootState) =>
  state.contact.showDisplay;
export const SearchShows = (state: RootState) => state.contact.shows;
