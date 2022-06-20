import React from 'react';
import CommentCard from "./CommentCard";
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import { Tooltip } from '@mui/material';

type PropTypes = {
    innerComments: any
}

const InnerCommentsList: React.FC<PropTypes> = ({innerComments}) => {
    const [show, setShow] = React.useState(true)

    if (!show) {
        return <OpenBtn onClick={() => setShow(true)}>Посмотреть ответы ({innerComments.length})</OpenBtn>
    }

    return (
        <Wrapper>
            <Branch onClick={() => setShow(false)}/>
            <List>
                {innerComments.map((comment: any) => (
                    <CommentCard key={comment.id} comment={comment}/>
                ))}
            </List>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const Branch = styled.div`
  width: 32px;
  margin-right: 16px;
  /* background-color: #ff7c7c1a; */
  background-image: url("/img/up.svg");
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  cursor: pointer;
  top: 0;
  bottom: 0;
  transition: .1s ease-in-out;
  background-color: #ff7c7c1a;
  background-size: 12px;

  & img {
    filter: invert(80%) sepia(0%) saturate(0%) hue-rotate(157deg) brightness(91%) contrast(84%);
  }

  &:hover {
    background-color: rgba(255, 166, 166, 0.37);
    transition: .2s ease-in-out;
  }
`

const OpenBtn = styled.div`
  margin-top: 8px;
  color: #ff7c7c;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
`;

export default observer(InnerCommentsList);