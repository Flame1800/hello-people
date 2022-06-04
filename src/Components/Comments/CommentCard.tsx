import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import CommentInput from "./CommentInput";
import {observer} from "mobx-react-lite";
import UserAvatar from "../User/UserAvatar";
import CommentsStore from "../../Stores/CommentsStore";
import UserStore from "../../Stores/UserStore";
import makeBeautyDate from "../../Libs/makeBeautyDate";
import InnerCommentList from './InnerComentsList'

const CommentCard = ({comment, info}) => {
    const [input, setInput] = React.useState(false)

    const {removeComment} = CommentsStore
    const user = comment.attributes.user.data
    const {innerComments} = comment.attributes

    const removeHandle = async id => {
        // delete comment
        removeComment(id)
    }

    const WrapLink = ({children}) => {
        return (
            <Link
                key={comment.id}
                href={`/user/${user.id}`}
            >
                <a>{children}</a>
            </Link>
        )
    }


    return (
        <>
            <Container>
                <Wrapper>
                    <WrapLink>
                        {user.attributes.avatar && <UserAvatar url={user.attributes.avatar}/>}
                    </WrapLink>
                    <Content>
                        <WrapLink>
                            <Name>{user.attributes.username}</Name>
                        </WrapLink>
                        <Text>{comment.attributes.content}</Text>
                        <Footer>
                            {!info && (
                                <ResponseBtn onClick={() => setInput(true)}>
                                    Ответить
                                </ResponseBtn>
                            )}
                            <Date>{makeBeautyDate(comment.attributes.createdAt)}</Date>
                            {UserStore?.user?.id === user.id &&
                            <Delete onClick={() => removeHandle(comment.id)}>+</Delete>}
                        </Footer>
                        {input && (
                            <CommentInput
                                model={null}
                                isResponse
                                replyId={comment.id}
                                reset={() => setInput(false)}
                            />
                        )}
                    </Content>
                </Wrapper>
                {innerComments?.data && <InnerCommentList innerComments={innerComments.data}/>}
            </Container>
        </>
    )
}

const Delete = styled.div`
  object-fit: none;
  display: none;
  font-size: 20px;
  cursor: pointer;
  color: #722929;
  transform: rotate(45deg);

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  max-width: 600px;
  padding: 4px 0;
  padding-left: 3px;
  display: flex;
  border-radius: 10px;

  &:hover {
    ${Delete} {
      display: block;
    }
  }
`

const Content = styled.div`
  margin-left: 5px;
  width: 100%;
`

const Name = styled.div`
  font-size: 16px;
  margin-right: 14px;
  margin-bottom: 4px;
  font-weight: 600;
`

const Date = styled.div`
  font-size: 13px;
  color: #2b2b2b;
  font-weight: 400;
  margin-right: 10px;
`

const Text = styled.div`
  font-size: 16px;
  color: #2b2b2b;
`

const Footer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  height: 20px;
`

const ResponseBtn = styled.div`
  font-size: 14px;
  color: #555555;
  margin-right: 10px;
  cursor: pointer;
`

export default observer(CommentCard)
