import { Route, Routes } from 'react-router-dom'
import './App.css'
import "./App.scss"
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { useProductStore } from './store/useProductStore'
import { useEffect } from 'react'
import { All } from './pages/All'
import { Men } from './pages/Men'
import { Women } from './pages/Women'
import { Accessories } from './pages/Accessories'
import { Shoes } from './pages/Shoes'

function App() {
  const { onFetchItems } = useProductStore();
  // 데이터를 불러오는 메서드 실행 한번만 실행, 값이 변경되면 실행
  useEffect(() => {
    onFetchItems()
  },[onFetchItems])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* 메인메뉴 */}
        <Route path='/all' element={<All />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/shoes' element={<Shoes />} />
      </ Routes>
      <Footer />
    </>
  )
}

export default App