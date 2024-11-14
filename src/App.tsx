import Navbar from "@/components/navbar/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/pages/home";
import Footer from "@/components/footer/footer";
import Activities from "@/pages/activities";
import { Activity } from "@/shared/types";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddActivityPage from "./pages/addActivityPage";
import Profil from "./pages/profile";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Kezdőlap);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const [activities, setActivities] = useState<Activity[]>([]);
  

  const addActivity = (activity: Activity) => {
    setActivities(prevActivities => [...prevActivities, activity]);
  };

  const removeActivity = (index: number) => {
    setActivities(prevActivities => prevActivities.filter((_, i) => i !== index));
  };

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
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
      
      <Routes>
        <Route path="/"  element={<Home setSelectedPage={setSelectedPage} />} />
        <Route path="/kezdőlap"  element={<Home setSelectedPage={setSelectedPage} />} />
        <Route path="/tevékenységnapló" element={<Activities setSelectedPage={setSelectedPage} selectedPage={selectedPage} activities={activities} addActivity={addActivity} removeActivity={removeActivity}/>} />
        <Route path="/hozzáadás" element={<AddActivityPage addActivity={addActivity} />} />
        <Route path="/profil" element={<Profil setSelectedPage={setSelectedPage} selectedPage={selectedPage} />} />
      </Routes>
    </Router> 
    <Footer />
    </div>
  )
}

export default App;
