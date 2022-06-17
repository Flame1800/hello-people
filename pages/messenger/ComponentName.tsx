import React from 'react';
import styled from "styled-components";

const ComponentName = () => {
    return (
        <Wrapper>
            <h3>Мессенджер</h3>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 800;
    color: #7F7F7F;
`
export default ComponentName;