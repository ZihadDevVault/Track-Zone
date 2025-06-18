import { useEffect, useState } from "react";
import { format, addSeconds } from "date-fns";
import classes from "./clock.module.css";

const DisplayClock = ({ clock, date: initialDate, timezone, offset }) => {
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    setDate(initialDate); 
  }, [initialDate]);

  useEffect(() => {
    if (!initialDate) return;

    const interval = setInterval(() => {
      setDate((prevDate) => addSeconds(prevDate, 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [initialDate]);

  if (!date) {
    return (
      <div className={classes.card}>
        <h1>{clock.title}</h1>
        <h2>Loading...</h2>
        <p>
          Offset: {timezone}
          {offset / 60 > 0 ? `+${offset / 60}` : offset / 60}
        </p>
      </div>
    );
  }

  const Offsethour = offset / 60;
  const digitalTime = format(date, "hh:mm:ss aa");

  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secondDeg = seconds * 6; // 360 / 60
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = ((hours % 12) / 12) * 360 + minutes * 0.5;

  return (
    <div className={classes.clockCard}>
      <div className={classes.clockFace}>
        <div className={classes.hourHand} style={{ transform: `rotate(${hourDeg}deg)` }} />
        <div className={classes.minuteHand} style={{ transform: `rotate(${minuteDeg}deg)` }} />
        <div className={classes.secondHand} style={{ transform: `rotate(${secondDeg}deg)` }} />
        <div className={classes.centerDot} />
      </div>
      <h2 className={classes.clockTitle}>{clock.title}</h2>
      <p className={classes.digitalTime}>{digitalTime}</p>
      <p className={classes.timezone}>
        Timezone: {timezone} {Offsethour > 0 ? `+${Offsethour}` : `${Offsethour}`}
      </p>
    </div>
  );
};

export default DisplayClock;
