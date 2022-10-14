import React from "react";
import { observer } from "mobx-react-lite";
import Nav from "./Nav/Nav";
import { Wrapper } from "./SideBar.style";
import Actual from "./Actual/Actual";

const SideBar = () => {
  return (
    <Wrapper>
      <Nav />
      <Actual />
    </Wrapper>
  );
};

export default observer(SideBar);
