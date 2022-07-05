import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="<https://app.snipcart.com>" />
        <link rel="preconnect" href="<https://cdn.snipcart.com>" />
        <link
          rel="stylesheet"
          href="https://cdn.Snipcart.com/themes/v3.2.1/default/Snipcart.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div
          hidden
          id="snipcart"
          templatesUrl="/snipcart-templates.html"
          data-api-key="ZDRkMTBlNGItMzQyYy00MmZjLWI3MDEtYWZhOTViMmVmMGU3NjM3ODk4MDU4MzkwODcyNzEy"
          data-config-add-product-behavior="none"
          data-config-modal-style="side"
        />
        <script
          src="https://cdn.Snipcart.com/themes/v3.2.1/default/Snipcart.js"
          async
        />
      </body>
    </Html>
  );
}
