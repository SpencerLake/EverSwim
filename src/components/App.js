import './App.css'
import React from 'react'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import Signup from './Signup.js'
import Test from './Test.js'
import AuthProvider from './contexts/AuthContext'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <main>
        <AuthProvider>
          <Routes>
            <Route path='/signup' element={<Test />} />
            {/* <Route path="/login" component={Login} /> */}
            {/* <Route path="/update-profile" component={UpdateProfile} /> */}
            {/* <Route path="/home" component={Home} /> */}
            {/* <PrivateRoute  path="/profile" component={ProfilePage} /> */}
          </Routes>
        </AuthProvider>
      </main>
    </div>
  )
}

export default App
