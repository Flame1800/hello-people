import styled from "styled-components";

export const MessageFeedHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;
  border-bottom: 1px solid #f6f6f6;

  @media (min-width: 1420px) {
    padding-top: 15px;
  }

  .first-side {
    display: flex;
    align-items: center;

    .btn-back {
      margin-right: 16px;
      width: 32px;
      height: 32px; 
      align-items: center;
      cursor: pointer;
      fill: #D9D9D9;
    }

    .companion {
      margin-left: 15px;

      .name {
        font-weight: 600;
        font-size: 16px;
        line-height: 25px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 150px;
        display: flex;
      }

      .status {
        font-weight: 400;
        font-size: 13px;
        line-height: 19px;
        color: #949494;
      }
    }
  }
  .btn-info {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
`