import { motion } from "framer-motion";
import { NavbarHome } from "../../components/home/navbar-home";

function Home(){

    return(<motion.div 
        initial={{ x: '-100%', opacity:0, transition: {duration: .5} }} 
        animate={{ x: 0,  opacity: 1, transition: {duration: .5}}}
    >
        <NavbarHome />
        
    </motion.div>
    )
}

export default Home;