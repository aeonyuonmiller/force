import Head from 'next/head'
import Script from 'next/script'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from "./components/Logo"
import Layout from "./components/Layout"

import { createClient } from '../prismicio'
import { SliceZone, PrismicRichText } from '@prismicio/react'
import { components } from '../slices'


export default function Home({ page }) {
  
  return (
    <div>
      <Head>
        <title>FORCE</title>
        <meta name="description" content="FORCE Recordings – industrial acid techno" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://static.cdn.prismic.io/prismic.js?new=true&repo=force-recs" />
     
      <main className={styles.main}>
        <Logo />
      </main>

      <Layout>
        <PrismicRichText field={page.data.title} />
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    </div>
  )
}

// Fetch content from prismic
export async function getStaticProps() {
  const client = createClient()

  // Page document for our homepage from the CMS.
  const page = await client.getByUID('page', 'home')

  return {
    props: { page },
  }
}
