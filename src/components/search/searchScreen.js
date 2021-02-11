import React from 'react'

export const searchScreen = () => {
    return (
        <div>
            <h2>Search Screen</h2>
            <hr/>
            <form className="form-group">
                <input
                    type="text"
                    className="form-group col-8"
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Search
                </button>
            </form>>         
        </div>
    )
}
