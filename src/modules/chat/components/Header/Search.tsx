import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import {theme} from "../../../../../styles/theme";
import {observer} from 'mobx-react-lite';
import entryFieldStore from '../../stores/entryFieldStore';

const Search = () => {
    const {getSearchText, setSearchText} = entryFieldStore;

    return (
        <Wrapper>
            <input
                placeholder="Поиск"
                type="text"
                className="search"
                value={getSearchText()}
                onChange={(event => setSearchText(event.currentTarget.value))}
            />
            <Image src='/img/add-dialog.svg' alt='add-dialog' width={36} height={36}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 380px;
  display: flex;
  margin-top: 10px;

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

export default observer(Search);