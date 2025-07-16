'use client';
import { usePathname } from 'next/navigation';
import Header from '../header/page';
import Footer from '../footer/page';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === '/login';

  return (
    <html lang="en">
      <body>
        {!hideLayout && <Header />}
        <main>{children}</main>
        {!hideLayout && <Footer />}
      </body>
    </html>
  );
}
