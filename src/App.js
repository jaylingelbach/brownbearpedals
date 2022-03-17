import './App.css';
import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from './components/header';
import SimpleBottomNavigation from './components/footer';
import Faq from './components/faq';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/faq" component={<Faq />} />
      </Routes>
      <ResponsiveAppBar />
      <header className="App-header">
        <a href='/' id='build-link'> Build it</a>
      </header>
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
