

import Layout from '../components/layout'
import { ThemeProvider } from 'next-themes'
const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  )
}

export default MyApp 