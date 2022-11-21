import { FC } from "react";
import Head from "next/head";

interface MetaProps {
  title?: string;
  keywords?: string;
  description?: string;
}

const Meta: FC<MetaProps> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Covid Tracker",
  keywords:
    "covid tracker, info covid tracker, covid info, info covid, global covid tracker. global covid info, country covid info, country covid tracker, covid info countries, covid tracker countries",
  description:
    "Tracks COVID related information about confirmed cases, deaths and recovered globally and each country.",
};

export default Meta;
