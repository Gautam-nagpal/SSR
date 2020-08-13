import React from "react";


function Card(props) {
    const { data = {} } = props;
    const { launch_success, mission_id = [], launch_year, links = {}, mission_name, flight_number, rocket } = data;
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={(links && links.mission_patch_small)} alt="not found" />
            </div>
            <h4 className="card-mission-name">{mission_name} #{flight_number}  </h4>
            <div>
                <strong>Mission Ids: </strong>
                <ul>
                    {
                        mission_id && mission_id.length ? mission_id.map((item, index) => {
                            return <li key={index}>{item} </li>
                        }) : <li>no id's founds</li>
                    }
                </ul>
            </div>
            <div>
                <strong>Launch Year: </strong>
                <span>{launch_year} </span>
            </div>
            <div>
                <strong>Successful Launch: </strong>
                <span> {`${launch_success}`}</span>
            </div>
            <div>
                <strong>Successful Landing: </strong>
                <ul>
                    {
                        rocket && rocket.first_stage && rocket.first_stage.cores && rocket.first_stage.cores.length &&
                        rocket.first_stage.cores.map((data, index) => {
                            return <li key={index}>{data.core_serial} - {data.land_success ? "true" : "false"}</li>
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default Card;