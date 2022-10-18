import React, { useState } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";

const AddButton = () => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <div
        className="btn"
        onClick={() => setShowDropdownMenu(!showDropdownMenu)}
      >
        <img src="/img/add-icon.svg" alt="add" />
      </div>
      <DropdownMenu isShow={showDropdownMenu} setShow={setShowDropdownMenu} />
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
  position: relative;

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
