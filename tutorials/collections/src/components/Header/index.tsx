import "./Header.css";
const Header = ({ title, version }: { title: string; version: number }) => {
    return (
      <header>
        <h1 className="animate__animated animate__bounce">{title}</h1>
        <h4>Version: {version}</h4>
      </header>
    );
  };

  export default Header;