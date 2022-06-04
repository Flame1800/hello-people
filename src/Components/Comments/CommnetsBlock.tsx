import React from 'react'
import styled from 'styled-components'
import CommentsInput from './CommentInput'
import CommentList from 'src/components/Comment/CommentList'
import {observable} from "mobx";
import CommentsStore from '../../Stores/CommentsStrore'

const CommentsBlock = ({model, comments}) => {

    React.useEffect(() => {
        // поставить кометны
        CommentsStore.setComments(comments)
        CommentsStore.setMode('event')
    }, [])

    // достать комменты

    return (
        <Wrapper>
            <Block>
                <Title>Комментарии • 15</Title>
                <CommentsInput/>
                {/*<CommentList comments={comments}/>*/}
                {/*{comments.length > 15 && <CommentsInput/>}*/}
            </Block>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin-bottom: 100px;
  margin-top: 60px;
  width: ;
`

const Block = styled.div`
  max-width: 840px;
  width: 100%;
  margin: 0 auto;
`

const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin: 0 auto;
`

export default observable(CommentsBlock)
