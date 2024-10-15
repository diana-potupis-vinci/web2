import "./Footer.css";
import React from "react";

interface FooterProps {
  logo: string;
  children: React.ReactNode;
}

const Footer = ({ logo, children }: FooterProps) => {
  return (
    <footer>
      <div className="footer-content">
        {children}
        <img src={logo} alt="Footer Logo" className="footer-logo" />
      </div>
    </footer>
  );
};

export default Footer;
