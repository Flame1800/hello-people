import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import {theme} from "../../../../../styles/theme";

const Search = () => {
    return (
        <Wrapper>
            <input placeholder="Поиск" type="text" className="search"/>
            <Image src='/img/add-dialog.svg' alt='add-dialog' width={36} height={36}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;

  .search {
    background: ${theme.color.lightGray};
    width: 100%;
    border-radius: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    padding: 9px 20px;
    margin-right: 10px;
    border: none;
    outline: none;
  }
`

export default Search;