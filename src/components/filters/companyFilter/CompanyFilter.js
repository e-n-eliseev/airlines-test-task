
import { shallowEqual, useSelector } from "react-redux";
import { getFlights } from "../../../store/filter/filterSelectors";
import { COMPANIES_LIST } from "../../../utils/constants";
import Company from "./Company";

const CompanyFilter = () => {
    const filteredFlights = useSelector(getFlights, shallowEqual);
    const COMPANIES_MIN_PRICE = COMPANIES_LIST.reduce((acc, company) => {
        const minPrice = Math.min(...filteredFlights.reduce((acc, item) => {
            if (item.flight.carrier.caption === company) {
                acc.push(item.flight.price.passengerPrices[0].singlePassengerTotal.amount);
            }
            return acc;
        }, []))
        acc.push([company, Number.isFinite(minPrice) ? minPrice : "Not avail."])
        return acc;
    }, []);
    return (
        <form className="filter">
            <p className="filter__heading">Авиакомпании</p>
            {COMPANIES_MIN_PRICE.map((item, index) => <Company key={index} item={item} />)}
        </form >
    );
};

export default CompanyFilter;