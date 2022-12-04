import { useState } from "react";

import "./ChartBar.css";

function ChartBar(props) {
  const [isHovering, setIsHovering] = useState(false);

  const mouseOverHandler = function () {
    setIsHovering(true);
  };

  const mouseOutHandler = function () {
    setIsHovering(false);
  };

  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    let fillPercentage = (props.value / props.maxValue) * 100;

    if (fillPercentage > 0 && fillPercentage < 5) {
      fillPercentage = 5;
    } else if (fillPercentage > 95 && fillPercentage < 100) {
      fillPercentage = 95;
    }

    barFillHeight = fillPercentage + "%";
  }

  return (
    <div className="chart-bar">
      {isHovering && (
        <span className="chart-bar__value-tooltip">Rs. {props.value}</span>
      )}
      <div
        className="chart-bar__inner"
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
      >
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
