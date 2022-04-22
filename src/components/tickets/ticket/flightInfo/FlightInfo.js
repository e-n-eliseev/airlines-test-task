import { memo } from "react";


const FlightInfo = memo(() => {
    return (
        <div className="ticket__additional-info">
            <p className="ticket__additional-path">
                <span className="ticket__additional-departure-city">
                    Москва,&nbsp;
                </span>
                <span className="ticket__additional-departure-airport">
                    Шереметьево&nbsp;
                </span>
                <span className="ticket__additional-departure-alias">
                    (SVO) →&nbsp;
                </span>
                <span className="ticket__additional-arrival-city">
                    Лондон,&nbsp;
                </span>
                <span className="ticket__additional-arrival-airport">
                    Лондон, Хитроу&nbsp;
                </span>
                <span className="ticket__additional-arrival-alias">
                    (SVO)
                </span>
            </p>
            <hr />
            <div className="ticket__additional-travel-time">
                <p>
                    20:40
                    &nbsp;
                    <span>18 авг. вт</span>
                </p>
                <p>
                    🕓 14 ч 45 мин
                </p>
                <p>
                    <span>18 авг. вт</span>
                    &nbsp;
                    20:40
                </p>
            </div>
            <p className="ticket__additional-transfers">
                <span> 1 пересадка </span>
            </p>
            <p className="ticket__additional-company">
                Рейс выполняет:BT Air Baltic Corporation A/S
            </p>
        </div>
    )
})

export default FlightInfo;