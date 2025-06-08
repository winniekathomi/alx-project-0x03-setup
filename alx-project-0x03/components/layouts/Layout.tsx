// components/Layout.tsx
// components/Layout.tsx
import React from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { LayoutProps } from "@/interface";

const Layout: React.FC<LayoutProps> = ({ children, pageRoute }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen p-4">
        <h1 className="text-xl font-bold mb-4">You are on the {pageRoute} page</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
