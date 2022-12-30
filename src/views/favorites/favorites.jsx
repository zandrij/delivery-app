import { motion } from "framer-motion";
import { HeaderPages } from "../../layout/header-pages";

export const Favorites = () => {
    return(<motion.div 
        initial={{ x: '-100%', opacity:0, transition: {duration: .5} }} 
        animate={{ x: 0,  opacity: 1, transition: {duration: .5}}}
    >
        <HeaderPages title="Favorites" />
    </motion.div>)
}