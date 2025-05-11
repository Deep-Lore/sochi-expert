import './globals.css';
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';

const sourceSans3 = Source_Sans_3({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-source-sans-3',
});

export const metadata: Metadata = {
  title: 'Сейсмоизоляция',
  description: 'Сейсмоизоляция',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}