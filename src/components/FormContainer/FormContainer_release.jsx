import "./formcontainer.css"
import { motion, useAnimation } from "framer-motion"
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import SpaIcon from '@mui/icons-material/Spa';
import { RiArrowGoBackFill } from "react-icons/ri"
import { useState, useEffect, useContext } from "react"
import { useLocation } from "react-router-dom"
import ReleaseForm from "./ReleaseForm";
import DogsForAdoption from "./AdoptForm";
import { Link } from "react-router-dom"
import AdoptFormPages from "../adoptForm/AdoptForm";
import { DoggosContext } from "../../context/context";
const FormContainerRelease = () => {


    const { dispatch, formType } = useContext(DoggosContext)
    const animation1 = useAnimation()

    const handleChangeFormType = (type) => {
        dispatch({ type: "setFormType", payload: type })
    }



    useEffect(() => {
        animation1.start({
            x: "0",
            scale: 1,
            opacity: 1,
            transition: { duration: 1, type: "spring" }
        })

    }, [formType])


    const theFromBoxes = {
        Release: <ReleaseForm />,
        DogForAdoption: <DogsForAdoption handleChange={handleChangeFormType} />,
        AdoptForm: <AdoptFormPages />

    }

    return (
        <div className={"formContainer"}>
            <div className={"formSelectRowButton"}>
                <motion.button
                    onClick={() => handleChangeFormType("Release")}
                    animate={{ x: "0", scale: 1, opacity: 1, transition: { duration: 1 } }}
                    initial={{ x: "-300px", scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="formButton">
                    <NewReleasesIcon className="mainIcons" />  <span>RELEASE THE PET</span>
                </motion.button>
                <motion.button
                    onClick={() => handleChangeFormType("DogForAdoption")}
                    animate={{ x: "0", scale: 1, opacity: 1, transition: { duration: 1 } }}
                    initial={{ x: "300px", scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2, type: "spring" }}
                    className="formButton">
                    <SpaIcon className="mainIcons" /> <span>ADOPT THE PET</span>

                </motion.button>
            </div>
            <motion.div
                initial={{ x: "-300px", scale: 0.8, opacity: 0 }}
                animate={animation1}
                exit={{ x: "-300px", scale: 0.8, opacity: 0 }}
                className="formBox"
                style={{ padding: "22px", position: "relative" }}
            >
                <Link to={"/"}>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "just" }}
                        whileTap={{ scale: 0.8 }}
                        className="goBackHomeButtonBox">

                        <RiArrowGoBackFill />

                    </motion.div>
                </Link>
                {
                    theFromBoxes[formType]
                }
            </motion.div>

        </div >
    )
}

export default FormContainerRelease