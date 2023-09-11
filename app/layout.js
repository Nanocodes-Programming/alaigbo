import './globals.css';
import { Inter } from 'next/font/google';
import Provider from '@/components/Provider';
import { Toaster } from '@/components/ui/toaster';
import { ClerkProvider } from '@clerk/nextjs';
import '@uploadthing/react/styles.css';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: ' Harnessing Human Capital for Sustainable Development in Alaigbo',
  description: ` Discover how Alaigbo leverages its human capital to drive economic growth, innovation, and social progress. Explore our initiatives to develop and empower a skilled workforce. `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <Provider>
          <body className={cn(inter.className)}>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </body>
        </Provider>
      </ClerkProvider>
    </html>
  );
}
