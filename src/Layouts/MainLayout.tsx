import React, {Component} from 'react';
import NavBarMobile from "../MobileComponents/NavBarMobile/NavBarMobile";
import styled from "styled-components";

type Layout = {
    children: Component
}

const MainLayout: React.FC<Layout> = ({children}) => {
    return (
        <Wrapper>
            {children}
            <NavBarMobile/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding-bottom: 80px;
`

export default MainLayout;