"use client";

import React from "react";

import { useInView } from "react-intersection-observer";

import { GetProductsType } from "../../../redux/backendApi/types";
import { useGetProductsQuery } from "../../../redux/backendApi";

import { Product, SkeletonProduct } from "../../../components";

import cs from "../../../scss/helpers.module.scss";
import s from "./productsBlock.module.scss";

type ProductsBlockProps = {
  initialData: GetProductsType;
  page_size: number;
};

export const ProductsBlock: React.FC<ProductsBlockProps> = ({ initialData, page_size }) => {
  const { ref: listRef, inView } = useInView({
    threshold: 0,
    // triggerOnce: true,
  });

  const addedPages = React.useRef([initialData.page]);
  const data = React.useRef(initialData.products);
  const [page, setPage] = React.useState(initialData.page);

  const request = `?page=${page}&page_size=${page_size}`;
  const { data: newData } = useGetProductsQuery(request, { skip: page === 1 });

  if (newData?.page && !addedPages.current.includes(newData.page)) {
    data.current = [...data.current, ...(newData?.products || [])];
    addedPages.current = [...addedPages.current, newData.page];
  }

  // **
  const lastAddedPage = addedPages.current[addedPages.current.length - 1];
  const isLastPage = lastAddedPage * page_size >= (newData || initialData).total;

  // **
  React.useEffect(() => {
    if (!inView) return;
    setPage((p) => p + 1);
  }, [inView]);

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container}`}>
        <h2 className={cs.srOnly}>Products</h2>

        <ul className={s.products}>
          {data.current.map((product, i) => (
            <li
              key={product.id}
              className={s.product}
              ref={i === data.current.length - 1 ? listRef : null}>
              <Product product={product} />
            </li>
          ))}

          {inView &&
            !isLastPage &&
            [...Array(6)].map((_, i) => (
              <li key={i} className={s.product}>
                <SkeletonProduct key={i + "skeleton"} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
