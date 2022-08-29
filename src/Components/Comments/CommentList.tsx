import styled from "styled-components";
import _ from "lodash";
import React from "react";
import CommentCard from "./CommentCard";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

type CommentListTypes = {
  comments: Array<CommentEntity>;
};

const CommentList = ({ comments }: CommentListTypes) => {
  const clearComments = _.reverse(
    comments.filter(
      (comment: CommentEntity) => !comment.attributes.replyToComment?.data
    )
  );

  return (
    <Wrapper>
      {clearComments.map((comment: any) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

export default observer(CommentList);
