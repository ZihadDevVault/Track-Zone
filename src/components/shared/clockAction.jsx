import { useState } from "react";
import Clockform from "./clockForm";
import DisplayEvents from "./Display-Events";
import useEvent from "../hooks/useEvents/useEvent";
import { Button, Stack } from "@mui/material";

const ClockAction = ({
  local,
  clock,
  updateFunc,
  CreateClock,
  setisidDeleted,
}) => {
  const { getEventsByClock, addEvent, updateEvent, deleteEvent } = useEvent();

  const [isCreateForm, setisCreateForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEvent, setIsEvent] = useState(false);

  const toggleCreateClock = () => {
    setisCreateForm(!isCreateForm);
  };

  const deleteFun = () => {
    setisidDeleted(true);
  };

  const EditFunc = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Stack direction="row" spacing={2} mb={2}>
        <Button variant="contained" onClick={EditFunc}>
          {isEdit ? "Cancel Edit" : "Edit"}
        </Button>

        {local ? (
          <Button variant="contained" onClick={toggleCreateClock}>
            {isCreateForm ? "Cancel" : "Create Clock"}
          </Button>
        ) : (
          <Button variant="contained" color="error" onClick={deleteFun}>
            Delete Clock
          </Button>
        )}

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setIsEvent(!isEvent)}
        >
          {isEvent ? "Hide Events" : "Events"}
        </Button>
      </Stack>

      {isEdit && (
        <Clockform value={clock} HandelData={updateFunc} edit={true} />
      )}

      {isCreateForm && (
        <Clockform value={clock} HandelData={CreateClock} edit={false} />
      )}

      {isEvent && (
        <DisplayEvents
          events={getEventsByClock(clock.id)}
          addEvent={(data) => addEvent(clock.id, data)}
          updateEvent={updateEvent}
          deleteEvent={deleteEvent}
        />
      )}
    </div>
  );
};

export default ClockAction;
