import viteLogo from '/vite.svg'
import { useState } from 'react'
import './MainPage.css'
import reactLogo from '../assets/react.svg'
import electronLogo from "../assets/electron.svg"
import { addCount, addCountSlice } from '../redux/CounterSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/Store'

export default function App() {
  const dispatch = useDispatch()
  const count = useSelector((state: RootState) => state.counter.count)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.electronjs.org" target="_blank">
          <img src={electronLogo} className="logo electron" alt="Electron logo" />
        </a>
      </div>
      <h1>Vite + React + Electron</h1>
      <div className="card">
        <button onClick={() => dispatch(addCount())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}