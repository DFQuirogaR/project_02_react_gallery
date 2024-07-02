import './App.css'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import { Space1 } from './components/Space1'
import { Space2 } from './components/Space2'
import { Space3 } from './components/Space3'
import { Space4 } from './components/Space4'
import { Space5 } from './components/Space5'
import { Space6 } from './components/Space6'
import { Navigation } from './components/Navigation'

function App() {


  return (
    <>
    <BrowserRouter>
      <div>
        <h1 id="title" className='text-center my-3'>Proyecto Galería</h1>
      </div>
      <Routes>
        <Route path="/space1" element={<Space1 className="image-size"/>} />
        <Route path="/space2" element={<Space2 className="image-size"/>} />
        <Route path="/space3" element={<Space3 className="image-size"/>} />
        <Route path="/space4" element={<Space4 className="image-size"/>} />
        <Route path="/space5" element={<Space5 className="image-size"/>} />
        <Route path="/space6" element={<Space6 className="image-size"/>} />
      </Routes>
      <Navigation/>
    </BrowserRouter>
    </>
  )
}

export default App