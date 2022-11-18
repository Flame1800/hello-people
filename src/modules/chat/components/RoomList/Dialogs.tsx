import React, { useEffect, useMemo, useState } from "react";
import Dialog from "./Dialog";
import { CategoryType } from "../../models/CategoryType";
import dialogsStore from "../../stores/dialogsStore";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import ComponentName from "./Header/ComponentName";
import Search from "./Header/Search";
import DialogTabs from "./DialogTabs/DialogTabs";
import PlacesSvg from "./TabSvgIcons/PlacesSvg";
import EventSvg from "./TabSvgIcons/EventSvg";
import MeetsSvg from "./TabSvgIcons/MeetsSvg";
import PersonSvg from "./TabSvgIcons/PersonSvg";
import { DialogProps } from "../../models/DialogProps";

export type TabsType = {
  category: CategoryType;
  title: string;
  icon?: React.ReactChild;
};

const tabs: TabsType[] = [
  {
    category: "all",
    title: "Все",
  },
  {
    category: "place",
    title: "Места",
    icon: <PlacesSvg />,
  },
  {
    category: "event",
    title: "События",
    icon: <EventSvg />,
  },
  {
    category: "meet",
    title: "Встречи",
    icon: <MeetsSvg />,
  },
  {
    category: "private",
    title: "Личные",
    icon: <PersonSvg />,
  },
];

const Dialogs = () => {
  const { dialogs } = dialogsStore;
  const [currentCategory, setCurrentCategory] = useState<CategoryType>(
    tabs[0].category
  );

  const [filteredDialogs, setFilteredDialogs] = useState(dialogs);
  const [searchText, setSearchText] = useState("");

  const searchDialogs = (sDialogs: DialogProps[]) => {
    if (searchText.length === 0) {
      return sDialogs;
    }

    const lowSearch = searchText.toLowerCase();

    return sDialogs.filter((dialog) =>
      dialog.abbTitle?.toLowerCase().includes(lowSearch)
    );
  };

  useEffect(() => {
    if (currentCategory === "all") {
      return setFilteredDialogs(searchDialogs(dialogs));
    }

    const results = searchDialogs(
      dialogs.filter((d) => d.category === currentCategory)
    );
    setFilteredDialogs(results);
  }, [currentCategory, dialogs, searchText]);

  const empty = <Empty>Тут пока нет чатов :(</Empty>;
  const dialogsList = useMemo(
    () =>
      filteredDialogs.map((dialog) => (
        <Dialog key={dialog?.id} dialog={dialog} />
      )),
    [filteredDialogs]
  );

  return (
    <Content>
      <ComponentName />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <DialogTabs
        tabs={tabs}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <DialogsList>
        {filteredDialogs.length === 0 ? empty : dialogsList}
      </DialogsList>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

const DialogsList = styled.div`
  overflow: auto;
  padding-bottom: 20px;
  height: calc(80vh - 212px);

  @media screen and (max-width: 600px) {
    height: calc(100vh - 212px);
  }

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

const Empty = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  color: #cbcbcb;
  margin-top: 40px;
`;

export default observer(Dialogs);
