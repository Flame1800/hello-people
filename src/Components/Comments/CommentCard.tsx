import React, { ReactChild } from "react";
import styled from "styled-components";
import Link from "next/link";
import CommentInput from "./CommentInput";
import { observer } from "mobx-react-lite";
import UserAvatar from "../User/UserAvatar";
import UserStore from "../../Stores/UserStore";
import makeBeautyDate from "../../Libs/makeBeautyDate";
import InnerCommentList from "./InnerComentsList";

type CommentCardType = {
  comment: CommentEntity;
};

const CommentCard = ({ comment }: CommentCardType) => {
  const [input, setInput] = React.useState(false);

  const user = comment.attributes.user.data;
  const { innerComments } = comment.attributes;

  const WrapLink = ({ children }: { children: ReactChild }) => {
    return (
      <Link key={comment.id} href={`/user/${user.id}`}>
        <a>{children}</a>
      </Link>
    );
  };

  return (
    <>
      <Container>
        <Wrapper>
          <WrapLink>
            {user.attributes.avatar && (
              <UserAvatar url={user.attributes.avatar} />
            )}
          </WrapLink>
          <Content>
            <WrapLink>
              <Name>{user.attributes.username}</Name>
            </WrapLink>
            <Text>{comment.attributes.content}</Text>
            <Footer>
              {comment.attributes.replyToComment &&
                !input &&
                UserStore.user && (
                  <ResponseBtn onClick={() => setInput(true)}>
                    Ответить
                  </ResponseBtn>
                )}
              <Date>{makeBeautyDate(comment.attributes.createdAt)}</Date>
            </Footer>
            {input && (
              <CommentInput
                replyId={comment.id}
                reset={() => setInput(false)}
              />
            )}
            {innerComments?.data && (
              <InnerCommentList innerComments={innerComments.data} />
            )}
          </Content>
        </Wrapper>
      </Container>
    </>
  );
};

const Delete = styled.div`
  display: flex;
  cursor: pointer;
  color: #722929;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

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
`;

const Content = styled.div`
  margin-left: 12px;
  width: 100%;
`;

const Name = styled.div`
  display: flex;
  flex-basis: 0;
  font-size: 16px;
  margin-right: 14px;
  margin-bottom: 4px;
  font-weight: 600;
  color: #000000;
`;

const Date = styled.div`
  font-size: 13px;
  color: #b0b0b0;
  font-weight: 400;
  margin-right: 10px;
`;

const Text = styled.div`
  font-size: 16px;
  color: #2b2b2b;
  font-weight: 500;
  white-space: pre-line;
`;

const Footer = styled.div`
  display: flex;
  margin-top: 4px;
  margin-bottom: 16px;
  align-items: center;
  height: 24px;
`;

const ResponseBtn = styled.div`
  font-size: 14px;
  color: #676767;
  margin-right: 10px;
  font-weight: 400;
  cursor: pointer;
`;

export default observer(CommentCard);
