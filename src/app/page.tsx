import React from "react";
import { Metadata } from "next";

import { Cart, Reviews } from "../components";

import cs from "../scss/helpers.module.scss";

export const metadata: Metadata = {
  title: "Тестовое задание",
};

const Home: React.FC = () => {
  return (
    <main>
      <h1 className={cs.srOnly}>Тестовое задание</h1>

      <Reviews />
      <Cart />
    </main>
  );
};

export default Home;

// **
// await new Promise((resolve) => {
//   setTimeout(() => resolve(""), 6000);
// });
