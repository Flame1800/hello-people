import React from 'react';
import styled from "styled-components";
import Tab from "../Tab";


// @ts-ignore
const Categories = ({categories}) => {
    const [activeCategory, setCategory] = React.useState(null)

    return (
        <Wrapper>
            {categories.map((category: any) => {
                return (
                    <div key={category.id} onClick={() => setCategory(category.name)}>
                        <Tab active={activeCategory === category.name}>{category.name}</Tab>
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
  cursor: pointer;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    width: 0;
  }


  @media (min-width: 768px) {
    width: 680px;
    flex-wrap: wrap;
    height: 90px;
    justify-content: center;
    align-items: baseline;
    margin: 0 auto;
  }
`

export default Categories;