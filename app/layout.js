import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Provider from '@/components/Provider';
import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: ' Harnessing Human Capital for Sustainable Development in Alaigbo',
  description: ` Discover how Alaigbo leverages its human capital to drive economic growth, innovation, and social progress. Explore our initiatives to develop and empower a skilled workforce. `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />

          {children}
          <Footer />
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
