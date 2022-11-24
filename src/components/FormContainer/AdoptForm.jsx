import { useState } from 'react'
import { addReleaseDogData } from '../../services/releaseDogService'
import { motion } from "framer-motion"
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import DogInfo from '../dogInfo/DogInfoList';
const DogsForAdoption = ({ handleChange }) => {

    return (
        <>

            <motion.div
                className="formBoxHeader">

                <div className="formBoxHeaderInnerBox" style={{ justifyContent: "center" }} >
                    <img
                        style={{ width: "65px" }}
                        src="/images/logo.png"
                        alt="logo"
                        draggable={"false"}
                    />
                    <h2>
                        <span className="specialLetter">Choose A Pet to adopt</span></h2>
                </div>
            </motion.div>
            <motion.div
                style={{ padding: "32px" }}
            >
                <DogInfo handleChange={handleChange} />

            </motion.div>
        </>
    )
}

export default DogsForAdoption