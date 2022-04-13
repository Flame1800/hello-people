import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/theme";
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
            <Link href='/events/add'>
                <a>
                    <div className='btn'>
                        <img src="/img/add-icon.svg" alt="add"/>
                        Добавить мероприятие
                    </div>
                </a>
            </Link>
            <img onClick={handleClick} className='dropdown' src="/img/caret-down.svg" alt="down"/>
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
  border: 2px solid #FFB7A9;
  box-sizing: border-box;
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 80px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border: 2px solid ${theme.color.orange};
    background: #fff8f8;
  }

  .btn {
    display: flex;
    align-items: center;
    border-right: 2px solid #DADADA;
    padding-right: 10px;
    padding-left: 15px;

    img {
      width: 20px;
      height: 20px;
      margin-right: 7px;
    }
  }

  .dropdown {
    margin-right: 10px;
  }

  #demo-positioned-menu {
    border-radius: 40px;
  }
`

export default AddButton;