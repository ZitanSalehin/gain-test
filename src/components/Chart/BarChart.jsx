import React from "react";
import "../../App.scss";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [

  { name: "Official", value: 30000 },
  { name: "Unofficial", value: 40000 },
  { name: "Without Warranty", value: 50000 },
  { name: "Used", value: 20000 },

];

const colors = [
  "#0095A0",
  "#0095A0",
  "#0095A0",
  "#0095A0",
  "#0095A0",
  "#0095A0",
];

function Barchart() {
  return (
    <div className="source2">
      <h2 className="source__title2">Condtions</h2>
    
    <BarChart width={550} height={280} data={data} barCategoryGap="30%" style={{marginTop:"80px"}}>
      <CartesianGrid strokeDasharray="3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value">
        {data.map((entry, index) => (
          <Cell fill={colors[index]} />
        ))}
      </Bar>
    </BarChart>
  </div>
  );
}

export default Barchart