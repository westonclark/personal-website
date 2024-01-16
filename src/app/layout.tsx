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
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">{children}</body>
    </html>
  );
}

// bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500
// bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900
