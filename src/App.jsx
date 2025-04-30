import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Applayout from './layout/Applayout'
import Mainpage from './pages/Mainpage/Mainpage'
import Login from './pages/Loginpage/Loginpage'
import News from './pages/Listpage/Listpage'
import Detail from './pages/Detailpage/Detailpage'
import Mypage from './pages/Mypage/Mypage'
import NotFoundPage from './pages/NotFoundPage/NotFoundpage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Applayout />} >
        <Route index element={<Mainpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='news'>
          <Route index element={<News />} />
          <Route path=':id' element={<Detail />} />
        </Route>
        <Route path='/mypage' element={<Mypage />} />
      </Route>

      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  )
}

export default App
