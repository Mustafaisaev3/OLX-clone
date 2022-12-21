import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import GlobalStyle from './globalStyles'
import Layout from '../layout/Layout'
import { ManagedUIContext } from '../context/ui.context'
import ManagedModal from '../components/UI/Modal/ManagedModal'

export default function App({ Component, pageProps }: AppProps) {
  
  return <>
    <ManagedUIContext>
      <Layout>
        <GlobalStyle/>
        <Component {...pageProps} />
        <ManagedModal />
      </Layout>
    </ManagedUIContext>
  </>
}
