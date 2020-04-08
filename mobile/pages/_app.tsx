// We create custom Next App compoent for define global css style 
import './_app.css'
import { AppProps } from 'next/app'

export default ({ Component, pageProps }: AppProps) => <Component {...pageProps} />