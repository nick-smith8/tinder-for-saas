import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tinder for SaaS",
  description: "Let's find the perfect SaaS for you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main>
        <body className={inter.className}>{children}</body>
      </main>
    </html>
  );
}
