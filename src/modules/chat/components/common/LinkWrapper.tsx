import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

const LinkWrapper = ({ children, href }: Props) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default LinkWrapper;
