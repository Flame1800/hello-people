import React, { useState } from 'react';
import styled from "styled-components";
import DropdownMenu from './DropdownMenu';
import UiStateStore from '../../../Stores/UiStateStore';
import { theme } from '../../../../styles/theme';
import Link from "next/link";

const AddButton = () => {
    const [showDropdownMenu, setShowDropdownMenu] = useState(false)

    return (
        <Wrapper>
            <div className='btn' onClick={() => setShowDropdownMenu(!showDropdownMenu)}>
                <img src="/img/add-icon.svg" alt="add"/>
                {/*<img className='dropdown' src="/img/caret-down.svg" alt="down"/>*/}
            </div>
            {showDropdownMenu && (
              <DropdownMenu/>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  padding: 3px 0;

  .btn {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    font-weight: 700;

    img {
      width: 16px;
      height: 16px;
    }
  }

  .dropdown {
    width: 24px !important;
    height: 24px !important;
    margin-left: 20px;
    position: absolute;
    right: 15px;
  }

  #demo-positioned-menu {
    border-radius: 32px;
  }
`;

export default AddButton;
