import React, { useState } from "react";
import useClock from "../hooks/useClock/useClock";
import ClockAction from "../shared/clockAction";
import DisplayClock from "../shared/Display-Clock";
import { addSeconds, formatDistance } from "date-fns";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";

const CreateAnotherClock = ({
  mytimezone,
  myoffset,
  clock,
  id,
  deleteItem,
  upadateClock,
  LocalClock,
}) => {
  const { date } = useClock(mytimezone, myoffset);
  const [isDeleted, setIsDeleted] = useState(false);
  if (isDeleted) deleteItem(id);

  return (
    <Card
      sx={{
        minWidth: 275,
        boxShadow: 4,
        borderRadius: 3,
        position: "relative",
        bgcolor: "#f9faff",
      }}
    >
      <CardContent>
        <DisplayClock clock={clock} offset={myoffset} date={date} timezone={mytimezone} />

        <Box sx={{ my: 1 }}>
          <ClockAction
            clock={clock}
            local={false}
            setisidDeleted={setIsDeleted}
            updateFunc={upadateClock}
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontStyle: "italic", fontWeight: 500 }}
        >
          Difference from Local Clock:{" "}
          <Box component="span" sx={{ fontWeight: "bold", color: "#357abd" }}>
            {formatDistance(LocalClock, date)}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CreateAnotherClock;
