import './App.css';
import Topbar from './components/Topbar'; 
import {BrowserRouter,Route, Routes,} from "react-router-dom";
import Navigation from './components/Navigation';
import About from './components/About'


function App() {
  return (
    <BrowserRouter> 
    <Topbar />
    <Navigation></Navigation>
     <Routes>
     <Route path="/about" Component={About} exact />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
