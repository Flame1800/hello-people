import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import { theme } from '../../styles/theme';
import {observer} from 'mobx-react-lite';
import entryFieldStore from '../../src/modules/chat/stores/entryFieldStore';
import chatStore from '../../src/modules/chat/stores/chatStore';

const Search = () => {
    const {getSearchText, setSearchText} = entryFieldStore;

    return (
        <Wrapper>
            {/* Тут будет ModeSwitcher */}
            <input
                placeholder="Поиск..."
                type="text"
                className="search"
                value={getSearchText()}
                onChange={(event => setSearchText(event.currentTarget.value))}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1420px) {
    .viewType {
      display: none;
    }
  }

  & img {
    width: 32px;
    height: 32px;
    cursor: pointer;
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

export default observer(Search);