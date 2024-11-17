import { createSlice } from "@reduxjs/toolkit";
import { createContact, getContact } from "./thunk";
import { RootState } from "./app/store";
import { IContact } from "./types";

export interface ContactState {
  contacts: IContact[];
  selectedContact: IContact | null;
  fetchLoading: boolean;
  isCreateLoading: boolean;
}

const initialState: ContactState = {
  contacts: [],
  selectedContact: null,
  fetchLoading: false,
  isCreateLoading: false,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContact.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.contacts = action.payload;
      })
      .addCase(getContact.rejected, (state) => {
        state.fetchLoading = false;
      })
      .addCase(createContact.pending, (state) => {
        state.isCreateLoading = true;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.isCreateLoading = false;
        state.contacts.push(action.meta.arg);
      })
      .addCase(createContact.rejected, (state) => {
        state.isCreateLoading = false;
      });
  },
});

export const contactReducer = contactSlice.reducer;

// Селекторы
export const selectCreateContactLoading = (state: RootState) =>
  state.contact.isCreateLoading;
export const selectContacts = (state: RootState) => state.contact.contacts;
export const selectFetchLoading = (state: RootState) =>
  state.contact.fetchLoading;
export const selectSelectedContact = (state: RootState) =>
  state.contact.selectedContact;
