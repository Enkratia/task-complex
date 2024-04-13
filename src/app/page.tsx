import React from "react";
import { Metadata } from "next";

import { Cart, Products, Reviews } from "../components";

import cs from "../scss/helpers.module.scss";

export const metadata: Metadata = {
  title: "Тестовое задание",
  description: "Тестовое задание для 'O-комплекс'",
};

const Home: React.FC = () => {
  return (
    <main>
      <h1 className={cs.srOnly}>Тестовое задание</h1>

      <Reviews />
      <Cart />
      <Products />
    </main>
  );
};

export default Home;
