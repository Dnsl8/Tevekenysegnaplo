import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Activities from "@/scenes/activities";
import { Activity } from "@/shared/types";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddActivityPage from "./scenes/activities/addActivityPage";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Kezdőlap);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = (activity: Activity) => {
    setActivities(prevActivities => [...prevActivities, activity]);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Kezdőlap);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
    <Router>
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage } />
      <Activities setSelectedPage={setSelectedPage} activities={activities} addActivity={addActivity}/>
   
      <Routes>
        <Route path="/" element={<Home setSelectedPage={setSelectedPage} />} />
        <Route path="/activities" element={<Activities setSelectedPage={setSelectedPage} activities={activities} addActivity={addActivity} />} />
        <Route path="/add-activity" element={<AddActivityPage addActivity={addActivity} />} />
      </Routes>
    </Router> 
    </div>
  )
}

export default App;
