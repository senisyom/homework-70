import { createAsyncThunk } from "@reduxjs/toolkit";
import { IContact } from "./types";
import axiosAPI from "./axiosApi";

export const createContact = createAsyncThunk<void, IContact>(
  "contacts/createContact",
  async (contact) => {
    await axiosAPI.post<IContact>("contacts.json", contact);
  }
);
