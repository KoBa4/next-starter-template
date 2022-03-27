import type { AppProps } from 'next/app'
import { DefaultLayout } from '~/components/Layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
