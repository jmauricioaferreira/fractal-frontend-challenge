import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ColumnChart = ({ data }) => {
  const [date, setDate] = React.useState([]);

  useEffect(() => {
    const chartData = data.map((item) => {
      return {
        x: item.data_hora,
        y: item.chuva,
      };
    });
    setDate(chartData);
  }, [data]);

  let parsedData = [];

  date.forEach((item) => {
    parsedData.push([item.x, item.y]);
  });

  const options = {
    chart: {
      type: 'column',
    },
    series: [
      {
        data: parsedData,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ColumnChart;
