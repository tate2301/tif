import React, { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className={`flex flex-col bg-white subpixel-antialiased`}>
      {children}
    </div>
  );
}

export default Layout;
