import { memo } from "react";
import moment from "moment";
import 'moment/locale/ru';

moment.locale('ru');

const FlightInfo = memo(({ info }) => {
    const departure = info.segments[0];
    const arrival = info.segments.length === 1 ? departure : info.segments[1]
    return (
        <div className="ticket__additional-info">
            <p className="ticket__additional-path">
                <span className="ticket__additional-departure-city">
                    {departure.departureCity.caption},&nbsp;
                </span>
                <span className="ticket__additional-departure-airport">
                    {departure.departureAirport.caption}&nbsp;
                </span>
                <span className="ticket__additional-departure-alias">
                    ({departure.departureAirport.uid}) →&nbsp;
                </span>
                <span className="ticket__additional-arrival-city">
                    {arrival.arrivalCity.caption},&nbsp;
                </span>
                <span className="ticket__additional-arrival-airport">
                    {arrival.arrivalAirport.caption}&nbsp;
                </span>
                <span className="ticket__additional-arrival-alias">
                    ({arrival.arrivalAirport.uid})
                </span>
            </p>
            <hr />
            <div className="ticket__additional-travel-time">
                <p>
                    {moment(departure.departureDate).format('LT')}
                    &nbsp;
                    <span>
                        {moment(departure.departureDate).format('D MMM dd')}
                    </span>
                </p>
                <p>
                    🕓 {Number.parseInt(info.duration / 60)} ч {info.duration % 60} мин
                </p>
                <p>
                    <span>
                        {moment(arrival.arrivalDate).format('D MMM dd')}
                    </span>
                    &nbsp;
                    {moment(arrival.arrivalDate).format('LT')}
                </p>
            </div>
            <p className="ticket__additional-transfers">
                {info.segments.length === 2 ? <span> 1 пересадка </span> : null}
            </p>
            <p className="ticket__additional-company">
                Рейс выполняет: {departure.operatingAirline?.caption
                    ? departure.operatingAirline.caption
                    : departure.airline.caption
                }
            </p>
        </div>
    )
})

export default FlightInfo;