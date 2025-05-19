import { useState } from 'react'
import LoadingBar from "react-top-loading-bar";

import './App.css'
import News from './component/News'
import Navbar from './component/Navbar'
import { Routes, Route, Link } from 'react-router'
import Loading from './component/Loading'

function App() {
  const [count, setCount] = useState(0)
   const [progress, setProgress] = useState(0);
   
  

  return (
    <>
    <Navbar />
   <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
       <Routes>
         <Route path="/" element={ <News setProgress={setProgress} category="general" /> } />
        <Route path="/business" element={ <News setProgress={setProgress} category="business" /> } />
        <Route path="/health" element={<News setProgress={setProgress} category="health"/>} />
     <Route path="/entertainment" element={<News setProgress={setProgress} category="entertainment"/>} />
     <Route path="/sports" element={<News setProgress={setProgress} category="sports"/>} />
     <Route path="/science" element={<News setProgress={setProgress} category="science"/>} />
     <Route path="/technology" element={<News setProgress={setProgress} category="technology"/>} />
      </Routes>
 
    </>
  )
}

export default App
