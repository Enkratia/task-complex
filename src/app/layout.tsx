import React from "react";

import {
  Header,
  // AuthProvider,
  StoreProvider,
  //   Footer,

  //   // **
  //   ToastLayout,
  //   ScrollToTop,
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
          {/* <AuthProvider> */}
          {/* <ToastLayout /> */}
          {/* <ScrollToTop /> */}
          <Header />
          {children}
          {/* <Footer /> */}
          {/* </AuthProvider> */}
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
