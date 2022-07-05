import Link from "next/link";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { SnipcartProvider } from "use-snipcart/useSnipcart";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import "../styles/snipcart.css";
import "../styles/globals.css";
// import Script from "next/script";

export default function App({ Component, pageProps, router }) {
  const containerRef = useRef(null);
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
          <AnimatePresence exitBeforeEnter={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </SnipcartProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
