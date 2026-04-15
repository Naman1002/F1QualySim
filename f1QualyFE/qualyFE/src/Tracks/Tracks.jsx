import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import * as d3 from "d3"

function Tracks({track}) {
    const svgRef = useRef();
    useEffect(()=>{
        // the code that we want to run
        // if(!draw) return;
        // the code is guaranteed to run at least once when the component is mounted
        console.log("FETCH STARTING");
        fetch(`http://localhost:3000/track/${track}`)
        .then(res => res.json()) // convert the response to json
        .then(data => {
            const parsedData = data.map(d => ({
            x: +d.x,
            y: +d.y
            }));
            const svg = d3.select(svgRef.current).html("");// clears the screen after reloading
            let height = 400;
            let width = 400;
            let padding= 50;
            // scales 
             const xScale = d3.scaleLinear()
            .domain(d3.extent(parsedData, d => d.x))
            .range([padding, width - padding]);

            const yScale = d3.scaleLinear()
            .domain(d3.extent(parsedData, d => d.y))
            .range([height - padding, padding]); // invert Y

            //close the loop
             const closedData = [...parsedData, parsedData[0]];

            //draw the line
            const lineGenerator = d3.line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y));
            
            //draw track line
            svg.append("path")
            .datum(closedData)
            .attr("d",lineGenerator)
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", 4)
            .attr("transform", "rotate(10, 200, 200)");
        })

        //optional return and cleanup for useffect
    },[track]) //dependancy array ( tells useeffect which variables to listen to and react to, kind of hooks to the 
    // variable so that it changes on the change)
  return (
    <div>  
        <svg ref={svgRef} width={400} height={400}></svg> 
    </div>
  )
}

export default Tracks;