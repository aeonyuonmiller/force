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
          src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
          data-api-key="ZDRkMTBlNGItMzQyYy00MmZjLWI3MDEtYWZhOTViMmVmMGU3NjM3ODk4MDU4MzkwODcyNzEy"
          data-config-add-product-behavior="none"
          data-config-modal-style="side"
        />
      </body>
    </Html>
  );
}
