import axios from "axios"
const uri = 'https://restcountries.com/v3.1/all'


const api = {}

api.fetchCountries = () => {
    return axios.get(uri, {
        headers: {
            'Content-Type': 'applications/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(res => res.data)
}

export default api