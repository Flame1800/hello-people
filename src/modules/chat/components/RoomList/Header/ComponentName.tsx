import React, { memo } from "react";
import styled from "styled-components";

const ComponentName = memo(() => {
  return (
    <Wrapper>
      <h3>Мессенджер</h3>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;
export default ComponentName;
