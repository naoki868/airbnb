import type { Metadata } from "next";
import {Nunito} from 'next/font/google'
import "./globals.css";
import Nabvar from '@/app/components/Navbar/Nabvar'
import ClientOnly from "./components/ClientOnly";
import RegisterModal from './components/Modals/RegisterModal'

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ['latin']
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal/>
          <Nabvar />
          
          {/* <Modal actionLabel='submit' title="Hello World" isOpen/> */}
        </ClientOnly>
        {children }
      </body>
    </html>
  );
}
