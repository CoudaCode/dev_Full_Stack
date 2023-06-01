import { useState , useRef } from 'react'

import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import './App.css'
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Single from "./pages/Single"
function App() {
      return (<>
       <Router>
          <Layout>
            <Routes>
                <Route path='/' element ={<Home></Home>} />
                <Route path='/post/:title' element ={<Single></Single>} />
            </Routes> 
          </Layout>
       </Router>
      </>)
  } 
export default App
