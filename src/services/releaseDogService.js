

export const getRelaseDogData = () => {
    const theData = JSON.parse(localStorage.getItem("releaseDogData")) || []
    return theData
}
export const addReleaseDogData = (data) => {

    const { petType, petName, ownersName, phoneNumber, address, petAge } = data;


    if (!petName || !petType || !ownersName || !phoneNumber || !address || !petAge) {
        return { success: false, message: "Fill all the fields " }
    }



    let theReleaseDogDataClone = getRelaseDogData();
    data.createdAt = Date.now().toString()
    localStorage.setItem("releaseDogData", JSON.stringify([...theReleaseDogDataClone, data]))
    return { success: true }

}