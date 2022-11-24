import { useState, useContext } from 'react'
import { addReleaseDogData } from '../../services/releaseDogService'
import { motion } from "framer-motion"
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { DoggosContext } from '../../context/context';

const ReleaseForm = () => {
    const [releaseFormData, setReleaseFormData] = useState({

    })

    const { dispatch } = useContext(DoggosContext)
    const handlechange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setReleaseFormData((prev) => ({
            ...prev, [name]: value
        }))
    }

    const handleSubmit = () => {


        let res = addReleaseDogData(releaseFormData)
        if (res.success) {

            dispatch({ type: "setFormType", payload: "DogForAdoption" })
            dispatch({ type: "setSnackData", payload: { open: true, text: "Form Submitted successfully" } })
        } else {
            dispatch({ type: "setSnackData", payload: { open: true, text: res.message } })
        }
    }

    return (
        <>
            <motion.div
                className="formBoxHeader" style={{ marginBottom: "0" }}>

                <div className="formBoxHeaderInnerBox" style={{ flexDirection: "column", gap: "5px" }}>
                    <h2 style={{ textAlign: "start" }}> <span className="specialLetter adoptionFormHeaderText">Form to release </span></h2>
                    <div style={{ display: 'flex', alignItems: "center", gap: "1rem", margin: "auto" }}>
                        <h3 className="currentAdoptionPetName">Pets</h3>
                    </div>
                </div>
            </motion.div>
            <motion.div
                animate={{ x: "0", scale: 1, opacity: 1, transition: { duration: 0.8 } }}
                initial={{ x: "-300px", scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="ReleaseAdoptForm">
                <motion.input
                    required
                    onChange={handlechange}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.02 }}


                    placeholder="Onwers Name"
                    autoComplete="false"
                    type="text"
                    name="ownersName"
                    id=""
                />

                <motion.input
                    required
                    onChange={handlechange}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.02 }}
                    placeholder="Address"

                    autoComplete="false"
                    type="text"
                    name="address"
                    id=""
                />
                <motion.input

                    onChange={handlechange}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.02 }}
                    required
                    placeholder="Phone Number"

                    autoComplete="false"
                    type="text"
                    name="phoneNumber"
                    id=""
                />

                <motion.select
                    required
                    onChange={handlechange}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.02 }}
                    name="petType"
                    className="form_item petSelect">
                    <option value="" disabled>Pet Type</option>
                    <option value="Cat">Cat</option>
                    <option value="dog">Dog</option>
                </motion.select>
                <motion.input
                    required
                    onChange={handlechange}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.02 }}

                    placeholder="Pet Name"

                    autoComplete="false"
                    type="text"
                    name="petName"
                    id=""
                />
                <motion.input
                    required
                    onChange={handlechange}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.02 }}

                    placeholder="Pet Age"
                    autoComplete="false"
                    type="text"
                    name="petAge"
                />
                <motion.textarea whileTap={{ scale: 0.97 }}
                    onChange={handlechange}
                    placeholder="reason to abondon .."
                    whileHover={{ scale: 1.02 }}
                    name="reasonToRelease" id="" cols="30" rows="4">

                </motion.textarea>
                <motion.button
                    style={{ margin: "auto" }}
                    onClick={handleSubmit}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2, type: "spring" }}
                    className="formButton " >
                    <PublishedWithChangesIcon className="mainIcons" /> <span>Publish </span>
                </motion.button>
            </motion.div>
            <div className="petAdoptFormBottomTExt">
                PetHeaven thanks you for being a part of it . Your pet will be listed for Adoption . We will contact you with in a 3-5 working days
            </div>
        </>
    )
}

export default ReleaseForm