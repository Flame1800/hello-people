import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";

const tabs = ["Места", "Мероприятия", "Встречи"];

const UserContentTabs = () => {
  return (
    <Wrapper>
      {tabs.map((tab: any) => {
        return <Tab active={false}>{tab}</Tab>;
      })}
    </Wrapper>
  );
};

const Tab = styled.div<{ active: boolean }>`
  border: ${({ active }) =>
    active ? "1px solid #FAFAFA" : "1px solid #c5c5c5"};
  border-radius: 16px;
  padding: 4px 12px;
  height: 32px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  display: inline-block;
  color: ${({ active }) => (active ? "white" : "#696969")};
  background: ${({ active }) => (active ? theme.color.gray : "none")};
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export default UserContentTabs;
