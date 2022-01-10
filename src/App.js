import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Header from './Components/Header';
import { Contact } from './Components/Contact';
import StudentList from './Components/StudentList';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = '/home' element={<Home />} />
        <Route path = '/contact' element ={<Contact />} />
        <Route path ='/studentlist' element ={<StudentList/> }  />
      </Routes>

    </Router>
  );
}

export default App;
