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
  border: 1px solid ${theme.color.gray};
  border-radius: 22px;
  padding: 8px 22px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: inline-block;
  margin-right: 7px;
  color: ${({active}) => active ? 'white' : 'black'};
  background: ${({active}) => active ? theme.color.gray : 'none'};
`

export default Tab;