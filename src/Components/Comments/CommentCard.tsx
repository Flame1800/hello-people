import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import CommentInput from 'src/components/Comment/CommentInput'
import CommentList from 'src/components/Comment/CommentList'

const CommentCard = ({comment, info}) => {
    const [input, setInput] = React.useState(false)


    const removeHandle = async id => {
        // delete comment
    }

    const WrapLink = ({children}) => {
        return (
            <Link
                key={comment.id}
                href={`${process.env.BASE_URL}/profile/[id]`}
                as={`${process.env.BASE_URL}/profile/${comment.userId}`}
            >
                <a>{children}</a>
            </Link>
        )
    }

    const commentBy = (
        <CommentByTitle>
            {comment.post?.title ||
            comment.place?.title ||
            comment.party?.title ||
            'Неизвестно'}
        </CommentByTitle>
    )

    let comments = []

    const innerComments = comments.filter(item => item.replyToId === comment.id)

    return (
        <>
            <Container border={!!info}>
                {info && commentBy}
                <Wrapper isResponce>
                    <WrapLink>
                        {comment.user.image && (
                            <Avatar src={comment.user.image} alt="avatar"/>
                        )}
                    </WrapLink>
                    <Content>
                        <WrapLink>
                            <Name>{comment.user.name}</Name>
                        </WrapLink>
                        <Text>{comment.content}</Text>
                        <Footer>
                            {!info && (
                                <ResponseBtn onClick={() => setInput(true)}>
                                    Ответить
                                </ResponseBtn>
                            )}
                            <Date>{comment.createdAt}</Date>
                            <Delete onClick={() => removeHandle(0)}>+</Delete>
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
            </Container>

            {!info && innerComments.length > 0 && (
                <CommentList comments={innerComments} isResponse/>
            )}
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
  border: ${({border}) => (border ? '2px solid #ccc' : 'none')};
  padding: ${({border}) => (border ? '20px' : 'none')};
  margin: ${({border}) => (border ? '20px' : 'none')};
  display: flex;
  flex-direction: column;
`

const CommentByTitle = styled.div`
  font-weight: 500;
  margin-bottom: 10px;
`

const Wrapper = styled.div`
  max-width: 600px;
  padding-top: 12px;
  padding-bottom: 12px;
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

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
`

const Name = styled.div`
  font-size: 16px;
  margin-right: 14px;
  margin-bottom: 4px;
  font-weight: 500;
`

const Date = styled.div`
  font-size: 13px;
  color: #2b2b2b;
  font-weight: 400;
  margin-right: 10px;
`

const Text = styled.div`
  font-size: 16px;
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

export default CommentCard
