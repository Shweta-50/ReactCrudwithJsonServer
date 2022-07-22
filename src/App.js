import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Studentslist from './Components/Studentslist';
import Addstudents from './Components/Addstudents';
import Header from './Components/Header';
import Edit from './Components/Edit';
import View from './Components/View';


function App() {
  return (
    
  <BrowserRouter>
     <Header title="React CRUD with JSON Server 🚀"/>
  <Routes>
    <Route exact path="/" element={<Studentslist/>} />
    <Route path="/add-student" element={<Addstudents/>} />
    <Route path="/edit/:id" element={<Edit/>} />
    <Route path="/view/:id" element={<View/>} />
    {/* <Route path="/" element={<Studentslist/>} /> */}
  </Routes>
  </BrowserRouter>


 
  );
}

export default App;
