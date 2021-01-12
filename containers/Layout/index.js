import React from "react";
import { ThemeProvider } from "styled-components";

import Navbar from "../../components/shared/navbar";
import { theme } from "../../theme";
import { GlobalCSS } from "../../public/styles/style";

const Layout = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
