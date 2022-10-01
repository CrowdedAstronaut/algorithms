function minutesToSeconds(time) {
  const minutesArray = time.split(":");
  const minutesToSeconds = parseInt(minutesArray[0]) * 60;
  const seconds = parseInt(minutesArray[1]);
  return seconds >= 60 ? false : minutesToSeconds + seconds;
}
