import ThemeProvider from "./Theme";
import Navbar from "./Navbar";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;