import './globals.css'
// import './style.css
import { Inter, Kantumruy_Pro } from 'next/font/google'
import head from 'next/head';

const inter = Inter({ subsets: ['latin'] })
const kantumruypro = Kantumruy_Pro({
  weight: ["300", "400", "500", "600", "700"],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: 'Brachnha',
  description: 'edu game by G-4',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/img/favicon.ico" type="image/x-icon" sizes="any"/>
      <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png"/>
      <link rel="stylesheet" href="soft-ui-dashboard-tailwind.css" />
      <link href="./assets/css/nucleo-icons.css" rel="stylesheet" />
      <link href="./assets/css/nucleo-svg.css" rel="stylesheet" />
      <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body className={kantumruypro.className}>
        {children}
        <script src="../path/to/soft-ui-dashboard-tailwind.js"/>
      </body>
    </html>
  )
}
