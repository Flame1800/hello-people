import React from "react";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  href: string;
};

const LinkWrapper = ({ children, href }: Props) => {
  return (
    <Link href={href}>
      <AStyled>{children}</AStyled>
    </Link>
  );
};

const AStyled = styled.div`
  display: contents;
`;

export default LinkWrapper;
