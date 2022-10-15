import React from "react";
import Head from "next/head";
import { CITY } from "../../Constants/city";

type Props = {
  title: string;
  description: string;
  keywords?: string;
};

const SeoHead = ({ title, description, keywords }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};

export default SeoHead;
