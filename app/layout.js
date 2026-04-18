import Headers from "@/app/_components/Header";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },

  description:
    "Discover The Wild Oasis, a luxurious retreat nestled in nature. Experience tranquility, adventure, and unforgettable moments in our exclusive cabins. Book your escape to paradise today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} 
      anti-aliasing bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <header>
          <Headers />
        </header>
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
