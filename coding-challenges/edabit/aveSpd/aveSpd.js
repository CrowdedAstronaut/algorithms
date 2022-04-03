function aveSpd(upTime, upSpd, downSpd) {
  let distance = upSpd * upTime;
  let downTime = distance / downSpd;
  return (distance * 2) / (upTime + downTime);
}
