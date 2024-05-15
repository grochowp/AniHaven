import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { MainPage } from "./pages/MainPage/MainPage";
import { News } from "./pages/News/News";
import { Animals } from "./pages/Animals/Animals";
import { Adoption } from "./pages/Adoption/Adoption";
import { Contact } from "./pages/Contact/Contact";
import { Error } from "./components/Error";
import { Navbar } from "./components/Navbar";

interface Theme {
  mainBackground: string;
  secondaryBackground: string;
  shadow: string;
  mainText: string;
  secondaryTest: string;
  gold: string;
  name: string;
}

const LightTheme: Theme = {
  mainBackground: "#FFFFFF",
  secondaryBackground: "#F3F3F3",
  shadow: "#ADACAC",
  mainText: "#212121",
  secondaryTest: "#D9D9D9",
  gold: "#BABE00",
  name: "light",
};

const DarkTheme: Theme = {
  mainBackground: "#262626",
  secondaryBackground: "#171717",
  shadow: "#333333",
  mainText: "#D9D9D9",
  secondaryTest: "#D9D9D9",
  gold: "#BABE00",
  name: "dark",
};

const themes: Record<string, Theme> = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme] = useState("dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route index element={<MainPage />} />
          <Route path="news" element={<News />} />
          <Route path="animals" element={<Animals />} />
          <Route path="adoption" element={<Adoption />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
