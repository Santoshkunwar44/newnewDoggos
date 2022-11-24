import { motion } from "framer-motion"
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { DoggosContext } from "../../context/context";
import { useContext } from "react"

const AdoptFormPages = ({ handleGoBack }) => {

    const { currentAdoptionPet, dispatch } = useContext(DoggosContext)



    const handlechange = (e) => {

    }



    const handleSubmit = () => {
        dispatch({ type: "setSnackData", payload: { open: true, text: "Form Submitted successfully" } })
        dispatch({ type: "setFormType", payload: "DogForAdoption" })
    }
    return (
        <>
            <motion.div
                className="formBoxHeader" style={{ marginBottom: "0" }}>
                <div className="formBoxHeaderInnerBox" style={{ flexDirection: "column" }}>
                    <h2 style={{ textAlign: "start" }}> <span className="specialLetter adoptionFormHeaderText">Fill A Form to Adopt</span></h2>
                    <div style={{ display: 'flex', alignItems: "center", gap: "1rem", margin: "auto" }}>
                        {
                            currentAdoptionPet.type === "dog" ? <img
                                width={"65px    "}
                                src="/images/logo.png"
                                alt="logo"
                                draggable={"false"}
                            /> : <img src="data:image/png;base64,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"></img>
                        }


                        <h3 className="currentAdoptionPetName">{currentAdoptionPet.name}</h3>
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
                    placeholder="Pet Name"
                    autoComplete="false"
                    type="text"
                    name="PetName"
                    id=""
                    value={currentAdoptionPet.name}
                />
                <motion.input
                    required
                    onChange={handlechange}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.02 }}
                    placeholder="Pet type"
                    autoComplete="false"
                    type="text"
                    name="petType"
                    id=""
                    value={currentAdoptionPet.type}
                />
                <motion.input
                    required
                    onChange={handlechange}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.02 }}
                    placeholder="Adopter Name"
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
                <motion.input

                    onChange={handlechange}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.02 }}
                    required
                    placeholder="Experience with pets"

                    autoComplete="false"
                    type="text"
                    name="experience"
                    id=""
                />

                <motion.textarea whileTap={{ scale: 0.97 }}
                    onChange={handlechange}
                    placeholder="reason to Adopt .."
                    whileHover={{ scale: 1.02 }}
                    name="reasonToRelease"
                    id=""
                    cols="30"
                    rows="8">

                </motion.textarea>
                <motion.button
                    style={{ margin: "auto" }}
                    onClick={handleSubmit}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2, type: "spring" }}
                    className="formButton " >
                    <PublishedWithChangesIcon className="mainIcons" /> <span>Submit </span>
                </motion.button>
            </motion.div>
            <div className="petAdoptFormBottomTExt">
                PetHeaven thanks you for being a part of it . We will contact you soon . After  you fill a form .
            </div>
        </>
    )
}

export default AdoptFormPages