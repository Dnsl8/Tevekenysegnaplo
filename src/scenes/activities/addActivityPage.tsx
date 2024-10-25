// AddActivityPage.tsx
import React, { useState } from 'react';
import { Activity } from "@/shared/types";

type Props = {
  addActivity: (activity: Activity) => void;
};

const AddActivityPage: React.FC<Props> = ({ addActivity }) => {
  const [name, setName] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [type, setType] = useState<string>("");

  const handleAddActivity = () => {
    const newActivity: Activity = { name, startTime, endTime, type };
    addActivity(newActivity);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl mb-4">Add New Activity</h2>
        <input type="text" value={name} onChange={(e) => setName([e.target.value])} placeholder="Activity Name" />
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} placeholder="Start Time" />
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} placeholder="End Time" />
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" />
        <button onClick={handleAddActivity}>Add Activity</button>
      </div>
    </div>
  );
};

export default AddActivityPage;
