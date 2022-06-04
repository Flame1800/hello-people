import React from 'react'
import styled from 'styled-components'
import UserStore from "../../Stores/UserStore";
import {theme} from "../../../styles/theme";
import CommentsStore from "../../Stores/CommentsStore";
import {observer} from "mobx-react-lite";


const CommentInput = ({reset, isResponse, replyId}) => {
    const [textValue, setTextValue] = React.useState('')

    const {model, idEntity, addComment} = CommentsStore
    const {user} = UserStore

    const SendOnKey = (e: any) => {
        if (e.code === 'Enter') {
            sendCommentHandler()
        }
    }

    const sendCommentHandler = async () => {
        if (user === null) {
            return null
        }

        const comment = {
            content: textValue,
            user: user.id,
            [model]: [idEntity]
        }

        const newComment = isResponse
            ? {replyToComment: replyId, ...comment}
            : comment

        const res = await addComment({data: newComment})

        setTextValue('')

        if (isResponse) {
            reset()
        }
    }

    return (
        <SendBlock>
            <CommentEditor>
                <InputStyle
                    onChange={e => setTextValue(e.target.value)}
                    value={textValue}
                    onKeyDown={e => SendOnKey(e)}
                    placeholder={isResponse ? 'Ответ...' : 'Комментарий...'}
                />
                <Buttons>
                    {isResponse && <div onClick={reset}>Отмена</div>}
                    <SendButton onClick={() => sendCommentHandler()}>
                        Отправить
                    </SendButton>
                </Buttons>
            </CommentEditor>
        </SendBlock>
    )
}

const SendBlock = styled.div`
  margin-bottom: 20px;
  margin-top: 10px;
  width: 100%;
  border-radius: 10px;
  padding: 5px;
  background: #fff;
  border: 1px solid #adadad;
`

const InputStyle = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  margin-bottom: 10px;
  resize: vertical;
  font-weight: 500;
  font-size: 17px;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-right: 10px;
  font-size: 13px;

  div {
    cursor: pointer;
  }
`

const SendButton = styled.div`
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  background: ${theme.color.orange};
  display: block;
  cursor: pointer;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 600;

  div {
    cursor: pointer;
  }
`

const CommentEditor = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  img {
    cursor: pointer;
    margin: 0 15px;
  }
`

export default observer(CommentInput)
