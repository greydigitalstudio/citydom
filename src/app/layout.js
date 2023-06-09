import './globals.css'
import styles from './page.module.css'
import { Inter } from 'next/font/google'

import Header from './components/general/header/Header'
import Banner from './components/general/banner/Banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CityDom',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.wrapper}>
          <Header />
          <Banner />
          {children}
        </div>        
      </body>
    </html>
  )
}
