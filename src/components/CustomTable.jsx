import { useEffect, useState } from "react"
import { useCountryHook } from "../hooks"
import RowsRender from "./RowsRender"


const CustomTable = ({ title }) => {

    const { countriesList } = useCountryHook()
    const [countries, setCountries] = useState([])

    useEffect(()=> {
        setCountries(countriesList)
    },[countriesList])

   

    const listCountries = countries.length > 0 ?
        countries.map((country, index)=>(<RowsRender country={country} index={index}/>)) :
        countriesList.map((country, index)=>(<RowsRender country={country} index={index}/>))


    return (
        <div className="custom-table">
            <h1 className="custom-table-title">{title}</h1>

            <form className="form-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">CCA3</th>
                            <th scope="col">Flag</th>
                            <th scope="col">Name</th>
                            <th scope="col">Capital</th>
                            <th scope="col">Continent</th>
                            <th scope="col">Population</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listCountries}
                    </tbody>
                </table>
            </form>

        </div>



    )
}

export default CustomTable