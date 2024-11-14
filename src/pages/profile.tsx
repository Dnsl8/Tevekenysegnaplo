import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/AtionButton';
import { UserCircleIcon, AtSymbolIcon, PhoneIcon, IdentificationIcon } from "@heroicons/react/24/outline";
import HText from '@/shared/HText';
import { Calendar } from 'react-calendar'; // Import the Calendar component
import 'react-calendar/dist/Calendar.css';
import { motion } from 'framer-motion';



type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;
};

const Profil = ({ setSelectedPage, selectedPage }: Props) => {
    const patients = [
        "John Doe",
        "Jane Smith",
        "Samuel Green",
        "Emily Brown",
      ];

  return (
    <section id="profil" className="bg-gray-20 py-10  md:py-20 px-6">
        

      <div className="container pt-20 mx-auto max-w-4xl">
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
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center mb-10">
          {/* Profile Image */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
            <div className="w-40 h-40 rounded-full  flex items-center justify-center">
              <UserCircleIcon className="text-6xl text-gray-500" />
            </div>
          </div>

          {/* Contact Info */}
          <div className=" flex-1 pb-10">
            <HText >Adatok</HText>
            <div className="space-y-4 pt-5 ">
              <p className="flex items-center text-sm">
                <IdentificationIcon className="h-7 w-7 mr-2 text-primary-500" /> 
                <p className="font-bold">Név: </p> 
                <p className='pl-2'>Jane Doe</p>
              </p>
              <p className="flex items-center text-sm">
                <PhoneIcon className="h-7 w-7 mr-2 text-primary-500" />
                <p  className="font-bold">Telefonszám:</p>
                <p className='pl-2'>+32 20 000 0000</p>
              </p>
              <p className="flex items-center text-sm">
                <AtSymbolIcon className="h-7 w-7 mr-2 text-primary-500" />
                <p  className="font-bold">Email:</p>
                <p className='pl-2'>valami@pelda.com</p>
              </p>
            </div>
          </div>
        </div>
        </motion.div>

        <motion.div
               
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >

        <div className="bg-white p-6 rounded-lg shadow-lg mb-10 ">
          <HText>Ellátottak</HText>
          <ul className="space-y-2 pt-8 pb-8">
            {patients.map((patient, index) => (
              <li
                key={index}
                className=" bg-secondary-500 text-white px-4 py-4 rounded-lg cursor-pointer transition duration-300 hover:bg-primary-500 hover:text-white"
              >
                {patient}
              </li>
            ))}
          </ul>
        </div>

        </motion.div>

        <motion.div
               
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >

        <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
          <HText>Calendar</HText>
          <div className="pt-10">
            <Calendar /> {/* Render the Calendar component */}
          </div>
        </div>

        </motion.div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <ActionButton 
          setSelectedPage={setSelectedPage} 
          page="profil">
            Profil szerkesztése
          </ActionButton>
        </div>
      </div>
      
    </section>
  );
};

export default Profil;
