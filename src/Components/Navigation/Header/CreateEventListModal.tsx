import React from 'react';
import styled from 'styled-components';
import UiStateStore from '../../../Stores/UiStateStore';
import PopupWrapper from '../../Common/PopupWrapper';
import {observer} from "mobx-react-lite";
import {theme} from "../../../../styles/theme";
import Link from "next/link";

const CreateEventListModal = () => {
    const {toggleCreateEventListModal, createEventListModal} = UiStateStore

    return (
        <PopupWrapper setShow={toggleCreateEventListModal} width={600} show={createEventListModal}>
            <Wrapper>
                <div className='title'>Что хотите создать?</div>
                <div className='list'>
                    <Link href='/places/add'>
                        <ListItem onClick={toggleCreateEventListModal}>
                            <div className='listItemImg'>
                                <img src="/img/place-icon.png" alt="" />
                            </div>
                            <div className='listItemTitle'>
                                Место
                            </div>
                        </ListItem>
                    </Link>
                    <Link href='/meets/add'>
                        <ListItem onClick={toggleCreateEventListModal}>
                            <div className='listItemImg'>
                                <img src="/img/meet-icon.png" alt="" />
                            </div>
                            <div className='listItemTitle'>
                                Встреча
                            </div>
                        </ListItem>
                    </Link>
                    <Link href='/events/add'>
                        <ListItem onClick={toggleCreateEventListModal}>
                            <div className='listItemImg'>
                                <img src="/img/event-icon.png" alt="" />
                            </div>
                            <div className='listItemTitle'>
                                Мероприятие
                            </div>
                        </ListItem>
                    </Link>
                </div>
            </Wrapper>
        </PopupWrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 100%;

  .title {
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 48px;
  }

  .list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .list {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .listItemTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    width: 100%;
  }

  .listItemImg {
    display: flex;
    margin-left: 16px;
    position: absolute;

    & img {
      width: 56px;
      height: 56px;
    }
  }
`

const ListItem = styled.div`
    display: flex;
    align-items: center;
    padding: 32px;
    box-shadow: ${theme.boxShadow.mainComponent};
    border-radius: 16px;
    margin: 16px 0 16px 0;
    width: 100%;
    cursor: pointer;
`

export default observer(CreateEventListModal)