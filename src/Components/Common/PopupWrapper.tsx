import React from 'react';
import styled from "styled-components";

const PopupWrapper = ({children, isShow = false}) => {
    const [show, setShow] = React.useState(isShow)

    if (show) {
        return null
    }

    return (
        <Wrapper onClick={() => setShow(!show)}>
            <div onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;
  background: rgba(162, 86, 71, 0.38);
`

export default PopupWrapper;