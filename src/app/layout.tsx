import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Text from './components/Text';

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
        <main className="flex flex-col items-center min-h-screen p-20 xs:p-24">
          <Text variant="h3" className="text-jet-default">
            Cool Chuck Norris Facts!
          </Text>
          {children}
        </main>
      </body>
    </html>
  );
}
