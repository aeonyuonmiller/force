import Link from "next/link";
import { SnipcartProvider } from "use-snipcart/useSnipcart";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import "../styles/snipcart.css";
import "../styles/globals.css";
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
        <SnipcartProvider>
          <Component {...pageProps} />
        </SnipcartProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
