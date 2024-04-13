import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { GetProductsType, PostOrderType } from "./types";

import { BACKEND_URL, IS_DEV } from "../../utils/constants";

const tagTypes = [] as const;
export type TagTypesType = (typeof tagTypes)[number];

export const backendApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    // prepareHeaders: async (headers) => {
    //   const session = await getSession();
    //   const token = session?.backendTokens?.accessToken;

    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }

    //   return headers;
    // },
  }),
  keepUnusedDataFor: IS_DEV ? 60 : 600,
  tagTypes,
  endpoints: (builder) => ({
    // GET
    getProducts: builder.query<GetProductsType, string>({
      query: (request) => `products/${request}`,
    }),

    // CREATE
    postOrder: builder.mutation<any, PostOrderType>({
      query: (body) => {
        return {
          url: "order",
          method: "POST",
          // headers: {
          //   "content-type": "application/json",
          // },
          body: body,
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,

  // **
  usePostOrderMutation,
} = backendApi;
