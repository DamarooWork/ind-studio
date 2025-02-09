import Header from './components/header'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/pp-neue-montreal"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.jpg" type="image/jpg" />
        <title>IND.studio</title>
      </head>
      <body>
        <Header />
        <main className="pt-[60px]">{children}</main>
      </body>
    </html>
  )
}
