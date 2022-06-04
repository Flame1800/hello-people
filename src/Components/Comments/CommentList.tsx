import styled from 'styled-components'
import _ from 'lodash'
import React from 'react'
import CommentCard from "./CommentCard";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";


type PropTypes = {
    comments: any
}


const CommentList: React.FC<PropTypes> = ({comments}) => {
    const clearComments = _.reverse(comments.filter(comment => !comment.attributes.replyToComment?.data))

    return (
        <Wrapper>
            {clearComments.map((comment: any) => (
                <CommentCard key={comment.id} comment={comment}/>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding-left: ${({isResponse}) => (isResponse ? '15px' : '0')};
  position: relative;
`


export default observer(CommentList)
