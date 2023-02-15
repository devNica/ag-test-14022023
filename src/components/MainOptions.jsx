

const MainOptions = ({ show, handleFetch, handleOnchange }) => {


    return (
        <div className="main-option">
            {
                show ?
                    <div className="search">
                        <input
                            className="input-search"
                            type="text"
                            placeholder="Enter your search here..."
                            name="search"
                            onChange={handleOnchange}
                        />
                    </div> :
                    <></>
            }

            {!show ? <button
                className="btn-fetch"
                onClick={handleFetch}>
                Please click here to fetch
            </button> : <></>}

        </div>
    )
}

export default MainOptions