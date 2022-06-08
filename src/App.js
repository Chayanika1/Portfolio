import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import Intro from './Pages/Intro/Intro';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
    </div>
  );
}

export default App;
