"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setProduct } from "../../redux/cartSlice/slice";
import { selectProducts } from "../../redux/cartSlice/selectors";

import cs from "../../scss/helpers.module.scss";
import s from "./product.module.scss";

type ProductProps = {
  product: ProductType;
};

export const Product: React.FC<ProductProps> = ({ product }) => {
  const isMockCount = React.useRef(false);

  const dispatch = useAppDispatch();
  const { cart } = useAppSelector(selectProducts);

  const count = cart.find((elem) => elem.product.id === product.id)?.count ?? "0";

  // **
  const onBtnClick = () => {
    dispatch(setProduct({ count: "1", product }));
    isMockCount.current = false;
  };

  // **
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = /\D/gi;
    let formattedValue = e.target.value.replace(regExp, "");

    if (!formattedValue) {
      isMockCount.current = true;
    } else {
      isMockCount.current = false;
    }

    formattedValue = formattedValue || "0";

    dispatch(setProduct({ count: formattedValue, product }));
  };

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const isRelatedTargetTooltip =
      e.relatedTarget === e.target.previousElementSibling ||
      e.relatedTarget === e.target.nextElementSibling;

    if (e.target.value === "" && !isRelatedTargetTooltip) {
      dispatch(setProduct({ count: "0", product }));
      isMockCount.current = false;
    }
  };

  // **
  const onSubtractClick = () => {
    if (+count <= 1) {
      dispatch(setProduct({ count: "0", product }));
      isMockCount.current = false;
      return;
    }

    dispatch(setProduct({ count: (+count - 1).toString(), product }));
    isMockCount.current = false;
  };

  const onAddClick = () => {
    dispatch(setProduct({ count: (+count + 1).toString(), product }));
    isMockCount.current = false;
  };

  return (
    <article className={s.root}>
      <Link href={`/product/${product.id}`} className={s.imageWrapper}>
        <Image src={product.image_url} alt={product.title} sizes="360px" fill />
      </Link>

      <div className={s.text}>
        <h3 className={s.title}>{product.title}</h3>

        <p className={s.descr}>{product.description}</p>

        <span className={s.price}>цена: {product.price}₽</span>
      </div>

      <div className={s.bottom}>
        {count === "0" && !isMockCount.current ? (
          <button onClick={onBtnClick} className={`${s.btn} ${cs.btn}`}>
            купить
          </button>
        ) : (
          <div className={s.tooltips}>
            <button
              onClick={onSubtractClick}
              className={`${s.tooltip} ${cs.btn}`}
              aria-label="Уменьшить количество продукта на 1.">
              -
            </button>

            <input
              onBlur={onInputBlur}
              onChange={onInputChange}
              className={`${s.tooltip} ${cs.input}`}
              type="text"
              value={isMockCount.current ? "" : count}
              aria-label="Ввести точное количество продукта."
            />

            <button
              onClick={onAddClick}
              className={`${s.tooltip} ${cs.btn}`}
              aria-label="Увеличить количество продукта на 1.">
              +
            </button>
          </div>
        )}
      </div>
    </article>
  );
};
