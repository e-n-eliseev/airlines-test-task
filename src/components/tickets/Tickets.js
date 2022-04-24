import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getQuantityItems } from "../../store/additional/additionalSelectors";
import { getFlights } from "../../store/filter/filterSelectors";
import { increaseQuantityItems } from "../../store/additional/actions";

import Ticket from "./ticket/Ticket";

const Tickets = () => {
    //getting info from store
    const flight = useSelector(getFlights, shallowEqual);
    const { itemsToShow } = useSelector(getQuantityItems)
    const dispatch = useDispatch();

    const items = flight.slice(0, itemsToShow);
    //increasing items on the page
    const onHandleAdd = () => {
        dispatch(increaseQuantityItems());
    }

    return (
        <div className="tickets" >
            {items.map(item => <Ticket key={item.flightToken} item={item.flight} />)}
            < button className="tickets__button" onClick={onHandleAdd} disabled={flight.length <= itemsToShow} >
                Показать еще
            </button >
        </div >
    );
};

export default Tickets;