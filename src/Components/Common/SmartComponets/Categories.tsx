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
`

export default Categories;