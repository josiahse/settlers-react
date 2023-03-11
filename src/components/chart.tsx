import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { toString } from "lodash";

interface TProps {
  expectedNums: Record<number, number>;
  numResults: Record<number, number>;
}

const Chart = ({ expectedNums, numResults }: TProps) => {
  const options: Highcharts.Options = {
    chart: { type: "xy" },
    title: {
      text: "Roll Results",
    },
    xAxis: [
      {
        categories: Object.keys(expectedNums).map(toString),
        crosshair: true,
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        title: { text: "Rolls" },
        labels: {
          style: {
            color: "black",
          },
        },
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      align: "left",
      x: 80,
      verticalAlign: "top",
      y: 80,
      floating: true,
      backgroundColor: "rgba(255,255,255,0.25)",
    },
    series: [
      {
        name: "Results",
        type: "column",
        data: Object.values(numResults),
      },
      {
        name: "Expected",
        type: "spline",
        data: Object.values(expectedNums).map(n => n / 36),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
