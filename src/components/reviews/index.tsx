import React from "react";

import { fetchReviewsQuery } from "../../fetchApi/fetchApi";

import { ReviewsBlock } from "../../components";

export const Reviews: React.FC = async () => {
  const { data, isError } = await fetchReviewsQuery();

  if (!data || isError) {
    console.warn("Faield to load some data");
    return;
  }

  return <ReviewsBlock reviews={data} />;
};
