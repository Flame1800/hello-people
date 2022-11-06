import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../styles/theme";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterTag>
      <Offer>
        <div>Есть идеи и предложения?</div>
        <div>
          Пишите
          <a target="_blank" href="https://t.me/hellopeopleme">
            @hellopeopleme{" "}
          </a>
        </div>
      </Offer>
      <Creators>
        Создатели &nbsp;
        <div>
          <Link href={`/user/15`}>
            <a href="/user/15"> Ruslan Shaficov </a>
          </Link>
          и{" "}
          <Link href={`/user/16`}>
            <a href="/user/16"> Vladimir Panasenya </a>
          </Link>
        </div>
      </Creators>
      <Under>
        <Links>
          <a target="_blank" href="https://t.me/hellopeopleme">
            <img src="/img/telegram.png" alt="telegram-link" />
          </a>
          <a target="_blank" href="https://vk.com/hellopeople.online">
            <img src="/img/vk.png" alt="telegram-link" />
          </a>
        </Links>
        <Copyright> © 2022 hellopeople</Copyright>
      </Under>
    </FooterTag>
  );
};

const FooterTag = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1424px) {
    position: relative;
    bottom: 0;
    width: auto;
    margin-top: 100px;
  }
`;

const Offer = styled.div`
  font-size: 11px;
  line-height: 15px;
  font-weight: 600;
  color: #2e2e2e;
  padding: 0 30px;
  margin-bottom: 17px;

  div {
    margin-bottom: 10px;
  }

  a {
    color: ${theme.color.orange};
  }
`;

const Creators = styled.div`
  font-weight: 600;
  font-size: 11px;
  line-height: 15px;
  display: flex;
  color: #939393;
  padding: 0 30px;

  a {
    color: #424242;
  }
`;

const Under = styled.div`
  margin-top: 18px;
  border-top: 1px solid #e8e8e8;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;

  a {
    margin: 0 5px;
  }
`;

const Copyright = styled.div`
  color: #898989;
  font-size: 12px;
`;

export default Footer;
