import React from 'react';
import styled from "styled-components";
import Tab from "./Tab";
import CategoriesStore from "../../Stores/CategoriesStore";
import categoriesStore from "../../Stores/CategoriesStore";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";


// @ts-ignore
const Categories = ({categories}) => {
    const {setCategories, toggleSelectedCategory, selectedCategories} = CategoriesStore

    React.useEffect(() => {
        setCategories(categories)
    }, [])


    return (
        <Wrapper>
            {categoriesStore.categories.map((category: any) => {
                const {attributes} = category
                const isSelectedCategory = selectedCategories.find(({id}) => id === category.id)

                return (
                    <div key={category.id} onClick={() => toggleSelectedCategory(category)}>
                        <Tab active={isSelectedCategory}>{attributes.title}</Tab>
                    </div>
                )
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
`

export default observer(Categories);