import React from "react";
import { observer } from "mobx-react-lite";
import Nav from "./Nav/Nav";
import { Wrapper, Content } from "./SideBar.style";
import Actual from "./Actual/Actual";
import Footer from "./Actual/Footer/Footer";

const SideBar = () => {
  return (
    <Wrapper>
      <Content>
        <Nav />
        <Actual />
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default observer(SideBar);
