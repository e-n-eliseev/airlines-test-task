import { memo, useEffect, useState } from "react";
import FlightInfo from "./flightInfo/FlightInfo";


const Ticket = memo(({ item }) => {
    const [message, setMessage] = useState(false);

    const onclick = () => {
        setMessage(true);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMessage(false)
        }, 3000)
        return () => clearTimeout(timeout)
    }, [message])

    return (
        <div className="ticket">
            <div className="ticket__main-info">
                <div className="ticket__logo">
                    <img src={`https://www.skyscanner.net/images/airlines/small/${item.carrier.airlineCode}.png`} alt={item.carrier.caption} />
                </div>
                <div className="ticket__price-info">
                    <p className="ticket__price-main">{Number.parseFloat(item.price.passengerPrices[0].singlePassengerTotal.amount)} ₽</p>
                    <p className="ticket__price-additional">Стоимость для одного взрослого пассажира</p>
                </div>
            </div>
            <FlightInfo info={item.legs[0]} />
            <FlightInfo info={item.legs[1]} />
            <button className="ticket__button" onClick={onclick}>
                Выбрать
            </button>
            {message
                ? <p className="ticket__message">
                    Скоро вы будете перенаправлены на страницу оплаты!
                </p>
                : null}
        </div>
    )
})

export default Ticket;