import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER || ''
  const appId = process.env.NEXT_PUBLIC_APP_ID || ''
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
  )
}

export default MyApp
