import React, { useEffect } from "react";
import useClock from "../hooks/useClock/useClock";
import DisplayClock from "../shared/Display-Clock";
import ClockAction from "../shared/clockAction";
import { Box, Paper, Typography } from "@mui/material";

const LocalClock = ({ clock, local, updateFunc, CreateClock }) => {
  const { date, offset, timezone } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateFunc({
      date,
      timezone,
      offset
    });
  }, [date]);

  return (
    <Box
      sx={{
        maxWidth: `400px`,
        margin: "5px auto",
        padding: 3,
        bgcolor: "#fff7f6",
        borderRadius: 3,
        boxShadow: "0 4px 10px rgba(249, 65, 68, 0.3)",
      }}
    >
      {date && (
        <DisplayClock
          date={date}
          timezone={timezone}
          clock={clock}
          offset={offset}
          isLocal={true}
        />
      )}
      <ClockAction local={local} clock={clock} updateFunc={updateFunc} CreateClock={CreateClock} />
    </Box>
  );
};

export default LocalClock;
