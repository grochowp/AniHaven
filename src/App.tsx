import { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
// import MainPage from "./pages/MainPage/MainPage";

import Navbar from "./components/Navbar/Navbar";
import { Spinner } from "./components/Spinner";
import Footer from "./components/Footer";

const Error = lazy(() => import("./components/Error"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const News = lazy(() => import("./pages/News/News"));
const Animals = lazy(() => import("./pages/Animals/Animals"));
const Adoption = lazy(() => import("./pages/Adoption/Adoption"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

interface Theme {
  mainBackground: string;
  secondaryBackground: string;
  shadow: string;
  mainText: string;
  secondaryText: string;
  gold: string;
  gradientBackground: string;
  gradientBackgroundSec: string;
  formBorder: string;
  name: string;
}

const LightTheme: Theme = {
  mainBackground: "#FFFFFF",
  secondaryBackground: "#F3F3F3",
  shadow: "#D4D9DB",
  mainText: "#212121",
  secondaryText: "#D9D9D9",
  gold: "#BABE00",
  gradientBackground: "rgb(255,255,255)",
  gradientBackgroundSec: "linear-gradient(0deg, #FFFFFF 0%,#ADACAC 100%)",
  formBorder: "#025D8C",
  name: "light",
};

const DarkTheme: Theme = {
  mainBackground: "#262626",
  secondaryBackground: "#171717",
  shadow: "#333333",
  mainText: "#D9D9D9",
  secondaryText: "#D9D9D9",
  gold: "#BABE00",
  gradientBackground: "rgb(34,34,34)",
  gradientBackgroundSec:
    "linear-gradient(0deg, #262626 0%, rgba(30,30,30,1) 50%)",
  formBorder: "#00dfc4",
  name: "dark",
};

const themes: Record<string, Theme> = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route index element={<MainPage />} />
            <Route path="news" element={<News />} />
            <Route path="animals" element={<Animals />} />
            <Route path="adoption" element={<Adoption />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
