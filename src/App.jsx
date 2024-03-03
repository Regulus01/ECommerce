import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/notFound/NotFound'
import Login from './pages/login/Login'
import { useAuth } from './context/AuthContext'
import Product from './pages/product/Product'

function App() {
  const { user } = useAuth();
  
  return (
    <div className="App">
      
        <BrowserRouter>
          <Navbar />
          <div className='main-content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About /> }/>
              <Route path="/product/:id" element={<Product />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/> } />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
