import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../styles/theme";

type TabProps = {
    active: boolean;
}

const Tab: React.FC<TabProps> = ({children, active}) => {
    return (
        <Wrapper active={active}>{children}</Wrapper>
    );
};

const Wrapper = styled.div<{ active: boolean }>`
  border: 1px solid #e1e1e1;
  border-radius: 16px;
  padding: 8px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${({active}) => active ? 'white' : 'black'};
  background: ${({active}) => active ? theme.color.gray : 'none'};
  cursor: pointer;

  &:hover {
    background: ${({active}) => active ? theme.color.gray : '#FAFAFA'};
  }
`

export default Tab;