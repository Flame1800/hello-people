import styled from "styled-components";
import {theme} from "./theme";


export const ButtonStyle = styled.button`
  height: 45px;
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
  background: ${({outline}) => outline ? 'none' : theme.color.orange};
  border: ${({outline}) => !outline ? 'none' : `2px solid ${theme.color.orange}`};
  color: ${({outline}) => !outline ? '#FFFFFF' : theme.color.orange};
  font-weight: 700;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: 426px) {
    padding: 10px 20px;
    font-size: 17px;
    border-radius: 10px;
  }
`

export const InputStyle = styled.input`
  background: #fafafa;
  max-width: 350px;
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  padding: 13px 20px;
  width: 100%;
  outline: none;
  margin-bottom: 20px;
  border: 2px solid #9b9b9b;

  &::placeholder {
    color: #9b9b9b;
    font-weight: 500;
  }
`

export const TextareaStyle = styled.textarea`
  background: #fafafa;
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  padding: 13px 20px;
  outline: none;
  width: 100%;
  max-width: 350px;
  resize: vertical;
  border: 2px solid #9b9b9b;
  margin-bottom: 20px;

  &::placeholder {
    color: #949494;
    font-weight: 500;
  }
`

export const Label = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #585858;
  margin-bottom: 15px;
  margin-top: 15px;
  max-width: 350px;
`