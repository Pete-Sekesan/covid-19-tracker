import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/script';
import { Doughnut } from 'react-chartjs-2';
import styles from './Graph.module.css';

const Graph = ({ data: { confirmed, deaths } }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const barChart = dailyData.length ? (
    <Doughnut
      data={{
        labels: ['Infected', 'Deaths', 'Active'],
        datasets: [
          {
            label: '',
            backgroundColor: ['#fff3b0', '#540b0e', '#e09f3e'],
            data: [
              confirmed.value,
              deaths.value,
              confirmed.value - deaths.value,
            ],
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{barChart}</div>;
};

export default Graph;
