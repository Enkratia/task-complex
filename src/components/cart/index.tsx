"use client";

import React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { usePostOrderMutation } from "../../redux/backendApi";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectProducts } from "../../redux/cartSlice/selectors";
import { setProducts } from "../../redux/cartSlice/slice";

import {
  AlertPostOrderPopup,
  FormPhoneInput,
  FormSubmit,
  SkeletonText,
  SuccessOrderPopup,
} from "../../components";

import cs from "../../scss/helpers.module.scss";
import s from "./cart.module.scss";
import Chevron from "../../../public/img/default/chevron.svg";

const FormSchema = z.object({
  phone: z.string().min(18, "Неверный номер телефона").max(18, "Неверный номер телефона"),
});

type InputType = z.infer<typeof FormSchema>;

export const Cart: React.FC = () => {
  const [phoneDefaultValue, setPhoneDefaultValue] = React.useState("");

  const [isMore, setIsMore] = React.useState(false);

  const [isStorageChecked, setIsStorageChecked] = React.useState(false);

  const [isShowSuccessPost, setIsShowSuccessPost] = React.useState(false);
  const [isShowErrorPost, setIsShowErrorPost] = React.useState(false);

  const dispatch = useAppDispatch();
  const { cart, isCartChanged } = useAppSelector(selectProducts);

  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, submitCount },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  // **
  const [postOrder, { reset }] = usePostOrderMutation();

  // **
  React.useEffect(() => {
    const lsCart = window.localStorage.getItem("o-complex-cart");
    const lsCartParsed = lsCart ? JSON.parse(lsCart) : [];

    dispatch(setProducts(lsCartParsed));
    setIsStorageChecked(true);

    // **
    const lsPhone = window.localStorage.getItem("o-complex-phone");
    lsPhone && setPhoneDefaultValue(lsPhone);
  }, []);

  React.useEffect(() => {
    if (isCartChanged) {
      window.localStorage.setItem("o-complex-cart", JSON.stringify(cart));
    }
  }, [cart, isCartChanged]);

  // **
  const onSubmit = async () => {
    const cartToSend = cart.map(({ product, count }) => ({
      id: product.id,
      quantity: +count,
    }));

    const order = {
      phone: getValues().phone.replace(/\D/g, ""),
      cart: cartToSend,
    };

    const res = await postOrder(order);

    if ("error" in res) {
      setIsShowErrorPost(true);
      reset();
      return;
    }

    if ("data" in res) {
      setIsShowSuccessPost(true);
      reset();
    }
  };

  const onPhoneValidation = (value: string) => {
    setValue("phone", value, { shouldValidate: !!submitCount });
    window.localStorage.setItem("o-complex-phone", getValues().phone);
  };

  const onMoreClick = () => {
    setIsMore((b) => !b);
  };

  // **
  const calcSum = () => {
    return cart.reduce((prev, next) => {
      return prev + +next.count * next.product.price;
    }, 0);
  };

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.containerNarrow}`}>
        <h2 className={s.title}>Добавленные товары</h2>

        <ul className={s.products}>
          {!isStorageChecked
            ? [...Array(2)].map((_, i) => (
                <li key={i} className={s.product}>
                  <SkeletonText />
                </li>
              ))
            : (!isMore ? cart.slice(0, 2) : cart).map(({ product, count }) => (
                <li key={product.id} className={s.product}>
                  <h3 className={s.data}>{product.title}</h3>
                  <span className={s.data}>x{count}</span>
                  <span className={s.data}>{+count * product.price}₽</span>
                </li>
              ))}

          {isMore && (
            <li className={`${s.product} ${s.productSum}`}>
              <h3 className={s.data}>Итого:</h3>
              <span className={s.data}></span>
              <span className={s.data}>{calcSum()}₽</span>
            </li>
          )}

          {cart.length === 0 && isStorageChecked && (
            <li className={s.product}>
              <h3 className={s.data}>Нет товаров</h3>
              <span className={s.data}></span>
              <span className={s.data}></span>
            </li>
          )}
        </ul>

        {cart.length > 0 && (
          <button
            onClick={onMoreClick}
            className={`${s.more} ${isMore ? s.moreActive : ""}`}
            aria-label={isMore ? "Скрыть" : "Показать"}>
            <span className={s.moreText}>{isMore ? "меньше" : "больше"}</span>
            <Chevron aria-hidden="true" />
          </button>
        )}

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <FormPhoneInput
            id=""
            error={errors.phone?.message}
            classNameWrapper={`${s.inputWrapper} ${cs.inputWrapper}`}
            classNameInput={`${s.input} ${cs.input}`}
            mask="+7 (000) 000 00-00"
            name="phone"
            placeholder="+7 (___) ___ __-__"
            defaultValue={phoneDefaultValue}
            onPhoneValidation={onPhoneValidation}
          />

          <FormSubmit
            classNameWrapper={s.btnWrapper}
            classNameBtn={`${s.btn} ${cs.btn}`}
            text="заказать"
          />
        </form>
      </div>

      {isShowSuccessPost && (
        <SuccessOrderPopup onSuccessClick={() => setIsShowSuccessPost(false)} />
      )}

      {isShowErrorPost && <AlertPostOrderPopup onAlertClick={() => setIsShowErrorPost(false)} />}
    </section>
  );
};
