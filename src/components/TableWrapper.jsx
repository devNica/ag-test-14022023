import React, { useState } from "react"
import CustomTable from "./CustomTable"

import { useCountryHook, useAsyncFetchCountries } from "../hooks"
import MainOptions from "./MainOptions"

const TableWrapper = () => {
    const [show, setShow] = useState(false)
    const { countries } = useAsyncFetchCountries()
    const { setCountries, filterCountries } = useCountryHook()

    const handleFetch = () => {

        setCountries(countries)
        setShow(true);

    }

    const handleOnchange = (e) => {
        const queryKey = String(e.target.value).toUpperCase()
        if (queryKey.length > 0) {
            const filtered = countries.filter(c=>String(c.cca3).toUpperCase() === queryKey || String(c.name).toUpperCase() === queryKey)
            filterCountries(filtered)
        } else setCountries(countries)
       
        
    }

    return (
        <div className="wrapper">
            <h1 className="wrapper-title">Countries Information API</h1>
            
            {
                show ?
                    <div className="wrapper-container-tables">
                        <CustomTable title="Countries Table A" />
                        <CustomTable title="Countries Table B" />
                    </div> : <></>
            }

            <MainOptions show={show} handleFetch={handleFetch} handleOnchange={handleOnchange}/>

        </div>
    )
}

export default TableWrapper