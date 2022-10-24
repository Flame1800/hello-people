import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";

type Props = {
  active?: {
    value: string;
    title: string;
  };
  setActive: Function;
};

const tabs = [
  {
    title: "Места",
    value: "places",
  },
  {
    title: "Мероприятия",
    value: "events",
  },
  {
    title: "Встречи",
    value: "meets",
  },
];

const UserContentTabs = ({ active, setActive }: Props) => {
  useEffect(() => {
    setActive(tabs[0].value);
  }, []);

  return (
    <Wrapper>
      {tabs.map((tab: any) => {
        return (
          <Tab
            key={tab.value}
            onClick={() => setActive(tab.value)}
            active={tab.value === active}
          >
            {tab.title}
          </Tab>
        );
      })}
    </Wrapper>
  );
};

const Tab = styled.div<{ active: boolean }>`
  border-radius: 32px;
  padding: 4px 16px;
  height: 35px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: ${({ active }) => (active ? "white" : "#696969")};
  background: ${({ active }) => (active ? theme.color.gray : "white")};
  cursor: pointer;
  margin: 0 5px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export default UserContentTabs;
