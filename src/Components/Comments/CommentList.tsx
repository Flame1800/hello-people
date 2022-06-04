import CommentCard from 'src/components/Comment/CommentCard/CommentCard'
import styled from 'styled-components'
import _ from 'lodash'
import React from 'react'

const CommentList = ({comments, isResponse}) => {
    const [show, setShow] = React.useState(true)

    const clearComments = isResponse
        ? _.reverse(comments)
        : _.reverse(comments.filter(comment => !comment.replyToId))

    if (!show) {
        return <OpenBtn onClick={() => setShow(true)}>Открыть ветку</OpenBtn>
    }

    return (
        <Wrapper isResponse={isResponse}>
            {isResponse && <Branch onClick={() => setShow(false)}/>}
            <div>
                {clearComments.map(comment => (
                    <CommentCard key={comment.id} comment={comment}/>
                ))}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding-left: ${({isResponse}) => (isResponse ? '15px' : '0')};
  position: relative;
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
  margin-left: 50px;
  margin-bottom: 20px;
  color: #17609a;
  cursor: pointer;
  font-size: 14px;
`

export default CommentList
