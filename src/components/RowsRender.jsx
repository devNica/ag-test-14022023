import { useState } from "react"
import EditableRow from "./EditableRow"
import ReadOnlyRow from "./ReadOnlyRow"
import { useCountryHook } from "../hooks"



const RowsRender = ({country, index}) => {

    const { updateCountry } = useCountryHook()
    const [countryId, setCountryId] = useState(null)

    const handleEditClick = (e, country) => {
        e.preventDefault()
        setCountryId(country.cca3)
        
    }

    const handleSave = (e, country) => {
        e.preventDefault()
        console.log(country)
        updateCountry(country)
        setCountryId(null)
    }

    const handleCancel = () => {
        setCountryId(null)
    }

    return (
        <>
        {
            countryId === country.cca3 ?
            <EditableRow
                item={country}
                index={index}
                handleSave={handleSave}
                handleCancel={handleCancel}
            /> :
            <ReadOnlyRow
                item={country}
                index={index}
                handleEditClick={handleEditClick}
            />
        }
        </>
    )
}

export default RowsRender