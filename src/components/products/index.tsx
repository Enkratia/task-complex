import React, { Suspense } from "react";

import { fetchProductsQuery } from "../../fetchApi/fetchApi";

import { ToastComponent, SkeletonProducts, ProductsBlock } from "../../components";

const page = 1;
const page_size = 6;

const ProductsSuspense: React.FC = async () => {
  const { data, isError, args } = await fetchProductsQuery(`?page=${page}&page_size=${page_size}`);

  if (!data || isError) {
    return (
      <>
        <SkeletonProducts />
        <ToastComponent type="warning" args={args} text="Не удалось загрузить товары" />
      </>
    );
  }

  return <ProductsBlock initialData={data} page_size={page_size} />;
};

// **
export const Products: React.FC = async () => (
  <Suspense fallback={<SkeletonProducts />}>
    <ProductsSuspense />
  </Suspense>
);
