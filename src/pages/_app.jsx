import 'src/styles/globals.css'
import {Header} from 'src/components/Header'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Header>
      <link rel="icon" href="/favicon.ico" />
    </Header>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp

