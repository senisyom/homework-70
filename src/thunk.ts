import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchShowDetailsLoading = createAsyncThunk<
  IChannelApi,
  number,
  { state: RootState }
>("searchTvShow/fetchShowDetails", async (id) => {
  const response = await axios.get<IChannelApi>(
    `https://api.tvmaze.com/shows/${id}`
  );
  return response.data;
});

export const fetchTvShows = createAsyncThunk<
  IChannel[],
  string,
  { state: RootState }
>("searchTvShow/fetchTvShows", async (query) => {
  const response = await axios.get<{ show: IChannel }[]>(
    `https://api.tvmaze.com/search/shows?q=${query}`
  );
  return response.data.map((result) => result.show);
});
