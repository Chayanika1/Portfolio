import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import Intro from './Pages/Intro/Intro';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs'
import { Route, Routes } from 'react-router-dom';
import Projects from './Pages/Projects/Projects';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';
import MyProject from './Pages/MyProject/MyProject';

function App() {
  return (
    <div className="container" >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Intro></Intro>}></Route>
        <Route path="/Intro" element={<Intro></Intro>}>
          
        </Route>
        <Route path="/Projects" element={<Projects></Projects>}></Route>
        
        <Route path="/MyProject/:id" element={<ProjectDetail></ProjectDetail>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
