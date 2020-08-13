import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions"
import Filters from "./Filters";
import CardsSection from "./CardsSection";
import qs from "querystring"
import { useHistory } from "react-router-dom";


function Homepage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const reducerState = useSelector(state => state.spaceX)

    useEffect(() => {
        let query = { limit: 100 }
        if (window.location.search) {
            query = qs.parse(window.location.search.substr(1))
        }
        getAPIData(query)
    }, [history.location.search])


    const getAPIData = (obj) => {
        dispatch(actions.getAllData(obj))
    }

    const onChangeFilters = (key, type) => {
        let query = qs.parse(window.location.search.substr(1))

        let obj = {
            ...query,
            limit: 100,
            [type]: key,
        }

        let queryString = Object.keys(obj).map((data, index) => {
            return `${index === 0 ? "/?" : "&"}${data}=${obj[data]}`
        }).join("")

        history.push(queryString)
    }

    let selectedFilters = qs.parse(window.location.search.substr(1))

    return (
        <div>
            <div>
                <h2 className="title-heading">SpaceX Launch Program </h2>
            </div>

            <div className="main-section">
                <div className="filters-category"  >
                    <Filters onChangeFilters={onChangeFilters} selectedFilters={selectedFilters || {}} />
                </div>

                <div className="cards-category">
                    <CardsSection cardsArr={(reducerState && reducerState.spaceXValues) || []} />
                </div>
            </div>

            <div>
                <strong>Developed by:</strong>
                <span>Gautam</span>
            </div>
        </div>
    )
}

export default Homepage;