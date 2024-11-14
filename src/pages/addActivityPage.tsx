// AddActivityPage.tsx
import React, { useState } from 'react';
import { Activity } from "@/shared/types";
import { useNavigate } from 'react-router-dom';
import HText from '@/shared/HText';

type Props = {
  addActivity: (activity: Activity) => void;
  
};

const AddActivityPage: React.FC<Props> = ({ addActivity }) => {

  const navigate = useNavigate();
  const predefinedTags = ['Bevásárlás', 'Mosogatás', 'Étkeztetés', 'Mosdatás', 'Vérnyomásmérés'];

const tagTypeMapping: { [tag: string]: string } = {
    'Bevásárlás': 'Szociális segítés',
    'Mosogatás': 'Szociális segítés',
    'Étkeztetés': 'Személyi gondozás',
    'Mosdatás': 'Személyi gondozás',
    'Vérnyomásmérés': 'Személyi gondozás',
    // Add more mappings as needed
  };

  const [activity, setActivity] = useState<Activity>({
    startTime: '',
    endTime: '',
    name: [],
    type: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setActivity(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const startTime = e.target.value;
    setActivity(prevState => ({
      ...prevState,
      startTime,
      endTime: calculateEndTime(startTime), // Calculate end time based on start time
    }));
  };

  const calculateEndTime = (startTime: string) => {
    const [hours, minutes] = startTime.split(':').map(Number);
    const endTime = new Date();
    endTime.setHours(hours + 1);
    endTime.setMinutes(minutes);
    return `${String(endTime.getHours()).padStart(2, '0')}:${String(endTime.getMinutes()).padStart(2, '0')}`;
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActivity(prevState => ({
      ...prevState,
      endTime: e.target.value,
    }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { options } = e.target;
    const selectedTags = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    
    // Determine the types based on selected tags
    const types: string[] = [];
    selectedTags.forEach(tag => {
      const type = tagTypeMapping[tag];
      if (type && !types.includes(type)) {
        types.push(type);
      }
    });
  
    setActivity(prevState => ({
      ...prevState,
      name: selectedTags,
      type: types.join(', '), // Update the type field with types separated by commas
    }));
  };

  const handleSave = () => {
    if (!activity.startTime || !activity.endTime || activity.name.length === 0) {
      alert('Kérjük adja meg az összes adatot');
      return;
    }
    addActivity(activity);
    navigate('/tevékenységnapló');
  };



  return (
    <div className=" min-h-screen  bg-gray-20  flex flex-col flex-grow items-center pt-44 pb-36 "> {/* Full height with center alignment */}
    <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg"> {/* White box with padding and shadow */}
      <HText>Új tevékenység</HText>
      <form className="grid gap-4 pt-8"> {/* Form layout with gap */}
        <div className="grid gap-4 grid-cols-2"> {/* Grid for time inputs */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Kezdet:</label>
            <input 
              type="time" 
              name="startTime" 
              value={activity.startTime} 
              onChange={handleStartTimeChange} 
              className="mt-1 block w-full border border-gray-300 rounded-md p-2" // Input styling
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Vég:</label>
            <input 
              type="time" 
              name="endTime" 
              value={activity.endTime} 
              onChange={handleEndTimeChange} 
              className="mt-1 block w-full border border-gray-300 rounded-md p-2" // Input styling
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Résztevékenység:</label>
          <select 
            multiple 
            name="name" 
            value={activity.name} 
            onChange={handleNameChange} 
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 min-h-28" // Select styling
          >
            {predefinedTags.map(tag => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Típus:</label>
          <input 
            type="text" 
            name="type" 
            value={activity.type} 
            onChange={handleInputChange} 
            className="mt-1 block w-full border border-gray-300 rounded-md p-2" // Input styling
          />
        </div>
      </form>
      <button 
        onClick={handleSave} 
        className="mt-6 w-full hover:bg-secondary-500 bg-primary-500 hover:text-white text-white font-semibold py-2 rounded-md transition duration-200" // Button styling
      >
        Mentés
      </button>
    </div>
  </div>
  );
};

export default AddActivityPage;
