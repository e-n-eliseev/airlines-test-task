import { useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { baseQuantityItems } from "../../../store/additional/actions";
import { priceFilter } from "../../../store/filter/actions";
import { getFlights } from "../../../store/filter/filterSelectors";
import { MAX_PRICE, MIN_PRICE } from "../../../utils/constants";


const PriceFilter = () => {
    const dispatch = useDispatch();
    //getting info from storre
    const filteredFlights = useSelector(getFlights, shallowEqual);
    const filteredPricelist = [...filteredFlights.map(item =>
        parseFloat(item.flight.price.passengerPrices[0].singlePassengerTotal.amount))].sort((a, b) => a - b);
    //creating ref for delay
    const ref = useRef();
    //states of inputs
    const [minPrice, setMinPrice] = useState(MIN_PRICE);
    const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
    //sending dispatch when valuse of filter are changing, delay 500ms
    useEffect(() => {
        clearTimeout(ref.current);
        ref.current = setTimeout(() => {
            dispatch(priceFilter([minPrice, maxPrice]));
            dispatch(baseQuantityItems());
        }, 500)
        return () => clearTimeout(ref.current);
    }, [minPrice, maxPrice])
    //handlers for price change
    const onChangeMinHandler = (event) => {
        if (event.target.value < maxPrice && event.target.value > 0) {
            setMinPrice(+event.target.value);
        }
    }
    const onChangeMaxHandler = (event) => {
        if (+event.target.value > minPrice) {
            setMaxPrice(+event.target.value);
        }
    }
    return (
        <form className="filter filter__price">
            <p className="filter__heading">Цена</p>
            <label >
                От <input
                    type="number"
                    placeholder={filteredPricelist[0]}
                    onChange={onChangeMinHandler} />
            </label>
            <label className="filter__price-label">
                До <input
                    type="number"
                    placeholder={filteredPricelist[filteredPricelist.length - 1]}
                    onChange={onChangeMaxHandler}
                />
            </label>
        </form >
    );
}

export default PriceFilter;