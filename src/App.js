import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import NotFoundPage from './Pages/NotFoundPage';
import RegisterPage from './Pages/Register';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<RegisterPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
