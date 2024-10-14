import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import { lineColumnChartOptions, donutChartOptions, radialBarChart1Options, radialBarChart2Options } from '../assets/js/pages/data_chart';
const Test = () => {  
  // Define your chartOptions here
  const chartOptions = {
    series: [
      {
        name: "2020",
        type: "column",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      },
      {
        name: "2019",
        type: "line",
        data: [23, 32, 27, 38, 27, 32, 27, 38, 22, 31, 21, 16]
      }
    ],
    chart: {
      height: 280,
      type: "line",
      toolbar: { show: false }
    },
    stroke: {
      width: [0, 3],
      curve: "smooth"
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%"
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    colors: ["#5664d2", "#1cbb8c"],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  };
  

  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#chart"), lineColumnChartOptions);
    chart.render();

    // Clean up on unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <h1>Test Chart</h1>
      <div id="chart"></div>
    </div>
  );
};

export default Test;
