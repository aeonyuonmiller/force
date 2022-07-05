// import { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
// import Image from 'next/image'
import { motion } from "framer-motion";
import Logo from "./components/Logo";
import Layout from "./components/Layout";

import { createClient } from "../prismicio";
import { SliceZone, PrismicRichText } from "@prismicio/react";
import { components } from "../slices";
import LiveSign from "./components/LiveSign";
import { useSnipcart } from "use-snipcart/useSnipcart";

export default function Home({ page }) {
  const { cart = {} } = useSnipcart();
  // console.log("cart", cart);

  return (
    <>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></Script>
      <Script src="https://static.cdn.prismic.io/prismic.js?new=true&repo=force-recs" />
      <Head>
        <title>FORCE</title>
        <meta
          name="description"
          content="FORCE Recordings – industrial acid techno"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Logo />
      </main>
      <PrismicRichText field={page.data.title} />
      <Layout>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 1 },
        }}
        className="snipcart-checkout"
      >
        •<span className="snipcart-items-count"></span> &mdash;{" "}
        <span className="snipcart-total-price"></span>
      </motion.button>

      <Link href="/live">
        <a>
          <LiveSign text="Live" />
        </a>
      </Link>
    </>
  );
}

// Fetch content from prismic
export async function getStaticProps() {
  const client = createClient();

  // get Page document from UID ("home")
  const page = await client.getByUID("page", "home");

  return {
    props: { page },
  };
}
