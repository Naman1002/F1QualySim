import { useState } from 'react'
import './App.css'
import '../src/Tracks/Tracks'
import Tracks from '../src/Tracks/Tracks';
import TrackSelect from './TrackSelect/TrackSelect';
import Square from './Tracks/Square';
function App() {
  const [track,setTrack] = useState("monza")
  return (
    <>
      <section id="center">
          <h1>Get started</h1>
      </section>
      <Square></Square>
      <TrackSelect setTrack={setTrack}></TrackSelect>
      <Tracks track={track}></Tracks>
    </>
  )
}

export default App
