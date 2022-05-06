import styled from "styled-components";

export const MessageFeedHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #D9D9D9;

  @media (min-width: 1420px) {
    padding-top: 15px;
  }

  .first-side {
    display: flex;
    align-items: center;

    .btn-back {
      margin-right: 30px;
      cursor: pointer;
    }

    .companion {
      margin-left: 15px;

      .name {
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 150px;
        display: flex;
      }

      .status {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #949494;
      }
    }

  }
`