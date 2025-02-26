import { Battambang, Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavbarConponent from "@/components/NavbarConponent";
import FooterConponent from "@/components/FooterConponent";

const inter = Inter({ subsets: ["latin"] });
const popins = Poppins({ subsets: ["latin"],weight:"400" });
const btb = Battambang({subsets:["latin"],weight:"400"});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children ,local,team,analytics }) {
  return (
    <html lang={local}>
      <body className={btb.className}>
        <NavbarConponent></NavbarConponent>
        {children}
        {/* <div>
          {team}
          {analytics}
          <></>
        </div> */}
        <FooterConponent></FooterConponent>
      </body>
    </html>
  );
}
