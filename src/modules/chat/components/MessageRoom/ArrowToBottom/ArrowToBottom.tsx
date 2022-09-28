import React from "react";

import { observer } from "mobx-react-lite";
import styled from "styled-components";

type ArrowToBottomProps = {
  messagesRef: React.RefObject<HTMLDivElement>;
};

const ArrowToBottom = ({ messagesRef }: ArrowToBottomProps) => {
  const scroll = messagesRef.current;

  // useEffect(() => {
  //   messagesRef.current?.scrollTo(0, messagesRef.current?.scrollHeight);
  // }, []);

  const onClickHandler = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollTo(0, ref.current?.scrollHeight);
  };

  return (
    <>
      {scroll &&
        scroll.scrollTop + scroll.clientHeight + 100 < scroll.scrollHeight && (
          <Wrapper onClick={() => onClickHandler(messagesRef)}>
            <img src="/img/arrow-bottom-icon.svg" alt="down" />
          </Wrapper>
        )}
    </>
  );
};

const Wrapper = styled.a`
  position: fixed;
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 100px;
  right: 10px;
  cursor: pointer;
  z-index: 1;
  background: #ffffff;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export default observer(ArrowToBottom);
