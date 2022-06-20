import React, {Component} from 'react';
import styled from "styled-components";
import Link from "next/link";

type ServiceProps = {
    children: string
    link: string
}

const HeaderServicesPage: React.FC<ServiceProps> = ({children, link}) => {
    return (
        <Wrapper>
            <div className="title">{children}</div>
            <Link href={link}>
                <a className='add-btn'>
                    <img src="/img/add-icon.svg" alt="Добавить"/>
                </a>
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding: 0 20px;
  margin-top: 25px;

  .title {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    color: #000000;
  }

  @media (min-width: 768px) {
    width: fit-content;
    margin: 25px auto;

    .add-btn {
      margin-left: 20px;
      display: none;
    }
  }
`

export default HeaderServicesPage;