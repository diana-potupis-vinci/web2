import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Header title="We love Pizza" version={0 + 1} />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
