

export const initialState = {
    countries: []
}

function countryReducer (state = initialState, action = {}) {
    
    if (action.type === 'SET_COUNTRIES') {
        return { countries: [...action.payload] }
    }
    
    
    if (action.type === 'EDIT_COUNTRY') {
        const x = state.countries.map(c=>{
            if(c.cca3 === action.payload.cca3){
                return action.payload
            }
            else return c
        })
        return { countries: x}
    }

    if (action.type === 'FILTER_COUNTRY') {
        return {countries: action.payload}
    }
    
    return state
}


export default countryReducer