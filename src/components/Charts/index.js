import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import useFetch from '../../useFetch';
import ColumnChart from './ColumnChart';
import LineChart from './LineChart';

const Charts = () => {
  const { pathname } = useLocation();
  const { request, data, error } = useFetch();
  const { chartData, setChartData } = useState();
  const { date, setDate } = useState();

  useEffect(() => {
    async function fetchData() {
      request('/series.json');
    }
    fetchData();
  }, [request]);

  if (data && pathname === '/graficos/coluna')
    return (
      <div>
        <ColumnChart data={data} />
      </div>
    );
  if (data && pathname === '/graficos/linha')
    return (
      <div>
        <LineChart data={data} />
      </div>
    );
  else return null;
};

export default Charts;
