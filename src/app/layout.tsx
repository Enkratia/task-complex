import React from "react";

import {
  Header,
  StoreProvider,

  // **
  ToastLayout,
  ScrollToTop,
} from "../components";

import "./globals.scss";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ToastLayout />
          <ScrollToTop />
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
