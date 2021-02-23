import React, { useEffect, useState } from 'react';

import useFetch from '../../useFetch';
import ColumnChart from './ColumnChart';

const Charts = () => {
  const { request, data, error } = useFetch();
  const { chartData, setChartData } = useState();
  const { date, setDate } = useState();

  useEffect(() => {
    async function fetchData() {
      request('/series.json');
    }
    fetchData();
  }, [request]);

  if (data)
    return (
      <div>
        <ColumnChart data={data} />
      </div>
    );
  else return null;
};

export default Charts;
