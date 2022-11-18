import React, { useLayoutEffect, useRef } from "react";
import API from "../../../Helpers/API";
import styled from "styled-components";

type Props = {
  url: string;
  title: string;
  image?: string;
};

const ShareVkButton = ({ url, title, image }: Props) => {
  const vkRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    vkRef.current.innerHTML = VK.Share.button(
      {
        url,
        title,
        image,
        noparse: false,
      },
      {
        type: "custom",
        text: "<div class='btn'>Поделиться <img src='/img/vk-logo.svg' width='24' height='24' /></div>",
      }
    );
  }, []);

  return <Button ref={vkRef}></Button>;
};

const Button = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
  }

  .btn {
    color: #414141;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    padding: 7px;
    transition: 0.2s;
    border: 1px solid rgb(217, 217, 217);

    img {
      margin-left: 10px;
    }
  }

  .btn:hover {
    border: 1px solid rgba(239, 239, 239, 0.83);
    background: rgba(239, 239, 239, 0.83);
  }
`;

export default ShareVkButton;
