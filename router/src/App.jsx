import { useState } from 'react'
import './App.css'
import Routes from 'react-router-dom'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/'element={<Home/>}/>

     </Routes>
    </>
  )
}

export default App
