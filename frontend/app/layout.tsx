import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin', 'vietnamese'] });

export const metadata = {
  title: 'VBUS - Hành trình thông minh',
  description: 'Nền tảng đặt vé xe khách hiện đại hàng đầu Việt Nam'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${inter.className} min-h-screen flex flex-col uppercase-none`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
