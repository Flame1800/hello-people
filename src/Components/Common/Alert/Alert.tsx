import React from "react";
import { theme } from "../../../../styles/theme";
import styled from "styled-components";
import { useLocalStorage } from "usehooks-ts";

type Props = {
  title: string;
  children: any;
};

const Alert = ({ title, children }: Props) => {
  const [close, setClose] = useLocalStorage("betaAlert", false);

  if (close) {
    return null;
  }

  return (
    <Wrapper>
      <Close
        src="/img/white-close.svg"
        alt="Закрыть"
        onClick={() => setClose((prevValue: boolean) => !prevValue)}
      />
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  max-width: 900px;
  padding: 30px;
  width: 100%;
  bottom: 50px;
  left: 0;
  right: 0;
  border-radius: 15px;
  background: ${theme.color.orange};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 5px 10px -2px rgba(86, 86, 86, 0.63);
`;

const Close = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: 19px;
  line-height: 27px;
  margin-bottom: 5px;
`;

const Body = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  max-width: 800px;
`;

export default Alert;
