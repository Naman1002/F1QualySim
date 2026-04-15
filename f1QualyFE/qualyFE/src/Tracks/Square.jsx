import React, { useEffect ,useRef} from 'react'
import * as d3 from "d3"

function Square() {
    const svgRef = useRef();
    useEffect(() =>{
        // Runs after render so D3 can safely access and modify the SVG DOM
        // and draw the svg of width and height 400 px
        const svgArea = d3.select(svgRef.current) // current selects the real svg element from the dom?
        .attr("width",400)
        .attr("height",400);

        //adding a rectangle to the svg area 
        const path = svgArea.append("path") // why path
        .attr("d", "M100,100 L200,100 L200,200 L100,200 Z") // what is the d M,L and Z why is the format L200,100
        .attr("fill","none")
        .attr("stroke","white");

        // adding a circle on top of the rectangle
        const circle = svgArea.append("circle")
        .attr("r",5)
        .attr("fill","Red")

        //defining the length the circle has to travel to
        const length = path.node().getTotalLength()
        
        // animate
        circle.transition().duration(4000) // defining the circle animation for the duration of 4s
        .attrTween("transform",()=>{  
            // what does attrTween do?
            return function(t){
                     const point = path.node().getPointAtLength(t* length); // why define point and 
            // path.node().getPointAtLength(t* length) gives the length at t =0 and t=1, 
            // t is something that comes from d3 and is time at the start of the function 
            return `translate(${point.x}, ${point.y})`   // why are we translating and to what and why double return
            }
        }).on("end", function repeat() {
            d3.select(this)
            .transition()
            .duration(4000)
            .attrTween("transform", function () {
                return function (t) {
                const point = path.node().getPointAtLength(t * length);
                return `translate(${point.x}, ${point.y})`;
                };
            })
            .on("end", repeat);
        })
    },[])
  return (
    <div>
        <svg ref={svgRef}></svg>
    </div>
  )
}

export default Square