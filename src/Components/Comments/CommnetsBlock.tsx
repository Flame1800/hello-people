import React from "react";
import styled from "styled-components";
import CommentsInput from "./CommentInput";
import CommentsStore from "../../Stores/CommentsStore";
import { observer } from "mobx-react-lite";
import CommentList from "./CommentList";
import UserStore from "../../Stores/UserStore";
import UiStateStore from "../../Stores/UiStateStore";
import { toJS } from "mobx";

type CommentsBlockType = {
  id: number;
  model: string;
};

const CommentsBlock = ({ id, model }: CommentsBlockType) => {
  const { comments } = CommentsStore;
  const { user } = UserStore;

  React.useEffect(() => {
    // установка коментов и модели
    CommentsStore.setComments(id, model);
    CommentsStore.setModel(model);
  }, []);

  console.log(toJS(comments));

  if (!user) {
    return (
      <Wrapper id="comments">
        <Block>
          <ReqAuth>
            <AuthButtonStyle onClick={() => UiStateStore.toggleAuthModal()}>
              Авторизуйтесь
            </AuthButtonStyle>
            , чтобы писать комментарии
          </ReqAuth>
          <CommentList comments={comments} />
        </Block>
      </Wrapper>
    );
  }

  return (
    <Wrapper id="comments">
      <Block>
        <Title>
          Комментарии <CommentsLength>{comments.length}</CommentsLength>
        </Title>
        <CommentsInput />
        <CommentList comments={comments} />
        {comments.length > 15 && <CommentsInput />}
      </Block>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 840px;
  background: #fff;
  border-radius: 20px;
  margin: 40px auto 60px;
`;

const Block = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 760px;
  padding: 40px 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  margin: 0px auto 16px;
`;

const CommentsLength = styled.div`
  font-size: 16px;
  color: #ff5538;
  margin-left: 12px;
`;

const ReqAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  border-radius: 8px;
  padding: 48px;
  margin-bottom: 16px;
  box-shadow: 0 0 8px -6px;
`;

const AuthButtonStyle = styled.a`
  color: #ff5538;
  cursor: pointer;
`;

export default observer(CommentsBlock);
