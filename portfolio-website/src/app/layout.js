import '../styles/globals.css';
import WaveBackground from '../components/Background/WaveBackground';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WaveBackground />
        {children}
      </body>
    </html>
  );
}
