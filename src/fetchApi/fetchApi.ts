"use server";

// import { getSession } from "next-auth/react";

import type { GetProductsType } from "../redux/backendApi/types";
import type { TagTypesType } from "../redux/backendApi";

import { BACKEND_URL } from "../utils/constants";

const fetchApi = async (query: string, tags?: TagTypesType[], revalidateTime?: number) => {
  const args = `${BACKEND_URL}/${query}`;
  const revalidate = process.env.NODE_ENV === "production" ? revalidateTime ?? 600 : 60;

  // const session = await getSession();
  // const token = session?.backendTokens?.accessToken;

  // let headers = {};

  // if (token) {
  //   headers = {
  //     authorization: `Bearer ${token}`,
  //   };
  // }

  try {
    const response = await fetch(args, {
      next: {
        tags,
        revalidate,
      },
      // headers,
    });

    if (!response.ok) {
      return {
        isError: true,
        args,
      };
    }

    const data = await response.json();

    return {
      isError: false,
      data,
      args,
    };
  } catch (error) {
    return {
      isError: true,
      args,
    };
  }
};

// Common
export const fetchReviewsQuery = async () => {
  const res = await fetchApi("reviews");

  return {
    ...res,
    data: res?.data as ReviewType[],
  };
};

export const fetchProductsQuery = async (request: string) => {
  const res = await fetchApi(`products${request}`);

  return {
    ...res,
    data: res?.data as GetProductsType,
  };
};
