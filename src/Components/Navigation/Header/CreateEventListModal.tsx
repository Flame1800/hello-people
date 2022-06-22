import React from 'react';
import styled from 'styled-components';
import UiStateStore from '../../../Stores/UiStateStore';
import PopupWrapper from '../../Common/PopupWrapper';
import {observer} from "mobx-react-lite";

const CreateEventListModal = () => {
    const {toggleCreateEventListModal, createEventListModal} = UiStateStore

    return (
        <PopupWrapper setShow={toggleCreateEventListModal} show={createEventListModal}>
            <Wrapper>
                <div className='title'>Что хотите создать?</div>
                <div className='list'>
                    <ListItem href='places/add'>Место</ListItem>
                    <ListItem href='meets/add'>Встреча</ListItem>
                    <ListItem href='events/add'>Мероприятие</ListItem>
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
    font-weight: 600;
    margin-bottom: 20px;
  }
`

const ListItem = styled.a`
    
`

export default observer(CreateEventListModal)