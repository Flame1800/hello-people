import React, {Component} from 'react';
import NavBarMobile from "../Components/Navigation/NavBarMobile/NavBarMobile";
import styled from "styled-components";
import NavBar from "../Components/Navigation/NavBar";
import Header from "../Components/Navigation/Header";

type Layout = {
    children: Component
}

const MainLayout: React.FC<Layout> = ({children}) => {
    return (
        <Wrapper>
            <div className="inner-content">
                {children}
            </div>
            <Header/>
            <NavBarMobile/>
            <NavBar/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .inner-content {
    max-width: 1000px;
    margin: 0 auto;

    @media (min-width: 1424px) {
      padding-top: 40px;
    }
  }
`

export default MainLayout;