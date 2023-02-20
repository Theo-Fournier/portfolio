import '@/styles/globals.css'
import { Karla } from '@next/font/google'
import type { AppProps } from 'next/app'

const karla = Karla({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <style jsx global>{`
        html {
          font-family: ${karla.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
    </>
  )
}
