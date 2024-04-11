import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { UpdateUserType } from "./types";

import { getSession } from "next-auth/react";

import { BACKEND_URL, IS_DEV } from "../../utils/constants";
import { revalidateTagsAction } from "../../utils/actions";

// **
// const invalidateFetchTags = async (tags: TagTypesType[]) => {
//   try {
//     await revalidateTagsAction(tags);
//   } catch {
//     console.warn(`Failed to revalidate tag: ${tags}`);
//   }
// };

const tagTypes = [] as const;
export type TagTypesType = (typeof tagTypes)[number];

export const backendApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: async (headers) => {
      const session = await getSession();
      const token = session?.backendTokens?.accessToken;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  keepUnusedDataFor: IS_DEV ? 60 : 600,
  tagTypes,
  endpoints: (builder) => ({
    // GET
    // getUserById: builder.query<UserType, string>({
    //   query: (id) => `users/${id}`,
    // }),
    // CREATE
    // createUser: builder.mutation<any, FormData>({
    //   query: (body) => {
    //     return {
    //       url: "auth/register",
    //       method: "POST",
    //       body: body,
    //     };
    //   },
    // }),
    // UPDATE
    // updateUser: builder.mutation<any, UpdateUserType>({
    //   query: ({ id, body }) => {
    //     return {
    //       url: `users/${id}`,
    //       method: "PATCH",
    //       body: body,
    //     };
    //   },
    // }),
    // DELETE
    // deletePost: builder.mutation<any, string>({
    //   query: (id) => {
    //     return {
    //       url: `posts/${id}`,
    //       method: "DELETE",
    //     };
    //   },
    //   invalidatesTags: ["Posts"],
    // }),
  }),
});

export const {
  // useGetUserByIdQuery,
  // **
  // useCreateUserMutation,
} = backendApi;
