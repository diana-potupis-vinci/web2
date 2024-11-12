import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";

interface HeaderProps {
  title: string;
  version: number;
}

const Header = ({ title }: HeaderProps) => {
  const [menuPrinted, setMenuPrinted] = useState(false);

  const handleClick = () => {
    console.log(`value of menuPrinted before click: ${menuPrinted}`);
    setMenuPrinted(!menuPrinted);
  };

  return (
    <Box component="header" onClick={handleClick}>
      <Container maxWidth="sm">
        <Typography variant="h1">
          {menuPrinted ? `${title}... and rarely do we hate it!` : title}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
