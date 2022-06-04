import React from 'react';
import CommentCard from "./CommentCard";
import styled from "styled-components";
import {observer} from "mobx-react-lite";

type PropTypes = {
    innerComments: any
}

const InnerCommentsList: React.FC<PropTypes> = ({innerComments}) => {
    const [show, setShow] = React.useState(true)

    if (!show) {
        return <OpenBtn onClick={() => setShow(true)}>посмотреть ответы</OpenBtn>
    }

    return (
        <Wrapper>
            <Branch onClick={() => setShow(false)}/>
            {innerComments.map((comment: any) => (
                <CommentCard key={comment.id} comment={comment}/>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: relative;
  margin-left: 35px;
  padding-left: 10px;
  margin-bottom: 20px;
`

const Branch = styled.div`
  width: 6px;
  border-left: 2px solid #c8c8c8;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1px;

  &:hover {
    border-left: 2px solid #2196f3;
    background: #ffffff;
    width: 4px;
    margin-right: 7px;
  }
`

const OpenBtn = styled.div`
  margin-left: 40px;
  margin-bottom: 20px;
  color: #17609a;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
`;

export default observer(InnerCommentsList);