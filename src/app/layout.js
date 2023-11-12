import './globals.css'
import { Work_Sans } from 'next/font/google'

const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Portfolio',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={work_sans.className}>{children}</body>
    </html>
  )
}
