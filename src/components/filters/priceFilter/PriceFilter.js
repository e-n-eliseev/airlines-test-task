import { MAX_PRICE, MIN_PRICE } from "../../../utils/constants";


const PriceFilter = () => {
    return (
        <form className="filter filter__price">
            <p className="filter__heading">Цена</p>
            <label >
                От <input type="number" min={MIN_PRICE} placeholder={MIN_PRICE} />
            </label>
            <label className="filter__price-label">
                До <input type="number" max={MAX_PRICE} placeholder={MAX_PRICE} />
            </label>
        </form >
    );
};

export default PriceFilter;