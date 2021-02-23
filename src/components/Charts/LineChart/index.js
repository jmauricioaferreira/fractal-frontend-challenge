import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = ({ data }) => {
  const [date, setDate] = React.useState([]);

  useEffect(() => {
    const chartData = data.map((item) => {
      return {
        x: item.data_hora,
        y: Number(item.nivel),
      };
    });
    setDate(chartData);
  }, [data]);

  let parsedData = [];

  date.forEach((item) => {
    parsedData.push([item.x, item.y]);
  });

  console.log(parsedData);

  const options = {
    series: [
      {
        data: parsedData,
      },
    ],
  };

  console.log(options.series.data);
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
