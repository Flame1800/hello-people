import React from "react";
import styled from "styled-components";
import Tab from "./Tab";
import CategoriesStore from "../../Stores/CategoriesStore";
import { observer } from "mobx-react-lite";

type CategoryType = {
  categories: Array<Category>;
};

const Categories = (props: CategoryType) => {
  const {
    setCategories,
    toggleSelectedCategory,
    selectedCategories,
    categories,
  } = CategoriesStore;

  React.useEffect(() => {
    setCategories(categories);
  }, []);

  return (
    <Wrapper>
      {props.categories.map((category: Category) => {
        const isSelectedCategory = selectedCategories.find(
          ({ id }) => id === category.id
        );

        return (
          <div
            key={category.id}
            onClick={() => toggleSelectedCategory(category)}
          >
            <Tab active={isSelectedCategory}>{category.attributes.title}</Tab>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: auto;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 8px;

  > div {
    margin: 10px 0;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (min-width: 768px) {
    width: 900px;
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    align-items: baseline;
    margin: 0 auto;
  }
`;

export default observer(Categories);
