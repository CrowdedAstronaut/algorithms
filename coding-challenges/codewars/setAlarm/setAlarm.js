const setAlarm = (employed, vacation) =>
  (employed && vacation) ||
  (!employed && !vacation) ||
  (employed === false && vacation === true)
    ? false
    : true;
