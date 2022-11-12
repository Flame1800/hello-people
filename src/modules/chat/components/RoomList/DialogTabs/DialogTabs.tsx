import React from "react";
import Tab from "../../common/Tab";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { CategoryType } from "../../../models/CategoryType";
import { TabsType } from "../Dialogs";

type Props = {
  currentCategory: CategoryType;
  setCurrentCategory: Function;
  tabs: TabsType[];
};

const DialogTabs = ({ currentCategory, setCurrentCategory, tabs }: Props) => {
  return (
    <TabsStyle>
      {tabs.map(({ category, title, icon }) => {
        return (
          <a
            data-tip
            data-for={category}
            key={category}
            onClick={() => setCurrentCategory(category)}
          >
            <Tab active={currentCategory === category}>
              {title === "Все" ? title : icon}
            </Tab>
            <ReactTooltip id={category} effect="solid">
              <p>{title}</p>
            </ReactTooltip>
          </a>
        );
      })}
    </TabsStyle>
  );
};

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

export default DialogTabs;
