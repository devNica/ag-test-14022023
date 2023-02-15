import {  useCallback, useEffect, useState } from "react"
import { countryInfoSerializer } from "../serializer"
import api from "../services/api.service"

const useAsyncFetchCountries = () => {


    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(null)

    const fetchCountries = useCallback(async()=>{
        setLoading(true)
        const data = await api.fetchCountries()
        const countries = await Promise.all(data.map(countryInfoSerializer))
        setCountries(countries)
        setLoading(false)
    }, [])

     useEffect(() => {
        
        fetchCountries()
       
    }, [fetchCountries])

    return {countries, loading}
}

export default useAsyncFetchCountries