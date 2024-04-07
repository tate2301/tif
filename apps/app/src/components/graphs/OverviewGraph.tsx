/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useTheme } from 'next-themes';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

type Props = {};

const OverviewGraph = (props: Props) => {
  const { theme } = useTheme();
  const data = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: theme === 'dark' ? '#6d7f8a' : '#2f4858',
        borderRadius: 5,
        display: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false,
      },
      scales: {
        y: {
          ticks: { color: 'green', beginAtZero: true },
        },
        x: {
          ticks: { color: 'red', beginAtZero: true },
        },
      },
      title: {
        display: false,
        text: 'Monthly total sales',
      },
    },
  };
  return (
    <div className="flex flex-col w-full h-full flex-1">
      <Bar options={options} data={data} />
    </div>
  );
};

export default OverviewGraph;
