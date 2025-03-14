import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

interface LandingPageTemplateProps {
  children: React.ReactNode;
}

const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  children
}) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow p-4">{children}</main>
    <Footer />
  </div>
);

export default LandingPageTemplate;
