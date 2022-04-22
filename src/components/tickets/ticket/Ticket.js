import { memo } from "react";
import FlightInfo from "./flightInfo/FlightInfo";


const Ticket = memo(() => {
    return (
        <div className="ticket">
            <div className="ticket__main-info">
                <div className="ticket__logo">
                    <img src="https://www.aeroflot.ru/media/aflfiles/logo_rd/header__logo.png" alt="Company logo" />
                </div>
                <div className="ticket__price-info">
                    <p className="ticket__price-main">21049 ₽</p>
                    <p className="ticket__price-additional">Стоимость для одного взрослого пассажира</p>
                </div>
            </div>
            <FlightInfo />
            <FlightInfo />
            <button className="ticket__button">
                Выбрать
            </button>
        </div>
    )
})

export default Ticket;