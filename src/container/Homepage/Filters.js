import React from "react";
import { countArray } from "../../utils";
import { Subfilters } from "../../components"


function Filters(props) {
    const { onChangeFilters, selectedFilters } = props;
    let yearArr = countArray(2006, 15)
    return (
        <div className="filters-section">
            <h4 className="title-heading"> Filters</h4>
            <div>
                <Subfilters
                    onChangeFilters={onChangeFilters}
                    type="launch_year"
                    title="Launch Year"
                    itemsArr={yearArr}
                    selectedFilters={selectedFilters}
                />
            </div>

            <div>
                <Subfilters
                    onChangeFilters={onChangeFilters}
                    type="launch_success"
                    title="Successful Launch"
                    itemsArr={[true, false]}
                    selectedFilters={selectedFilters}
                />
            </div>

            <div>
                <Subfilters
                    onChangeFilters={onChangeFilters}
                    type="land_success"
                    title="Successful Land"
                    itemsArr={[true, false]}
                    selectedFilters={selectedFilters}
                />
            </div>
        </div>
    )
}

export default Filters;


