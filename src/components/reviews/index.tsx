import React, { Suspense } from "react";

import { fetchReviewsQuery } from "../../fetchApi/fetchApi";

import { ReviewsBlock, SkeletonReviews, ToastComponent } from "../../components";

const ReviewsSuspense: React.FC = async () => {
  const { data, isError, args } = await fetchReviewsQuery();

  if (!data || isError) {
    return (
      <>
        <SkeletonReviews />
        <ToastComponent type="warning" args={args} text="Не удалось загрузить отзывы" />
      </>
    );
  }

  return <ReviewsBlock reviews={data} />;
};

// **
export const Reviews: React.FC = async () => (
  <Suspense fallback={<SkeletonReviews />}>
    <ReviewsSuspense />
  </Suspense>
);
