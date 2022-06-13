import React from 'react'
import styled from 'styled-components'
import CommentsInput from './CommentInput'
import CommentsStore from '../../Stores/CommentsStore'
import {observer} from "mobx-react-lite";
import CommentList from "./CommentList";

const CommentsBlock = ({id, model}) => {
    const {comments} = CommentsStore

    React.useEffect(() => {
        // установка коментов и модели
        CommentsStore.setComments(id, model)
        CommentsStore.setModel(model)
    }, [])


    return (
        <Wrapper id='comments'>
            <Block>
                <Title>Комментарии <CommentsLength>{comments.length}</CommentsLength></Title>
                <CommentsInput/>
                <CommentList comments={comments}/>
                {comments.length > 15 && <CommentsInput/>}
            </Block>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  max-width: 840px;
  background: #fff;
  border-radius: 20px;
  margin: 40px auto;
`

const Block = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 760px;
  padding: 40px 20px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  margin: 0px auto 16px;
`

const CommentsLength = styled.div`
  font-size: 16px;
  color: #FF5538;
  margin-left: 12px;
`

export default observer(CommentsBlock)
