import '../styles/globals.css';
import Footer from '../components/footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'Created by Jacob',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}