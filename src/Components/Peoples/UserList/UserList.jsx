import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/theme";
import UserStore from "../../../Stores/UserStore";
import {useRouter} from "next/router";

const UserList = () => {
    const router = useRouter()

    const changeCategory = (category) => {
        router.push(`?category=${category}`, undefined, {shallow: true})
    }

    return (
        <Wrapper>
            <div
                className={router.query.category === 'all' || router.asPath === '/search/peoples' ? 'tab tab_active' : 'tab'}
                onClick={() => changeCategory('all')}
            >
                Все люди
            </div>
            {UserStore.user &&
            <div
                className={router.query.category === 'friends' ? 'tab tab_active' : 'tab'}
                onClick={() => changeCategory('friends')}
            >
                Мои знакомые
            </div>}
            {UserStore.user &&
            <div
                className={router.query.category === 'subscribers' ? 'tab tab_active' : 'tab'}
                onClick={() => changeCategory('subscribers')}
            >
                Хотят познакомится
            </div>}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
  border-bottom: 1px solid #dadada;

  .tab {
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    border-bottom: 3px solid #fff;

    &_active {
      border-bottom: 3px solid ${theme.color.orange};
    }
  }
`

export default UserList;