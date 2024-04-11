"use client";

import React from "react";

import { FormPhoneInput, FormSubmit } from "../../components";

import cs from "../../scss/helpers.module.scss";
import s from "./cart.module.scss";

export const Cart: React.FC = () => {
  const onPhoneValidation = (a: string) => {
    console.log(a);
  };

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.containerNarrow}`}>
        <h2 className={s.title}>Добавленные товары</h2>

        <ul className={s.products}>
          <li className={s.product}>
            <h3 className={s.data}>товар 1</h3>
            <span className={s.data}>x3</span>
            <span className={s.data}>3645₽</span>
          </li>

          <li className={s.product}>
            <h3 className={s.data}>товаррр 2</h3>
            <span className={s.data}>x44</span>
            <span className={s.data}>53460₽</span>
          </li>
        </ul>

        <form>
          {/* <FormPhoneInput /> */}
          {/* <input type="text" /> */}
          <FormPhoneInput
            id="5"
            error=""
            classNameWrapper={`${s.inputWrapper} ${cs.inputWrapper}`}
            classNameInput={`${s.input} ${cs.input}`}
            mask="000 000 00 00"
            name="contactPhone"
            placeholder="Phone"
            defaultValue=""
            onPhoneValidation={onPhoneValidation}
          />

          {/* <button type="submit">заказать</button> */}

          <FormSubmit
            classNameWrapper=""
            classNameBtn={`${s.submit} ${cs.btn} ${cs.btnLg}`}
            text="заказать"
            requestStatus={{ "data-test": "test" }}
          />
        </form>
      </div>
    </section>
  );
};
