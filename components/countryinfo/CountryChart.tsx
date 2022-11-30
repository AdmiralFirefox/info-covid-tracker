import { FC } from "react";
import { CountryChartTypes } from "../../types/CountryChartTypes";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "../../styles/countryinfo/CountryChart.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CountryChart: FC<CountryChartTypes> = ({
  chartTitle,
  chartSubtitle,
  countryLabel,
  countryDataInfo,
}) => {
  const countryData = {
    labels: countryLabel,
    datasets: [
      {
        label: chartSubtitle,
        data: countryDataInfo,
        borderColor: "#ba292e",
        backgroundColor: "#ba292e",
        pointBackgroundColor: "#e15d3a",
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 15,
            weight: "700",
          },
          color: "#fff",
        },
      },
      title: {
        display: true,
        text: chartTitle,
        font: {
          size: 25,
        },
        color: "#fff",
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#e15d3a",
          beginAtZero: true,
          font: {
            size: 13,
            weight: "600",
          },
        },
        grid: {
          color: "hsl(0, 0%, 25%)",
        },
      },
      x: {
        ticks: {
          color: "#e15d3a",
          beginAtZero: true,
          font: {
            size: 13,
            weight: "600",
          },
        },
        grid: {
          color: "hsl(0, 0%, 25%)",
        },
      },
    },
  };

  return (
    <>
      <div className={styles["chart-wrapper"]}>
        <div className={styles["chart-content"]}>
          <Line options={options} data={countryData} />
        </div>
      </div>
    </>
  );
};

export default CountryChart;
