import React from 'react';
import styled from "styled-components";
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";

const Meets = () => {
    return (
        <Wrapper>
            <HeaderServicesPage link='/meets/add'>ВСТРЕЧИ</HeaderServicesPage>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 50px 0;
`


export default Meets;