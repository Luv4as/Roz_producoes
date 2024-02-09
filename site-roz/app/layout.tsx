import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Roboto} from 'next/font/google'
//import { ThemeProvider } from "@material-tailwind/react";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({subsets: ['latin'],weight: '100'})
const bebas_neue = Bebas_Neue({subsets: ['latin'], weight: '400', variable: '--font-Beba_neue'})
// const druk = localFont({src: './Druk-Cond-Trial', variable: '--font-Druk' })

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
          <body className= "text-zinc-950">{children}
          </body>
      </html>
    
    
  )
}