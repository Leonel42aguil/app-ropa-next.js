import './globals.css'
import { Inter } from 'next/font/google'
import a from "../components/css/bootstrap.min.css"
import NavBar from '@/components/NavBar'
import Carrusel from '@/components/Carrusel'
import Intro from '@/components/Intro'
import Product from '@/components/Product'
import About from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="stylesheet" href={a} ></link>
      <NavBar />
      <Carrusel />
      <Intro />
      <Product />
      <About />
        {children}
        </body>
    </html>
  )
}
