import React from 'react';
import styled from "styled-components";
import Tab from "../Tab";


// @ts-ignore
const Categories = ({categories}) => {
    const [activeCategory, setCategory] = React.useState(null)

    return (
        <Wrapper>
            {categories.map(({name, id}) => {
                return (
                    <div key={id} onClick={() => setCategory(name)}>
                        <Tab active={activeCategory === name}>{name}</Tab>
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