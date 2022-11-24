import { GiCat } from "react-icons/gi"
import { FaDog } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState, useContext } from "react"
import { SiHomeassistant } from "react-icons/si"
import { MdOpenInNew } from "react-icons/md"
import { DoggosContext } from "../../context/context"
import "./releasedDogBox.css"
const ReleasedDogBox = ({ item, handleChange, number, expanded, handleExpanded }) => {


    const { dispatch } = useContext(DoggosContext)

    const handleClick = () => {
        dispatch({ type: "setcurrentAdoptionPet", payload: { name: item.petName, type: item.petType } })
        handleChange("AdoptForm")
    }

    return (
        <motion.div
            onClick={() => handleExpanded(item.createdAt)}
            initial={{ opacity: 0.3, scale: 0.4, x: "-600px" }}
            animate={{
                opacity: 1, scale: 1, x: ' 0px', transition: {
                    delay: number / 10,
                    duration: 1

                }
            }}
            className={"releaseDogInfoBox"} >
            <div className="dogBoxNameHeader">
                <div className="dogBoxName">

                    {
                        item.petType === "dog" ? <FaDog className="PetBoxpetIcon" /> : <GiCat className="PetBoxpetIcon" />
                    }
                    <p>{item.petName}</p>
                </div>
                <div className="secondaryButtonBox">

                    <div>
                        <MdOpenInNew className="PetBoxpetIcon secondaryIcon" />
                    </div>
                    <div title="Adopt Pet">

                        <SiHomeassistant className="PetBoxpetIcon secondaryIcon" />
                    </div>
                </div>
            </div>
            <div className="petAdoptionBoxInfoRow">
                <span>Pet Type : </span>
                <p>{item.petType}</p>

            </div>
            <div className="petAdoptionBoxInfoRow">
                <span>Pet Age : </span>
                <p>{item.petAge}</p>

            </div>
            <div className="petAdoptionBoxInfoRow">
                <span> Owners Name : </span>
                <p>{item.ownersName}</p>

            </div>
            <div className="petAdoptionBoxInfoRow">
                <span>Address : </span>
                <p>{item.address}</p>

            </div>
            {
                expanded === item.createdAt && <>

                    <div className="petAdoptionBoxInfoRow">
                        <span>Phone Number : </span>
                        <p>{item.phoneNumber}</p>

                    </div>
                    <div className="petAdoptionBoxInfoRow" style={{ width: "" }}>
                        <span>{item.reasonToRelease}</span>
                    </div>
                    <div className="petAdoptionBoxInfoRow">
                        <span className="listedHour">Listed 2 hours ago</span>
                    </div>
                    <button className="mainBtns" onClick={() => handleClick()}>  ADOPT {item.petName}  NOW </button>
                </>
            }

        </motion.div>
    )
}

export default ReleasedDogBox