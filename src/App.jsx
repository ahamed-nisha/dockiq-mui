import { ThemeProvider, CssBaseline } from "@mui/material";
import DockIQ from "./components/DockIQ";
import { darkTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <DockIQ />
    </ThemeProvider>
  );
}

export default App;
