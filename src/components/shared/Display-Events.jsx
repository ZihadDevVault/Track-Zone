import { useState } from "react";
import {
  List,
  ListItem,
  Checkbox,
  IconButton,
  TextField,
  Button,
  Typography,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const DisplayEvents = ({ events, addEvent, updateEvent, deleteEvent }) => {
  const [newEvent, setNewEvent] = useState("");
  const [editEventId, setEditEventId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAdd = () => {
    if (!newEvent.trim()) return;
    addEvent({ message: newEvent });
    setNewEvent("");
  };

  const handleUpdate = (key) => {
    updateEvent(key, { message: editValue });
    setEditEventId(null);
    setEditValue("");
  };

  return (
    <Box mt={2}>
      <Typography variant="h6" gutterBottom>
        Events
      </Typography>

      {events.length === 0 && (
        <Typography variant="body2" color="text.secondary">
          No events found.
        </Typography>
      )}

      <List>
        {events.map((event) => (
          <ListItem
            key={event.key}
            sx={{
              border: "1px solid #ccc",
              borderRadius: 2,
              mb: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1,
              bgcolor: event.completed ? "#e0f7fa" : "white",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Checkbox
                checked={event.completed}
                onChange={() =>
                  updateEvent(event.key, { completed: !event.completed })
                }
              />

              {editEventId === event.key ? (
                <TextField
                  size="small"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={() => handleUpdate(event.key)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleUpdate(event.key)
                  }
                />
              ) : (
                <Typography
                  sx={{
                    textDecoration: event.completed ? "line-through" : "none",
                  }}
                >
                  {event.message}
                </Typography>
              )}
            </Stack>

            <Stack direction="row" spacing={1}>
              <IconButton
                size="small"
                onClick={() => {
                  setEditEventId(event.key);
                  setEditValue(event.message);
                }}
              >
                <Edit fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => deleteEvent(event.key)}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Stack>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Stack direction="row" spacing={2}>
        <TextField
          size="small"
          label="New Event"
          fullWidth
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <Button variant="contained" onClick={handleAdd}>
          Create
        </Button>
      </Stack>
    </Box>
  );
};

export default DisplayEvents;
