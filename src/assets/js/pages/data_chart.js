// Line-Column Chart Configuration
export const lineColumnChartOptions = {
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
  
  // Donut Chart Configuration
  export const donutChartOptions = {
    series: [42, 26, 15],
    chart: {
      height: 250,
      type: "donut"
    },
    labels: ["Product A", "Product B", "Product C"],
    plotOptions: {
      pie: {
        donut: { size: "75%" }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    colors: ["#5664d2", "#1cbb8c", "#eeb902"]
  };
  
  // Radial Bar Chart Configurations
  export const radialBarChart1Options = {
    series: [72],
    chart: {
      type: "radialBar",
      width: 60,
      height: 60,
      sparkline: { enabled: true }
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#5664d2"],
    stroke: { lineCap: "round" },
    plotOptions: {
      radialBar: {
        hollow: { margin: 0, size: "70%" },
        track: { margin: 0 },
        dataLabels: { show: false }
      }
    }
  };
  
  export const radialBarChart2Options = {
    series: [65],
    chart: {
      type: "radialBar",
      width: 60,
      height: 60,
      sparkline: { enabled: true }
    },
    dataLabels: { enabled: false },
    colors: ["#1cbb8c"],
    stroke: { lineCap: "round" },
    plotOptions: {
      radialBar: {
        hollow: { margin: 0, size: "70%" },
        track: { margin: 0 },
        dataLabels: { show: false }
      }
    }
  };
  