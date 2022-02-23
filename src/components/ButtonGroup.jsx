import { useSelector, useDispatch } from "react-redux";
import { lap, reset, stop, start } from "../redux/actions";
import React from "react";

function ButtonGroup() {
  const isOn = useSelector((state) => state.isOn);
  const dispatch = useDispatch();

  const startTimer = (clock) => dispatch(start(clock));

  const stopTimer = () => dispatch(stop());

  const resetTimer = () => dispatch(reset());

  const handleLaps = () => dispatch(lap());

  const toggleButton = () => {
    if (isOn) {
      stopTimer();
    } else {
      let clock = setInterval(() => startTimer(clock), 1);
    }
  };

  const toggleClass = () => {
    let text = "btn btn-lg shadow-none ";
    if (isOn) text += "btn-outline-danger";
    else text += "btn-outline-success";
    return text;
  };

  return (
    <div className="">
      <button type="button" className={toggleClass()} onClick={toggleButton}>
        {isOn ? "Stop" : "Start"}
      </button>
      {!isOn && <button
        type="button"
        className="btn btn-outline-warning btn-lg shadow-none"
        onClick={resetTimer}
      >
        Reset
      </button>}
      {isOn && <button
        type="button"
        className="btn btn-outline-primary btn-lg shadow-none"
        onClick={handleLaps}
      >
        Lap
      </button>}
    </div>
  );
}

export default ButtonGroup;
