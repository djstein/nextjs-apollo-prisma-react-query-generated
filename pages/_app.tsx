import { QueryClient, QueryClientProvider } from "react-query"
import type { AppProps } from "next/app"

const queryClient = new QueryClient()

const AppWithContext = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

const App = (props: AppProps): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppWithContext {...props} />
    </QueryClientProvider>
  )
}

export default App
