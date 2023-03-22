import { Routes, Route } from 'react-router-dom'

import { Main } from './pages/Main/Main'
import { OnePage } from './pages/OnePage/OnePage'
import { Register } from './pages/Register/Register'
import { Login } from './pages/Login/Login'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/page' element={<OnePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
  )
}

export default App
