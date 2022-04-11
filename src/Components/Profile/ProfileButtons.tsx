import React from 'react';
import styled from "styled-components";

const ProfileButtons = () => {
    return (
        <Wrapper>
            <div className="btn-gray">
                Редактировать
                <img src="/img/edit-icon.svg" alt="иконка"/>
            </div>
            <div className="btn-gray">
                Добавить фото
                <img src="/img/add-gray-icon.svg" alt="иконка"/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;

  .btn-gray {
    width: 48%;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid #949494;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    color: #585858;

    img {
      margin-left: 5px;
    }
  }
`

export default ProfileButtons;