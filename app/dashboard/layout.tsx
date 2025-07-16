
import Header from '../header/page';
import Footer from '../footer/page';

export default function RootLayout({ children }: { children: React.ReactNode }) {
 


  return (
    <html lang="en">
      <body>
       <Header />
        <main>{children}</main>
     <Footer />
      </body>
    </html>
  );
}
