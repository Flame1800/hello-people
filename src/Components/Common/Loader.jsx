import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

const Loader = () => {
    return (
        <Wrapper>
            <CircularProgress color="error" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

export default Loader;