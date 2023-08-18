import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// API endpoint for fetching data
export const carApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://car-data.p.rapidapi.com/`
  }),

  endpoints: (builder) => ({     // <Type of data the call will return, Type of parameter being passed to the query function>
    getCarDetails: builder.query<any, void>({
      query: () => "cars",
    }),
  }),
});

export const { useGetCarDetailsQuery } = carApi;