import React from 'react'
import { useRef, useEffect } from 'react'
import * as d3 from "d3"

function Tracks({draw}) {
    const svgRef = useRef();

    useEffect(()=>{
        // the code that we want to run
        if(!draw) return;
        // the code is guaranteed to run at least once when the component is mounted
        fetch("http://localhost:3000/track")
        .then(res => res.json);

        //optional return and cleanup for useffect
    },[]) //dependancy array ( tells useeffect which variables to listen to and react to, kind of hooks to the variable)
  return (
    <div>Tracks</div>
  )
}

export default Tracks