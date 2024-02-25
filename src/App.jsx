import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/notFound/NotFound'
import Login from './pages/login/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
