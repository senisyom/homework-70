import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createContact,
  getContact,
  deleteContact,
  updateContact,
} from "./thunk";
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
      .addCase(
        getContact.fulfilled,
        (state, action: PayloadAction<IContact[]>) => {
          state.fetchLoading = false;
          state.contacts = action.payload;
        }
      )
      .addCase(getContact.rejected, (state) => {
        state.fetchLoading = false;
      })
      .addCase(createContact.pending, (state) => {
        state.isCreateLoading = true;
      })
      .addCase(
        createContact.fulfilled,
        (state, action: PayloadAction<IContact>) => {
          state.isCreateLoading = false;
          state.contacts.push(action.payload);
        }
      )
      .addCase(createContact.rejected, (state) => {
        state.isCreateLoading = false;
      })
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.contacts = state.contacts.filter(
            (contact) => contact.id !== action.payload
          );
        }
      )
      .addCase(
        updateContact.fulfilled,
        (state, action: PayloadAction<IContact>) => {
          const index = state.contacts.findIndex(
            (contact) => contact.id === action.payload.id
          );
          if (index !== -1) {
            state.contacts[index] = action.payload;
          }
        }
      );
  },
});

export const contactReducer = contactSlice.reducer;

export const selectCreateContactLoading = (state: RootState) =>
  state.contact.isCreateLoading;
export const selectContacts = (state: RootState) => state.contact.contacts;
export const selectFetchLoading = (state: RootState) =>
  state.contact.fetchLoading;
export const selectSelectedContact = (state: RootState) =>
  state.contact.selectedContact;
