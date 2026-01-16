import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata = {
  title: 'IES Cura Valera',
  description: 'Web del Instituto IES Cura Valera',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <Navigation />
        
        {children}
        
        <Footer />
      </body>
    </html>
  );
}