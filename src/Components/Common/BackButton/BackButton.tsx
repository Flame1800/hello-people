import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import BackSvg from "./Back.svg";

type Props = {
  link?: string;
};

const BackButton = ({ link }: Props) => {
  const router = useRouter();

  const openLinkHandle = () => {
    if (!link) {
      return router.back();
    }

    return router.push(link);
  };

  return (
    <Wrapper onClick={openLinkHandle}>
      <BackSvg />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  & img {
    width: 24px;
    height: 24px;
  }
`;

export default BackButton;
