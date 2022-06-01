import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import entryFieldStore from '../../../src/modules/chat/stores/entryFieldStore';
import {observer} from 'mobx-react-lite';

const Search = () => {
    const {getSearchText, setSearchText} = entryFieldStore;

    return (
        <Wrapper>
            <input
                placeholder="Поиск..."
                type="text"
                className="search"
                value={getSearchText()}
                // onChange={(event => setSearchText(event.currentTarget.value))}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    margin 0;

  @media (max-width: 1420px) {
    .viewType {
      display: none;
    }
  }

  .search {
    background: #FFF;
    width: 100%;
    border-radius: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #000000;
    padding: 12px 24px;
    border: 0.1px solid #f1f1f1;
    outline: none;

    &::placeholder {
      font-size: 14px;
    }
  }
`
export default Search;