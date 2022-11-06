import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const WrapperHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: auto;
  padding: 40px 5%;
  border-radius: 32px;
  background: #fff;

  @media (min-width: 1424px) {
    box-shadow: ${theme.boxShadow.mainComponent};
  }

  @media (max-width: 1424px) {
    background: #fff;
    padding: 20px 0;
  }

  @media (max-width: ${theme.size.medium}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: ${theme.size.medium}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const Info = styled.div`
  margin-left: 20px;

  @media (max-width: ${theme.size.medium}) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Name = styled.div`
  font-style: normal;
  display: flex;
  font-weight: 700;
  font-size: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  margin-top: 20px;
  max-width: 330px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #585858;
`;

export const Meta = styled.div`
  padding: 0 30px;

  @media screen and (max-width: 425px) {
    width: 300px;
  }
`;
