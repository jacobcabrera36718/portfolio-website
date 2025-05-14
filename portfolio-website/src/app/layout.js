import '../styles/globals.css';
import Footer from '../components/footer';
import ClientShaderWrapper from '../components/ClientShaderWrapper';

export const metadata = {
  title: 'My Portfolio',
  description: 'Created by Jacob',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative flex flex-col min-h-screen bg-black overflow-hidden">
        {/* Shader Background */}
        <ClientShaderWrapper />

        <main className="relative z-10 flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
