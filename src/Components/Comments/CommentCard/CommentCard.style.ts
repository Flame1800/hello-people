import styled from "styled-components";

export const Delete = styled.div`
  display: none;
  cursor: pointer;
  color: red;
  align-items: center;
  font-size: 14px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  max-width: 600px;
  padding: 4px 0;
  display: flex;
  border-radius: 10px;
`;

export const Content = styled.div`
  margin-left: 12px;
  width: 100%;
`;

export const Name = styled.div`
  display: flex;
  flex-basis: 0;
  font-size: 16px;
  margin-right: 14px;
  margin-bottom: 4px;
  font-weight: 600;
  color: #000000;
`;

export const Date = styled.div`
  font-size: 13px;
  color: #b0b0b0;
  font-weight: 400;
  margin-right: 10px;
`;

export const Text = styled.div`
  font-size: 16px;
  color: #2b2b2b;
  font-weight: 500;
  white-space: pre-line;
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 4px;
  margin-bottom: 16px;
  align-items: center;
  height: 24px;

  &:hover {
    ${Delete} {
      display: flex;
    }
  }
`;

export const ResponseBtn = styled.div`
  font-size: 14px;
  color: #676767;
  margin-right: 10px;
  font-weight: 400;
  cursor: pointer;
`;
