import React from "react";
import './Bar.css';
import ApexCharts from 'react-apexcharts';

const BarChart = () => {
  const options = {
    series: [{
      name: 'Sales',
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    chart: {
      type: 'bar',
      height: '100%',
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: 'end',
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'South Korea', 'Canada', 'United Kingdom',
        'Netherlands', 'Italy', 'France',
        'Japan', 'United States', 'China', 'Germany'
      ],
      // labels: {
      //   style: {
      //     colors: 'white', // Set x-axis label color to white
      //     fontSize: '12px'
      //   }
      // },
      labels:{
        show:false
      },
      axisTicks: { show: false }, // Hide x-axis ticks
      axisBorder: { show: false }, // Hide x-axis border
    },
    yaxis: {
      labels: {
        show: true ,// Hide y-axis labels 
        style:{
           colors:'white', 
           fontSize:'12px'
        }
      }
    },
    grid: {
      show: false // Disable grid lines
    },
  };

  return (
    <div className="bar-chart">
      <ApexCharts type="bar" options={options} series={options.series} width="100%" height="100%" />
    </div>
  );
};

export default BarChart;



// import React from "react";
// import './Bar.css'; 
// import { Bar } from "react-chartjs-2";

// const BarChart = () => {
//   const labels = ["January", "February", "March", "April", "May", "June"];

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: "rgb(41, 54, 197)",
//         margin:0, 
//         data: [0, 10, 5, 2, 20, 30, 45],
//         barPercentage: 0.9, 
//         categoryPercentage: 0.8,
//         data: [0, 10, 5, 2, 20, 30, 45],
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false, 
//     layout: {
//     padding: {
//         top: 20,    
//         right: 20,  
//         bottom: 20, 
//         left: 20,   
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         labels: {
//           color: "rgba(246, 246, 246, 0.8)", 
//           font: {
//             size: 17, 
//           },
//         },
//       },
//       tooltip: {
//         backgroundColor: "rgba(0,0,0,0.8)",
//         titleColor: "rgba(246, 246, 246, 0.8)", 
//         bodyColor: "rgba(246, 246, 246, 0.8)",
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false, 
//         },
//         ticks: {
//           color: "rgba(246, 246, 246, 0.8)",
//           font: {
//             size: 12, 
//           },
//         },
//       },
//       y: {
//         grid: {
//           display:false,
//         },
//         ticks: {
//           color: "rgba(246, 246, 246, 0.8)", 
//           font: {
//             size: 12,
//           },
//           stepSize: 10, 
//         },
//       },
//     },
//     animation: {
//       duration: 1500, 
//       easing: "easeOutBounce",
//     },
//   };





//   return (
//     <div className="bar-chart" >
//       <Bar options={options}  data={data} />
//     </div>
//   );
// };

// export default BarChart;
