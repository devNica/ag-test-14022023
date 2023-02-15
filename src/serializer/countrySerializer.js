

const countryInfoSerializer = (country) =>
    new Promise((resolve, reject) => {
        if (country !== undefined) {
            resolve({
                name: country.name.common,
                capital: country?.capital ? country.capital[0] : '-',
                cca3: country.cca3 || '-',
                callingcode: country.idd?.root ? `${country.idd.root}${country.idd.suffixes[0]}` : '-',
                flag: country.flags.png || '-',
                continent: Array(country.continents).join(','),
                population: country.population
            })
        } else reject(new Error("Country data serialization error"))
    })

export default countryInfoSerializer