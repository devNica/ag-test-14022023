import React, { useState } from "react"


const EditableRow = ({item, handleSave, handleCancel }) => {

    const [row, setRow] = useState(item)

    const handleOnchange = e => {
        setRow((prev)=>({...prev, [e.target.name]: e.target.value}))
    }
    

    return (
        <tr>
           <th>{row.cca3}</th>
            <th className="table-flag">
                <img src={row.flag} alt="flag" />
            </th>
            <th>
                <input
                    className="editable-input"
                    type="text"
                    required="required"
                    placeholder="insert country name"
                    name="name"
                    defaultValue={row.name}
                    onChange={handleOnchange}
                />
            </th>
            <th>
                <input
                    className="editable-input"
                    type="text"
                    required="required"
                    placeholder="insert country capital"
                    name="capital"
                    defaultValue={row.capital}
                    onChange={handleOnchange}
                />
            </th>
            <th>
                <input
                    className="editable-input"
                    type="text"
                    required="required"
                    placeholder="insert country continent"
                    name="continent"
                    defaultValue={row.continent}
                    onChange={handleOnchange}
                />
            </th>
            <th>{row.population}</th>
            <th className="column-options">
                <button
                    className="btn-save"
                    type="button"
                    onClick={(e)=>{handleSave(e, row)}}
                    >Save
                </button>
                <button
                    className="btn-cancel"
                    type="button"
                    onClick={handleCancel}
                    >Cancel
                </button>
            </th>
        </tr>
    )
}


export default React.memo(EditableRow)