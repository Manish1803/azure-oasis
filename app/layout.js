import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import Header from "@/app/_components/Header";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  title: {
    default: "The Azure Oasis",
    template: "%s | The Azure Oasis",
  },
  descriptions:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests. Experience the perfect blend of nature and comfort.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header>
          <Logo />
          <Navigation />
        </Header>

        <div className="flex-1 px-8 py-12 grid ">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
