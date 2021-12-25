import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router >
     <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Router> 
    </div>
  );
}

export default App;
