import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Contact from "./components/Contact"
import Faq from './components/faq';
import Home from './components/Home';
import HowItWorks from './components/howItWorks';
import ResponsiveAppBar from './components/header';
import SimpleBottomNavigation from './components/footer';
import Insta from "./components/Insta";
import Location from "./components/Location";
import About from "./components/About";
import './App.css';


function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/insta" element={<Insta />} />
      </Routes>
      <SimpleBottomNavigation />
    </div>
    </ThemeProvider>
  );
}

export default App;
