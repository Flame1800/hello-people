import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/theme";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";

const AddButton = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Wrapper>
            <div className='btn' onClick={handleClick}>
                <img src="/img/add-icon.svg" alt="add"/>
                {/*<img className='dropdown' src="/img/caret-down.svg" alt="down"/>*/}
            </div>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Link href='/events/add'>
                    <a><MenuItem onClick={handleClose}>Добавить событие</MenuItem></a>
                </Link>
                <Link href='/places/add'>
                    <a><MenuItem onClick={handleClose}>Добавить место</MenuItem></a>
                </Link>
                <Link href='/meets/add'>
                    <a><MenuItem onClick={handleClose}>Добавить встречу</MenuItem></a>
                </Link>
            </Menu>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: 32px;
  background: #fff;
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
  border: 2px solid #fff;

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
    border-radius: 40px;
  }
`

export default AddButton;