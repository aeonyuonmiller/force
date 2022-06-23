import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="<https://app.snipcart.com>" />
        <link rel="preconnect" href="<https://cdn.snipcart.com>" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div
          hidden
          id="snipcart"
          data-api-key="ZDRkMTBlNGItMzQyYy00MmZjLWI3MDEtYWZhOTViMmVmMGU3NjM3ODk4MDU4MzkwODcyNzEy"
          data-config-modal-style="side"
        ></div>
      </body>
    </Html>
  );
}
