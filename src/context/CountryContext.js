import { createContext, useReducer } from "react";
import CountryReducer, { initialState } from "../reducer/country.reducer";

const CountryContext = createContext(initialState)


export const CountryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CountryReducer, initialState)

    const getCountries = () => state.countries

    const setCountries = (countries) => {
        dispatch({
            type: "SET_COUNTRIES",
            payload: countries
        })
    }

    const updateCountry = (country) => {
        dispatch({
            type: "EDIT_COUNTRY",
            payload: country
        })
    }

    const filterCountries = (filtered) => {
        dispatch({
            type: "FILTER_COUNTRY",
            payload: filtered
        })
    }

    const value = {
        countriesList: state.countries,
        setCountries,
        updateCountry,
        filterCountries,
        getCountries
    }

    return <CountryContext.Provider value={value}>
        {children}
    </CountryContext.Provider>
}

export default CountryContext