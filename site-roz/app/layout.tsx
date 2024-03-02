import './globals.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { Bebas_Neue, Roboto, Courier_Prime } from 'next/font/google'


const roboto = Roboto({
  subsets: ['latin'],
  weight: '100',
  variable: '--font-roboto'
})

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas_neue'
})

const courier_prime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-courier_prime'
})

const druk = localFont({
  src: '../public/fonts/DrukCond-Super-Trial.otf',
  variable: '--font-druk'
})

export const metadata: Metadata = {
  title: 'Roz produções',
  description: 'Site da produtora ROZ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-br">
          <body className={`${bebas_neue.variable} ${roboto.variable} ${courier_prime.variable} ${druk.variable}`}>{children}
          </body>
      </html>    
  )
}