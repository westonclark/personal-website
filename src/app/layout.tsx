import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Weston Clark',
  description: 'Full Stack Software Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-400 via-sky-100 to-green-100">{children}</body>
    </html>
  );
}
