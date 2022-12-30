import { motion } from "framer-motion";
import { HeaderPages } from "../../layout/header-pages";

function Notification(){
    return(<motion.div 
        initial={{ x: '-100%', opacity:0, transition: {duration: .5} }} 
        animate={{ x: 0,  opacity: 1, transition: {duration: .5}}}
    >
        <HeaderPages title="Notification" />
    </motion.div>
    )
}

export default Notification;