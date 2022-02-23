import { convertHMS } from "./helpers";

const initialState = {
  isOn: false,
  timer: 0,
  clock: null,
  laps: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return {
        isOn: true,
        timer: state.timer + 1,
        clock: action.payload.clock,
        laps: state.laps,
      };

    case "STOP":
      clearInterval(state.clock);
      return { ...state, isOn: false };

    case "RESET":
      return { ...state, timer: 0, laps: [] };

    case "LAP":
      return { ...state, laps: [...state.laps, convertHMS(state.timer)] };

    default:
      return state;
  }
};
