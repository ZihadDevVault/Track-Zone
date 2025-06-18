import CreateAnotherClock from "./CreateAnotherClock";
import { Typography, Divider, Grid, Box } from "@mui/material";

const ClockList = ({ arrofClockValue, deleteItem, upadateClock, LocalClock }) => {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: "#357abd", fontWeight: "bold", textAlign: "center", letterSpacing: 1.2 }}
      >
        Other Clocks
      </Typography>

      <Divider
        sx={{
          height: 3,
          background: "linear-gradient(to right, #357abd, #4a90e2)",
          borderRadius: 2,
          mb: 3,
          width: "80%",
          mx: "auto",
        }}
      />

      {arrofClockValue.length === 0 ? (
        <Typography
          variant="body1"
          sx={{ textAlign: "center", fontStyle: "italic", color: "text.secondary", mt: 4 }}
        >
          There is no Clock. Please create one.
        </Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {arrofClockValue.map((oneClock) => (
            <Grid item xs={12} sm={6} md={4} key={oneClock.id}>
              <CreateAnotherClock
                mytimezone={oneClock.timezone}
                myoffset={oneClock.offset}
                clock={oneClock}
                id={oneClock.id}
                deleteItem={deleteItem}
                upadateClock={upadateClock}
                LocalClock={LocalClock}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ClockList;
