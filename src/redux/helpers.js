export function convertHMS(value) {
  let milliseconds = Math.floor((value % 1000) / 10),
    seconds = Math.floor((value / 1000) % 60),
    minutes = Math.floor((value / (1000 * 60)) % 60),
    hours = Math.floor((value / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}