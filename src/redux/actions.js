export const start = (clock) => ({ type: "START", payload: { clock } });

export const stop = () => ({ type: "STOP" });

export const reset = () => ({ type: "RESET" });

export const lap = () => ({ type: "LAP" });