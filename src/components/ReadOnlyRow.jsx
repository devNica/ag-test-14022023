

const ReadOnly = ({item, index, handleEditClick}) => {
    return (
        <tr>
            <th>{item.cca3}</th>
            <th className="table-flag">
                <img src={item.flag} alt="flag" />
            </th>
            <th>{item.name}</th>
            <th>{item.capital}</th>
            <th>{item.continent}</th>
            <th>{item.population}</th>
            <th className="column-options">
                <button
                    className="btn-edit" 
                    onClick={(e)=>handleEditClick(e, item)}
                    type="button"
                >
                        Edit
                </button>
            </th>
        </tr>
    )
}

export default ReadOnly