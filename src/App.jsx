import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import BlogPage from './components/BlogPage'
import Home from './components/Home'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path="/add-blog" element={<BlogPage/>} />
      </Routes>
    </>
  )
}

export default App
