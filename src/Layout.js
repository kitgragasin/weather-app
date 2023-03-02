import { Container } from "@mui/material";
import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Container maxWidth="md">
        <Navbar/>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;