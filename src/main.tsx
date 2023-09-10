import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import UserProfile from './components/UserProfile/UserProfile.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:uuid" element={<UserProfile/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
