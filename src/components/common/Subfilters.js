import React from "react";


const Subfilters = (props) => {
    const { title = "", itemsArr = [], onChangeFilters, type, selectedFilters = {} } = props;
    return (
        <>
            <div className="sub-filters-heading">
                {title}
            </div>
            <div className="sub-filters">
                {
                    itemsArr.map((data, index) => {
                        let isSelected = selectedFilters && selectedFilters[type] === `${data}` ? true : false;
                        return <div key={index} className="sub-filters-button-section">
                            <button
                                onClick={() => onChangeFilters(data, type)}
                                className={isSelected ? "selected-filter-btn" : "sub-filters-button"}
                            >
                                {`${data}`}
                            </button>
                        </div>
                    })
                }
            </div>
        </>
    )
}


export default Subfilters;
