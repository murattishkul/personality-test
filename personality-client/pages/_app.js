import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    50: '#fcbf16',
    100: '#fcbf16',
    500: '#fcbf16'
  }
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <div className="container">
        <div className="card">
          <Component {...pageProps} />
        </div>

        <style jsx>{`
        .container {
          min-height: 100vh;
          height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #c8e8e8;
        }
        
        .card {
          width: 75%;
          height: 75%;
          padding-top: 30px;
          padding-left: 30px;
          padding-right: 30px;
          border-radius: 30px;
          background: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          // justify-content: center;
          -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
          -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
          box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        }
        
        `}</style>
      </div>

    </ChakraProvider>
  )
}

export default MyApp;
