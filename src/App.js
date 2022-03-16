import './App.css';
import ResponsiveAppBar from './components/header';
import SimpleBottomNavigation from './components/footer';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <header className="App-header">
        <a href='/' id='startTag'> Build it</a>
      </header>
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
