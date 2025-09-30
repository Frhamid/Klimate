import { Routes, Route, BrowserRouter } from "react-router";
import "./App.css";
import { Button } from "@/components/ui/button";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import DashboardWeather from "./pages/dashboard-weather";
import CityWeather from "./pages/city-weather";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path="/" element={<DashboardWeather />}></Route>
            <Route
              path="/cityWeather/:cityName"
              element={<CityWeather />}
            ></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
