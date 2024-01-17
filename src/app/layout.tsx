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
      <body className="bg-gradient-to-tl from-slate-950  to-slate-950/90 leading-relaxed text-slate-300 antialiased selection:bg-teal-300 selection:text-teal-900">{children}</body>
    </html>
  );
}
