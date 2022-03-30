import React, {Dispatch, SetStateAction} from 'react';

import styled from "styled-components";

type ModalProps = {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    content: JSX.Element,
};

const Modal: React.FC<ModalProps> = (props) => {
    const {active, setActive, content} = props;

    if (!active) {
        return null
    }

    return (
        <Wrapper onClick={() => setActive(false)}>
            <div className="head">
                <img src='/img/back-icon.svg'/>
                <div className="title">Информация</div>
            </div>
            <div className='params' onClick={e => e.stopPropagation()}>
                {content}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  z-index: 10;

  .head {
    display: flex;
    margin-bottom: 40px;

    .title {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      margin-left: 20%;
    }
  }


  .content {
    padding: 20px;
    border-radius: 12px;
  }
`

export default Modal;