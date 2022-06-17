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
                            {!info && comment.attributes.replyToComment && (
                                <ResponseBtn onClick={() => setInput(true)}>
                                    Ответить
                                </ResponseBtn>
                            )}
                            <Date>{makeBeautyDate(comment.attributes.createdAt)}</Date>

                            {/*Функция удаления заблокирована и добавлена в дальнейший этап*/}
                            {UserStore?.user?.id === user.id && false &&
                            <Delete onClick={() => removeHandle(comment.id)}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.46409 15.5355L15.5352 8.46448" stroke="#5f5f5f" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M8.46409 8.46445L15.5352 15.5355" stroke="#5f5f5f" stroke-width="1.5" stroke-linecap="round"/>
                              </svg>
                            </Delete>}
                            {/*// Функция удаления заблокирована и добавлена в дальнейший этап*/}

                        </Footer>
                        {input && (
                            <CommentInput
                                model={null}
                                isResponse
                                replyId={comment.id}
                                reset={() => setInput(false)}
                            />
                        )}
                        {innerComments?.data && <InnerCommentList innerComments={innerComments.data}/>}
                    </Content>
                </Wrapper>
                
            </Container>
        </>
    )
}

const Delete = styled.div`
  display: flex;
  cursor: pointer;
  color: #722929;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  max-width: 600px;
  padding: 4px 0;
  display: flex;
  border-radius: 10px;

  &:hover {
    ${Delete} {
      display: flex;
    }
  }
`

const Content = styled.div`
  margin-left: 12px;
  width: 100%;
`

const Name = styled.div`
  display: flex;
  flex-basis: 0;
  font-size: 16px;
  margin-right: 14px;
  margin-bottom: 4px;
  font-weight: 600;
  color: #000000;
`

const Date = styled.div`
  font-size: 13px;
  color: #b0b0b0;
  font-weight: 400;
  margin-right: 10px;
`

const Text = styled.div`
  font-size: 16px;
  color: #2b2b2b;
  font-weight: 500;
`

const Footer = styled.div`
  display: flex;
  margin-top: 4px;
  margin-bottom: 16px;
  align-items: center;
  height: 24px;
`

const ResponseBtn = styled.div`
  font-size: 14px;
  color: #676767;
  margin-right: 10px;
  font-weight: 400;
  cursor: pointer;
`

export default observer(CommentCard)
