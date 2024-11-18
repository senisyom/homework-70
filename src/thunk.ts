import { createAsyncThunk } from "@reduxjs/toolkit";
import { IContact, IContactApi } from "./types";
import axiosAPI from "./axiosApi";

export const createContact = createAsyncThunk<IContact, IContact>(
  "contacts/createContact",
  async (contact) => {
    const response = await axiosAPI.post<IContact>("contacts.json", contact);
    return { ...contact, id: response.data.name };
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

export const deleteContact = createAsyncThunk<string, string>(
  "contacts/deleteContact",
  async (id) => {
    await axiosAPI.delete(`contacts/${id}.json`);
    return id;
  }
);

export const updateContact = createAsyncThunk<IContact, IContact>(
  "contacts/updateContact",
  async (contact) => {
    await axiosAPI.put<IContact>(`contacts/${contact.id}.json`, contact);
    return contact;
  }
);
