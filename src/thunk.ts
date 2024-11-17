import { createAsyncThunk } from "@reduxjs/toolkit";
import { IContact, IContactApi } from "./types";
import axiosAPI from "./axiosApi";

export const createContact = createAsyncThunk<void, IContact>(
  "contacts/createContact",
  async (contact) => {
    await axiosAPI.post<IContact>("contacts.json", contact);
  }
);
export const getContact = createAsyncThunk<IContact[], void>(
  "contacts/getContacts",
  async () => {
    const response = await axiosAPI.get<IContactApi>("contacts.json");
    return Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key],
    }));
  }
);
