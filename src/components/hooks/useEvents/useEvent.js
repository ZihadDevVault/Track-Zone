import { useState } from "react";
import { generate } from "shortid";

const useEvent = () => {
  // initial state খালি রাখা হয়েছে, নতুন ইভেন্ট যুক্ত হবে runtime এ
  const [state, setState] = useState({});

  // নির্দিষ্ট clockId অনুযায়ী ইভেন্টগুলো ফেরত দেবে
  const getEventsByClock = (clockId) => {
    return Object.entries(state)
      .filter(([key]) => key.startsWith(clockId))
      .map(([key, event]) => ({ ...event, key }));
  };

  // ইভেন্ট অ্যাড করার ফাংশন, clockId লাগবে যেই ক্লকের জন্য event
  const addEvent = (clockId, event) => {
    const id = generate();
    const newKey = `${clockId}|${id}`;
    setState((prev) => ({
      ...prev,
      [newKey]: { ...event, id, clockId, done: false },
    }));
  };

  // ইভেন্ট আপডেট করার ফাংশন, key দিয়ে আপডেট করবে
  const updateEvent = (key, data) => {
    setState((prev) => ({
      ...prev,
      [key]: { ...prev[key], ...data },
    }));
  };

  // ইভেন্ট ডিলিট করার ফাংশন
  const deleteEvent = (key) => {
    setState((prev) => {
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
  };

  // একটি ক্লক আইডির সব ইভেন্ট ডিলিট
  const deleteEventsWithClockId = (clockId) => {
    setState((prev) => {
      const filtered = Object.entries(prev).filter(
        ([key]) => !key.startsWith(clockId)
      );
      return Object.fromEntries(filtered);
    });
  };

  return {
    events: state,
    getEventsByClock,
    addEvent,
    updateEvent,
    deleteEvent,
    deleteEventsWithClockId,
  };
};

export default useEvent;
