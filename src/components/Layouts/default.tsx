import { NextPage } from 'next'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyles from '~/styles/globalStyles'
import { light } from '~/styles/themes'
import { useTheme } from '~/hooks/use-theme'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

const DefaultLayout: NextPage = ({ children }) => {
  const [theme, _setTheme] = useTheme<DefaultTheme>('theme', light)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default DefaultLayout
