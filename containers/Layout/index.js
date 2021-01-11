import React from "react";
import { ThemeProvider } from "styled-components";

import Navbar from "../../components/shared/navbar";
import { theme } from "../../theme";

const Layout = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
