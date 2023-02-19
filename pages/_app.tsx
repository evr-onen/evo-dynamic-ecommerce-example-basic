// ** CSS
import "../styles/globals.css"
import { EmotionCache } from "@emotion/react"

// ** Types
import type { AppProps } from "next/app"
import { FC } from "react"

// ** MUI imports
import { Grid } from "@mui/material"

// ** Create Theme
import PageProvider from "../src/components/helpers/PageProvider"

// ** Components Imports
import Header from "src/components/sections/Header"
import Footer from "src/components/sections/Footer"

// ** Context API
import { GlobalContextProvider } from "src/contexts/globalContext"

// ** Lang
import "src/config/i18n"

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache
}
import { useRouter } from "next/router"
const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => {
  const router = useRouter()

  return (
    <PageProvider emotionCache={emotionCache}>
      <Grid container className="main">
        <Grid item xs={12}>
          <GlobalContextProvider>
            {router.pathname !== "/" && <Header />}
            <Component {...pageProps} />
            {router.pathname !== "/" && <Footer />}
          </GlobalContextProvider>
        </Grid>
      </Grid>
    </PageProvider>
  )
}

export default App
