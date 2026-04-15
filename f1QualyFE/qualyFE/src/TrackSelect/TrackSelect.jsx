import React from 'react'
import Tracks from '../Tracks/Tracks'
function TrackSelect({setTrack}) {
  return (
    <div>
        <button onClick={() => setTrack("Italy(Monza)")}>
            Monza
        </button>
        <button onClick={() => setTrack("GBR")}>
            Silverstone
        </button>
        <button onClick={() => setTrack("Singapore")}>
            Singapore
        </button>
        <button onClick={() => setTrack("Australia")}>
            Australia
        </button>
    </div>
  )
}

export default TrackSelect