import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { Activity } from "@/shared/types";
import HText from "@/shared/HText";
import { useNavigate } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    activities: Activity[];
    addActivity: (activity: Activity) => void;
};

const Activities = ({setSelectedPage, activities, addActivity}: Props) => {
    const navigate = useNavigate();
    
    
    const getTodaysDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

      const renderActivityRows = () => {
        return activities.map((activity, index) => {
          const startTime = new Date(`2000-01-01T${activity.startTime}`);
          const endTime = new Date(`2000-01-01T${activity.endTime}`);
          const duration = Math.abs(endTime.getTime() - startTime.getTime()) / (1000 * 60); // Duration in minutes
          
          return (
            <tr key={index}>
              <td style={{ border: '0.5px solid black', padding: '8px', backgroundColor: '#e9b44c' }}>{activity.startTime}</td>
              <td style={{ border: '0.5px solid black', padding: '8px' , backgroundColor: '#e9b44c'}}>{activity.endTime}</td>
              <td style={{ border: '0.5px solid black', padding: '8px', backgroundColor: '#e9b44c' }}>{duration} perc</td> {/* Display duration */}
              <td style={{ border: '0.5px solid black', padding: '8px', backgroundColor: '#e9b44c' }}>{activity.name.join(', ')}</td>
              <td style={{ border: '0.5px solid black', padding: '8px' , backgroundColor: '#e9b44c'}}>{activity.type}</td>
            </tr>
          );
        });
      };
    

  return <section
    id="tevékenységnapló"
    className="mx-auto min-h-full w-5/6 py-20"  
  >
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Tevékenységnapló)}
    >
    </motion.div>

    <HText>Tevékenységnapló</HText>
    <p className="my-5 text-sm">
    Sed eget imperdiet orci, vitae efficitur ipsum. Ut sed dui mauris. 
    Aliquam eget tempor ex, vulputate accumsan sem. Donec elementum accumsan enim, 
    at porttitor libero interdum in.
    </p>
    <p className="my-5 text-sm">
    Aenean quis erat vitae nibh pretium lobortis eget at orci. Vivamus ut erat felis. 
    Mauris non malesuada nisi. Praesent sapien magna, aliquam ut sem eu, tempus egestas lectus. 
    Donec finibus laoreet diam, quis varius purus faucibus eu. Sed varius feugiat magna, 
    sed convallis nulla vestibulum eget. Cras justo dolor, luctus sit amet ante in, sagittis vestibulum augue.
    </p>
    

    <div style={{  minHeight: '100vh',minWidth: '100vh',margin: '0 auto', padding: '20px' , display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
     <div style={{maxWidth:'800px'}}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}> {getTodaysDate()}</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse',  marginTop: '20px' , borderRadius: '10px', overflow: 'hidden'}}>
        <thead>
          <tr style={{ backgroundColor: '#9b2915' }}>
            <th style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>Kezdet</th>
            <th style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>Vég</th>
            <th style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>Hossz</th>
            <th style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>Résztevékenységek</th>
            <th style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>Típus</th>
          </tr>
        </thead>
        <tbody>
          {renderActivityRows()}
        </tbody>
      </table>
      <div className="pt-20">
        <AnchorLink
            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            onClick={() => navigate('/add-activity')}
            href={`#${SelectedPage.Hozzáadás}`}
            >Hozzáadás
        </AnchorLink>
      </div>
      
      </div>
    </div>

    
  </section>
};

export default Activities