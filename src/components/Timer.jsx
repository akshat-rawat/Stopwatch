import { useSelector } from "react-redux";
import React from "react";

import { convertHMS } from "../redux/helpers";

function Timer() {
  const timer = useSelector((state) => state.timer);
  return <div className="timer">{convertHMS(timer)}</div>;
}

export default Timer;
