import  { useState } from "react";
import { TextField, Select, MenuItem, InputLabel, FormControl, Button, Box } from "@mui/material";
import { getOffset, TimeZones } from "../util/timezone";

const Clockform = ({ edit = true, value = { timezone: "", offset: 0, title: "" }, HandelData }) => {
  const [formValue, setFormValue] = useState({ ...value });

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    HandelData({
      ...formValue,
      offset: Number(formValue.offset) * 60, 
    });
  };

  return (
    <Box component="form" onSubmit={SubmitHandler} sx={{ mt: 1 }}>
      <TextField
        fullWidth
        margin="normal"
        label="Title"
        id="TitleId"
        name="title"
        value={formValue.title}
        onChange={changeHandler}
        required
      />

      <FormControl fullWidth margin="normal">
        <InputLabel id="TimezoneId-label">TimeZone</InputLabel>
        <Select
          labelId="TimezoneId-label"
          id="TimezoneId"
          name="timezone"
          value={formValue.timezone}
          label="TimeZone"
          onChange={changeHandler}
          required
        >
          {TimeZones().map((zone) => (
            <MenuItem key={zone} value={zone}>
              {zone}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {(formValue.timezone === "UTC" || formValue.timezone === "GMT") && (
        <FormControl fullWidth margin="normal">
          <InputLabel id="OffsetId-label">Offset</InputLabel>
          <Select
            labelId="OffsetId-label"
            id="OffsetId"
            name="offset"
            value={formValue.offset}
            label="Offset"
            onChange={changeHandler}
            required
          >
            {getOffset().map((offset) => (
              <MenuItem key={offset} value={offset}>
                {offset}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
        {edit ? "Update" : "Create"}
      </Button>
    </Box>
  );
};

export default Clockform;
