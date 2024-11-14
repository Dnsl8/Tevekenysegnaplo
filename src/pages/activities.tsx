import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { Activity } from "@/shared/types";
import Link from "@/components/navbar/Link";
import { TrashIcon } from "@heroicons/react/24/outline";


type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    activities: Activity[];
    addActivity: (activity: Activity) => void;
    removeActivity: (index: number) => void;
};

const Activities = ({setSelectedPage, activities, selectedPage, addActivity, removeActivity}: Props) => {
 
    
    const getTodaysDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

      const renderActivityRows = () => {
        if (activities.length === 0) {
          // Render a row with a message if there are no activities
          return (
            <tr>
              <td colSpan={6} style={{ border: '0.5px solid black', padding: '8px', textAlign: 'center' }} className="bg-secondary-400">
                Nincs felvett tevékenység
              </td>
            </tr>
          );
        }


        return activities.map((activity, index) => {
          const startTime = new Date(`2000-01-01T${activity.startTime}`);
          const endTime = new Date(`2000-01-01T${activity.endTime}`);
          const duration = Math.abs(endTime.getTime() - startTime.getTime()) / (1000 * 60); // Duration in minutes
          
          return (
            <tr key={index}>
          <td style={{ border: '0.5px solid black', padding: '8px', backgroundColor: '#e9b44c' }}>{activity.startTime}</td>
          <td style={{ border: '0.5px solid black', padding: '8px', backgroundColor: '#e9b44c' }}>{activity.endTime}</td>
          <td style={{ border: '0.5px solid black', padding: '8px', backgroundColor: '#e9b44c' }}>{duration} perc</td>
          <td style={{ border: '0.5px solid black', padding: '8px', backgroundColor: '#e9b44c' }}>{activity.name.join(', ')}</td>
          <td style={{ border: '0.5px solid black', padding: '8px', backgroundColor: '#e9b44c' }}>{activity.type}</td>
          {/* Delete button */}
          <td style={{ border: '0.5px solid black', padding: '8px', backgroundColor: '#e9b44c', textAlign: 'center' }}>
            <button 
              onClick={() => removeActivity(index)} 
              style={{ padding: '4px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              <TrashIcon className="h-6 w-6 text-red-600 hover:text-red-800" />
            </button>
          </td>
          </tr>
          );
        });
      };
    

  return <section
    id="tevékenységnapló"
    className="mx-auto min-h-full  pt-40 bg-gray-20"  
  >
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Tevékenységnapló)}
    >
    </motion.div>

    <motion.div
                
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
    >
    

    
      <h1 className="basis-3/5 font-montserrat text-3xl font-bold w-5/6 mx-auto flex flex-col items-center text-center">Tevékenységnapló</h1>
      <p className="my-5 text-sm w-5/6 mx-auto flex flex-col items-center text-center">
      Sed eget imperdiet orci, vitae efficitur ipsum. Ut sed dui mauris. 
      Aliquam eget tempor ex, vulputate accumsan sem. Donec elementum accumsan enim, 
      at porttitor libero interdum in.
      </p>
      <p className="my-5 text-sm w-5/6 mx-auto flex flex-col items-center text-center">
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
          <tr className="bg-primary-700">
            <th style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>Kezdet</th>
            <th style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>Vég</th>
            <th style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>Hossz</th>
            <th style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>Résztevékenységek</th>
            <th style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}>Típus</th>
            <th style={{ padding: '10px', border: '1px solid black', textAlign: 'center' }}></th> 
          </tr>
        </thead>
        <tbody>
          {renderActivityRows()}
        </tbody>
      </table>
      <div className="pt-20">
     
      
      <Link
          page="Hozzáadás"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          toNewPage={true}
      />
      </div>
      
      </div>
    </div>
    </motion.div>
    
  </section>
};

export default Activities