import "../../App.scss";
import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const data01 = [
  { name: "Daraz", value: 35, fill: "#84AF27" },
  { name: "Bikroy", value: 30, fill: "#0095A0" },
  { name: "Pickaboo", value: 35,fill: "#FFC239" }
  
];


export default function Piechart() {
  return (
    <div className="source">
    <h2 className="source__title">Source</h2>
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={180}
        cy={180}
        outerRadius={100}
        
      />

      <Tooltip />
    </PieChart>

   
   <div className="company__info">
        <div className="daraz">
        <div className="square__green"></div>
        <p>Daraz</p>
        <h2>35%</h2>
        </div>

        <div className="bikroy">
        <div className="square__cyan"></div>
        <p>Bikroy</p>
        <h2>30%</h2>
        </div>

        <div className="pickaboo">
        <div className="square__yellow"></div>
        <p>Pickaboo</p>
        <h2>35%</h2>
        </div>
    </div>
    
    </div>
  );
}