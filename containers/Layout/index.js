import React from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import Navbar from "../../components/shared/navbar";
import { theme } from "../../theme";
import { GlobalCSS } from "../../public/styles/style";

const Layout = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/pgv8psy.css"
        ></link>
      </Head>
      <GlobalCSS />
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
