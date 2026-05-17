import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
  )
}

export default App
