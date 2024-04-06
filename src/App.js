import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddStudent from './components/AddStudent';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './Home'

function App() {
  return (
    <Router>
      <>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/sign-in' element={<SignIn />}></Route>
          <Route exact path='add' element={<AddStudent />}></Route>
          <Route exact path='sign-up' element={<SignUp />}></Route>
        </Routes>
        </>
   </Router>
  );
}

export default App;
