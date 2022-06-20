import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import "../styles/globals.css";
import "../styles/snipcart.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></Script>
        <div
          hidden
          id="snipcart"
          data-api-key="https://force-recs.prismic.io/api/v2"
        ></div>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
