import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { 
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation, 
    slideAnimation

} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section clasName='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation("down")}>
                    <img
                    src='./threejs.png'
                    alt="logo"
                    className="w-8 h-8 object-contain"
                    />
                </motion.header>
                <motion.div className="home-content" {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}
                    className="flex flex-col gap-5">
                        <h1 className="head-text">
                            LET' S <br className="x1:block hidden" /> DO IT!
                        </h1>
                    </motion.div>
                    <motion.div>
                        <p className="max-wmd font-normal text-gray-600 text-base">
                            Create your unique and exclusive shirty with our brand-new 3D customization toll. <strong> Unleash your imagination</strong>{" "} and define your own style.
                        </p>
                    </motion.div>

                </motion.div>

            </motion.section>
        )}
    
    </AnimatePresence>
  )
}

export default Home