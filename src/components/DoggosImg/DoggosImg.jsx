import "./doggosImg.css"
import { useContext } from "react"
import { DoggosContext } from "../../context/context"
import { motion } from "framer-motion"


const DoggosImg = ({ image, number }) => {

    const { modalOpen } = useContext(DoggosContext)

    return (
        <motion.div

            initial={{ opacity: 0, scale: 0.4, x: "-300px" }}
            animate={{
                opacity: 1, scale: 1, x: ' 0px', transition: {
                    delay: number / 10,
                    duration: 0.3,
                    type: "keyframes",


                }
            }}
            className='doggosImageBox'>

            <img className={`doggosImage ${modalOpen ? "hide" : ""}`} src={image} alt="doggos_image" />

        </motion.div>
    )
}

export default DoggosImg