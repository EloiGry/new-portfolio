import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";


export default function EntryEffect ({children}) {
    const [ref, inView] = useInView();
    const controls = useAnimation();
useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden : {opacity: 0},
    visible : {opacity:1, transition: { duration: 1.5 }}

}
    return (
        <motion.div variants={variants} ref={ref}
        animate={controls}
        initial="hidden">
            {children}
        </motion.div>
    );
};
