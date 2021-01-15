import React from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import Navbar from "../../components/shared/navbar";
import { theme } from "../../theme";
import { GlobalCSS } from "../../public/styles/style";
import Footer from '../../components/footer';
import TopMenu from "../../components/navBar";
import { Form, Container, Row, Col } from "reactstrap";


const Layout = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://use.typekit.net/pgv8psy.css" />
      </Head>
      <GlobalCSS />
      <Container className='w-100'>
        <Row>
          <Col sm={4}>
          </Col>
          <Col sm={7} className='w-100'>
            <TopMenu />
          </Col>
        </Row>
      </Container>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
