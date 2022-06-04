import React from 'react'
import styled from 'styled-components'
import UserStore from "../../Stores/UserStore";
import {theme} from "../../../styles/theme";


const CommentInput = ({reset, isResponse, replyId}) => {
    const [textValue, setTextValue] = React.useState('')

    const {user} = UserStore

    const SendOnKey = e => {
        if (e.code === 'Enter') {
            sendCommentHandler()
        }
    }

    const sendCommentHandler = async () => {
        if (user === null) {
            // регистрировать юзера
        }

        const comment = {
            content: textValue,
            rate: 0,
            user: {connect: {id: user.id}},
            // [modelName]: {connect: {slug: model.slug}}
        }

        const commentForApi = isResponse
            ? {replyToComment: {connect: {id: replyId}}, ...comment}
            : comment

        // const res = await API.sendComment(commentForApi)

        // Добавить коммент
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

export default CommentInput
