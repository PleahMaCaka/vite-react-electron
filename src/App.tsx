import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </HashRouter>
  )
}