import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_API_KEY);

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/world",
    }),

    getSongDetails: builder.query({
      query: ({ key }) => `/tracks/details?track_id=${key}`,
    }),

    getArtistDetails: builder.query({
      query: ({ key }) => `/artists/details?artist_id=${key}`,
    }),

    getSongsByGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),

    getSongsByLocation: builder.query({
      query: (location) => `/charts/country?country_code=${location}`,
    }),

    getSongsAsSearched: builder.query({
      query: (searchQuery) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchQuery}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByLocationQuery,
  useGetSongsAsSearchedQuery,
} = shazamCoreApi;
