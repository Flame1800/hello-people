import React from 'react';
import styled from "styled-components";
import HeaderServicesPage from "../../src/Components/Common/HeaderServicesPage";

const Places = () => {
    return (
        <Wrapper>
            <HeaderServicesPage link='/places/add'>МЕСТА</HeaderServicesPage>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 50px 0;
`

export default Places;