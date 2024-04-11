import React from "react";

import { Review } from "../../../components";

import cs from "../../../scss/helpers.module.scss";
import s from "./reviewsBlock.module.scss";

type ReviewsBlockType = {
  reviews: ReviewType[];
};

export const ReviewsBlock: React.FC<ReviewsBlockType> = ({ reviews }) => {
  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>Reviews</h2>

      <div className={`${s.container} ${cs.container}`}>
        <ul className={s.list}>
          {reviews.map((review, i) => (
            <li key={i} className={s.item}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
