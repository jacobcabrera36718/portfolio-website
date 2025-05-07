import '../styles/globals.css';
import Footer from '../components/footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'Created with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
