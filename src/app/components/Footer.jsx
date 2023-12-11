import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoelvis from "../../../public/images/logo-elvis.png";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link href="/">
            <Image src={logoelvis} alt="Elvis Goncalves" />
     </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
