import React from "react";
import { Card } from "../../components";



function CardsSection(props) {
    const { cardsArr = [] } = props;
    return (
        <div className="cards-section">
            {
                cardsArr && cardsArr.length ? cardsArr.map((data, index) => {
                    return <div key={index} className={"rep-grid"} >
                        <Card data={data} />
                    </div>
                })
                    : <div className="no-result-found">No Results found</div>
            }
        </div>

    )
}

export default CardsSection;