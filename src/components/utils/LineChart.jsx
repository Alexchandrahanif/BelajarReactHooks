import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";

// Registrasi komponen Chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  Title,
  Tooltip
);

const LineChart = ({
  labels = [],
  datasets = [],
  legendDisplay = true,
  title = "Line Chart",
  className = "w-[400px] h-[200px]",
}) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    let newChartInstance = null;

    if (chartRef && chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      newChartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels,
          datasets,
        },
        options: {
          plugins: {
            legend: {
              display: legendDisplay,
            },
          },
          scales: {
            x: {
              type: "category",
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      setChartInstance(newChartInstance);
    }

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [labels, datasets, legendDisplay]);

  return <canvas className={className} ref={chartRef}></canvas>;
};

export default LineChart;
