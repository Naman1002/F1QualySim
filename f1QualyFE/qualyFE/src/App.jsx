import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import '../src/Tracks/Tracks'
import Tracks from '../src/Tracks/Tracks';
import TrackSelect from './TrackSelect/TrackSelect';
function App() {
  return (
    <>
      <section id="center">
          <h1>Get started</h1>
      </section>
      <TrackSelect></TrackSelect>
      <Tracks></Tracks>
      <div className="ticks"></div>

    </>
  )
}

export default App
