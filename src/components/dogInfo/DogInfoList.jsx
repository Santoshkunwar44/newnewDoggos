import "./doginfo.css"
import { useState, useEffect } from "react"
import { getRelaseDogData } from "../../services/releaseDogService"
import ReleasedDogBox from "../singleDog/ReleasedDogBox"


const DogInfo = ({ handleChange }) => {

    const [relaseDogList, setReleaseDogList] = useState([])
    const [expanded, setExpanded] = useState("")
    useEffect(() => {
        const allDogsForAdoption = getRelaseDogData()
        setReleaseDogList(allDogsForAdoption)
    }, [])

    const handleBoxExpansionChange = (e) => {
        if (e === expanded) {
            setExpanded("")
        } else {
            setExpanded(e)
        }
    }

    return (
        <div
            className="dogInfo"
        >
            {
                relaseDogList.length === 0 ? <div className="noDogListDiv"> <h3>Not pet to Adopt </h3></div> :
                    relaseDogList.map((item, index) => <ReleasedDogBox expanded={expanded} handleExpanded={handleBoxExpansionChange} handleChange={handleChange} key={index} number={index} item={item} />)
            }

        </div>
    )
}

export default DogInfo