import ChartBar from "./ChartBar";

import "./Chart.css";

function Chart(props) {
  const maxValue = props.dataPoints.reduce(
    (prevVal, currVal) => prevVal + currVal.value,
    0
  );

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
