import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/AtionButton';
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HText from '@/shared/HText';



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {

    return (
      <section>
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-20">
          {/* IMAGE AND MAIN HEADER */}
          <motion.div
            className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Kezdőlap)}
          >
            {/* MAIN HEADER */}
            <div className="z-10 mt-40 md:mt-80 md:basis-3/5">
              {/* HEADINGS */}
              <motion.div
                className="md:-mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="relative">
                  <div className="top-40 left-20  ">
                    <img alt="home-page-text" src={HomePageText} />
                  </div>
                </div>
    
                <p className="mt-8 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante lorem, rutrum eu ullamcorper quis, 
                aliquam in leo. Quisque rutrum molestie dolor, quis tincidunt quam congue eget. Sed consequat sed elit 
                a pellentesque. Aenean vel luctus mi. Sed placerat dui diam, facilisis iaculis elit tincidunt vel. 
                Vestibulum quis sodales nulla. Proin placerat est quis tristique condimentum. 
                </p>
              </motion.div>
    
              {/* ACTIONS */}
              <motion.div
                className="mt-8 flex items-center gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ActionButton 
                  setSelectedPage={setSelectedPage}
                  page= "Lábléc"
                  >
                  Kontaktok
                </ActionButton>
                <AnchorLink
                  className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                  onClick={() => setSelectedPage(SelectedPage.Információk)}
                  href={`#${SelectedPage.Információk}`}
                >
                  <p>Információk</p>
                </AnchorLink>
              </motion.div>
            </div>
    
            {/* IMAGE */}
            <div
              className="flex basis-3/5 justify-center md:z-10
                  md:ml-40 md:mt-48 md:justify-items-end"
            >
              <img alt="home-pageGraphic" src={HomePageGraphic} />
            </div>

      
          </motion.div>
          
        </section>

        <section id="információk" className="bg-gray-20 py-10 px-5 md:py-5">
        <div className="container mx-auto">
          <HText>Információk</HText>
          <div className="md:flex md:flex-wrap md:gap-10">
            {/* First Row */}
            <div className="pt-16 md:flex md:justify-between md:w-full mb-8 space-y-4 md:space-y-0">
              <p className="md:w-1/2">
              Vestibulum lorem velit, placerat a nulla ac, mattis euismod eros. Aliquam eget efficitur tortor. 
              Duis a accumsan nisl, eu maximus elit. Suspendisse tristique consectetur finibus. Curabitur lobortis 
              ex ac neque sodales rutrum. Aliquam maximus purus mi, vel feugiat sem gravida vitae. Quisque ornare 
              ipsum et ligula pulvinar fermentum. 
             
              </p>
              <p className="md:w-1/2">
              Vestibulum lorem velit, placerat a nulla ac, mattis euismod eros. Aliquam eget efficitur tortor. 
              Duis a accumsan nisl, eu maximus elit. Suspendisse tristique consectetur finibus. Curabitur lobortis 
              ex ac neque sodales rutrum. Aliquam maximus purus mi, vel feugiat sem gravida vitae. Quisque ornare 
              ipsum et ligula pulvinar fermentum. 
              
              </p>
            </div>
            {/* Second Row */}
            <div className="pb-24 md:flex md:justify-between md:w-full space-y-4 md:space-y-0">
              <p className="md:w-1/2">
              Vestibulum lorem velit, placerat a nulla ac, mattis euismod eros. Aliquam eget efficitur tortor. 
              Duis a accumsan nisl, eu maximus elit. Suspendisse tristique consectetur finibus. Curabitur lobortis 
              ex ac neque sodales rutrum. Aliquam maximus purus mi, vel feugiat sem gravida vitae. Quisque ornare 
              ipsum et ligula pulvinar fermentum. 
             
              </p>
              <p className="md:w-1/2">
              Vestibulum lorem velit, placerat a nulla ac, mattis euismod eros. Aliquam eget efficitur tortor. 
              Duis a accumsan nisl, eu maximus elit. Suspendisse tristique consectetur finibus. Curabitur lobortis 
              ex ac neque sodales rutrum. Aliquam maximus purus mi, vel feugiat sem gravida vitae. Quisque ornare 
              ipsum et ligula pulvinar fermentum. 
             
              </p>
            </div>
          </div>
        </div>
        </section>
        </section>
        
      );
    };


export default Home