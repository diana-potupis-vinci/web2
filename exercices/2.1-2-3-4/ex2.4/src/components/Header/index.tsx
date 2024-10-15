import React from "react";
import "./Header.css";

interface HeaderProps {
  image: string;
  children: React.ReactNode;
}

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img src={image} alt="Logo" />
      <div>{children}</div>
    </header>
  );
};

export default Header;
