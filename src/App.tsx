import { BrowserRouter } from "react-router";
import "./App.css";
import { Button } from "@/components/ui/button";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>hello</Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
