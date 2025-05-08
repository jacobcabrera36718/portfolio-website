import '../styles/globals.css';
import background from '../components/background';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <background />
        {children}
      </body>
    </html>
  );
}
