import React, { useEffect, useState } from "react";
import Dialog from "./Dialog";
import { CategoryType } from "../../models/CategoryType";
import dialogsStore from "../../stores/dialogsStore";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import ComponentName from "../Header/ComponentName";
import Search from "../Header/Search";
import Tab from "../common/Tab";

type DialogFeedProps = {
  setCurrentCategory: Function;
  currentCategory: CategoryType;
  category: CategoryType;
};

type TabsType = {
  category: CategoryType;
  title: string;
};

const tabs: TabsType[] = [
  {
    category: "all",
    title: "Все",
  },
  {
    category: "place",
    title: "Места",
  },
  {
    category: "event",
    title: "События",
  },
  {
    category: "private",
    title: "Личные",
  },
];

const RoomList = ({
  category,
  setCurrentCategory,
  currentCategory,
}: DialogFeedProps) => {
  const { dialogs, filterDialogs } = dialogsStore;

  useEffect(() => {
    filterDialogs(category);
  }, [category]);

  const tabComponents = (
    <TabsStyle>
      {tabs.map(({ category, title }) => {
        return (
          <div key={category} onClick={() => setCurrentCategory(category)}>
            <Tab active={currentCategory === category}>{title}</Tab>
          </div>
        );
      })}
    </TabsStyle>
  );

  const empty = <Empty>Тут пока нет чатов :(</Empty>;
  const dialogsList = dialogs.map((dialog) => (
    <Dialog key={dialog.abbTitle} dialog={dialog} />
  ));

  return (
    <Content>
      <ComponentName />
      <Search />
      {tabComponents}
      <DialogsList>{!dialogs.length ? empty : dialogsList}</DialogsList>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
`;

const DialogsList = styled.div`
  overflow: auto;
  height: 65vh;
  padding-bottom: 60px;

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: rgba(218, 218, 218, 0.8);
    }
  }

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    opacity: 1;
    border-radius: 8px;
    border: 5px solid #fff;
    transition: 0.5s;
  }
`;

const TabsStyle = styled.div`
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 20px;
`;

const Empty = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  color: #cbcbcb;
  margin-top: 40px;
`;

export default observer(RoomList);
