import '@/styles/globals.css'
import { Layout } from '@/componentes/layout'
export default function App({ Component, pageProps }) {
  return(
    <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}
