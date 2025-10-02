import { Routes, Route, BrowserRouter } from "react-router";
import "./App.css";
import { Button } from "@/components/ui/button";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import DashboardWeather from "./pages/dashboard-weather";
import CityWeather from "./pages/city-weather";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
