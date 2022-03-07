// import logo from './logo.svg';
import React from 'react'
import './App.css';
import {Routes, Route} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'
import Welcome from './components/users/Welcome'
import CreatePost from './components/bets/CreateBet'
import EditPost from './components/posts/EditPost'
import CreateBet from './components/bets/CreateBet'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/createBet' element={<CreateBet/>}/>
     </Routes>
    </div>
  );
}

export default App;
