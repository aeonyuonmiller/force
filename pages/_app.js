import { useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'
import '../styles/locomotive-scroll.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  
  const { asPath } = useRouter();
	const containerRef = useRef();

	const options = {
		smooth: true,
		lerp: 0.09,
	}

	//...all the dependencies you want to watch to update the scroll EXCEPT the location one
	// const watch = [];

  return (

    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
      <LocomotiveScrollProvider
			options={options}
			// watch={watch}
			location={asPath}
			onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
			containerRef={containerRef}
		>
			    <div data-scroll-container ref={containerRef}> 
            <Component {...pageProps} />
          </div>
        </LocomotiveScrollProvider>
      </PrismicPreview>
    </PrismicProvider>

  )
}