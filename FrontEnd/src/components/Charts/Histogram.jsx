import React, { useState } from "react";
import Plot from "react-plotly.js";

export default function Histogram(props) {
  var plot1 = {
    x: Object.keys(props.statistics),
    y: Object.values(props.statistics),
    name: "2016",

    type: "bar",
  };


  var data = [plot1];
  return (
    <div>
      <Plot
        data={data}
        layout={{
          width: 400,
          height: 400,
          title: "Suivi des bugs",
        }}
      />
    </div>
  );
}