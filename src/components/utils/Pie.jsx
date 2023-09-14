import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const Pie = ({ labels, title, datas, offset, colors, className }) => {
  // Ref untuk elemen canvas
  const chartRef = useRef(null);

  // State untuk menyimpan objek grafik saat ini
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    let newChartInstance = null;

    if (chartRef && chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const chartData = {
        labels: labels ? labels : ["satu", "dua", "tiga"],
        datasets: [
          {
            label: title ? title : "Total",
            data: datas ? datas : [30000, 15000, 10000],
            backgroundColor: colors
              ? colors
              : ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
            hoverOffset: offset ? offset : 2,
          },
        ],
      };

      newChartInstance = new Chart(chartRef.current, {
        type: "doughnut",
        data: chartData,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      setChartInstance(newChartInstance);
    }

    return () => {
      // Hancurkan grafik sebelum komponen unmount
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className={className ? className : "w-[200px] h-[200px]"}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Pie;
