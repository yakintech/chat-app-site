import React, { useContext } from 'react'
import ChatPage from './pages/ChatPage'
import Create from './pages/Group/Create'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Index from './pages/Group/Index'
import Login from './pages/public/Login'
import { authContext } from './store/AuthContext'
import ConfirmCode from './pages/public/ConfirmCode'

function App() {

  const { loginStatus, setloginStatus } = useContext(authContext);

  const logout = () => {
    setloginStatus(false);
  }

  return (<>
    <Auth>
      <h1>Admin Header</h1>
      <button onClick={logout}>Logout</button>
      <Routes>
        <Route path='/group/create' element={<Create />} />
        <Route path='/group' element={<Index />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <h1>Admin Footer</h1>
    </Auth>

  </>
  )
}

function Auth({ children }) {

  const { loginStatus } = useContext(authContext);

  if (loginStatus) {
    return children
  }
  else {
    return <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/confirmCode' element={<ConfirmCode />} />
    </Routes>
  }
}
export default App