import { useState } from 'react'

import './App.css'
import News from './component/News'
import Navbar from './component/Navbar'
import { Routes, Route, Link } from 'react-router'
import Loading from './component/Loading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
  
       <Routes>
         <Route path="/" element={ <News category="general" /> } />
        <Route path="/business" element={ <News category="business" /> } />
        <Route path="/health" element={<News category="health"/>} />
     <Route path="/entertainment" element={<News category="entertainment"/>} />
     <Route path="/sports" element={<News category="sports"/>} />
     <Route path="/science" element={<News category="science"/>} />
     <Route path="/technology" element={<News category="technology"/>} />
      </Routes>
 
    </>
  )
}

export default App
