import React, { useState, useEffect } from "react";

import Header from '../Header/Header'
import Routers from "../../router/Routers";
import Footer from "../Footer/Footer";
import SideMenu from "../SideMenu";
import './layout.css'
import SideBarRouters from "../../sideBarRouter/router";
import { Container } from "reactstrap";



const Layout = () => {
  const [sideBar, setSidebar] = useState(() => {
    const storedSidebar = localStorage.getItem('sidebar');
    return storedSidebar ? JSON.parse(storedSidebar) : false;
  });

  useEffect(() => {
    localStorage.setItem('sidebar', JSON.stringify(sideBar));
  }, [sideBar]);

  const toggle = (val) => {
    setSidebar(val);
  };
  return (
    <>
      <Header toggle={toggle} ></Header>
      {sideBar &&
        <Container className="SideMenuAndPageContent">
          <SideMenu ></SideMenu>
          <SideBarRouters></SideBarRouters>
        </Container>
      }
      {!sideBar && <Routers></Routers>}
      <Footer></Footer>
    </>
  )
}

export default Layout