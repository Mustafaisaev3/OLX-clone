import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import GlobalStyle from './globalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyle/>
    <Component {...pageProps} />
  </>
}
