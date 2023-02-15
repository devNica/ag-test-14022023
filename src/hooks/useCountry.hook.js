import {useContext} from "react"
import CountryContext from "../context/CountryContext"

const useCountryHook = () => {
    const context = useContext(CountryContext)

    if (context === undefined) {
        throw new Error("Failed Context")
    }
   
    return context
}

export default useCountryHook