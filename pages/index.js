import { useContext } from "react";
// import Link from 'next/link'
import Head from "next/head";
import Script from "next/script";
// import Image from 'next/image'
import Logo from "./components/Logo";
import Layout from "./components/Layout";

import { createClient } from "../prismicio";
import { SliceZone, PrismicRichText } from "@prismicio/react";
import { components } from "../slices";
import LiveSign from "./components/LiveSign";

import { useSnipcart } from "use-snipcart/useSnipcart";

export default function Home({ page }) {
  const { cart = {} } = useSnipcart();
  console.log("cart", cart);

  return (
    <>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></Script>
      <Head>
        <title>FORCE</title>
        <meta
          name="description"
          content="FORCE Recordings – industrial acid techno"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="https://static.cdn.prismic.io/prismic.js?new=true&repo=force-recs" />

      <main className="main">
        <Logo />
      </main>

      <PrismicRichText field={page.data.title} />

      <Layout>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>

      <LiveSign text="Live" />
    </>
  );
}

// Fetch content from prismic
export async function getStaticProps() {
  const client = createClient();

  // Page document for our homepage from the CMS.
  const page = await client.getByUID("page", "home");

  return {
    props: { page },
  };
}
