import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Container from './components/Container';

const inter = Inter({ subsets: ['latin'] });
const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cool Chuck Norris Facts!',
  description: 'Not developed by Chuck Norris',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${firaCode.className}`}>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
