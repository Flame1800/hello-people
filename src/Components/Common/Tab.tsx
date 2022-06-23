import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/theme";

type TabProps = {
    active?: boolean;
}

const Tab: React.FC<TabProps> = ({children, active}) => {
    return (
        <Wrapper active={active}>{children}</Wrapper>
    );
};

const Wrapper = styled.div<{ active: boolean }>`
  width: max-content;
  border-radius: 16px;
  padding: 8px 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  display: inline-block;
  margin-right: 7px;
  color: ${({active}) => active ? 'white' : 'black'};
  background: ${({active}) => active ? 'linear-gradient(266.34deg, #FC5130 16.27%, #FF4CA2 94.58%)' : '#fff'};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export default Tab;