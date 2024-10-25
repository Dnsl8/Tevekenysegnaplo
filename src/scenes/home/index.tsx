import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/AtionButton';
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {

    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
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
                <ActionButton setSelectedPage={setSelectedPage}>
                  Információk
                </ActionButton>
                <AnchorLink
                  className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                  onClick={() => setSelectedPage(SelectedPage.Információk)}
                  href={`#${SelectedPage.Információk}`}
                >
                  <p>Kontaktok</p>
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
      );
    };


export default Home