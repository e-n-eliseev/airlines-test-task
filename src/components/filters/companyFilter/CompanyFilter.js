import { COMPANIES_MIN_PRICE } from "../../../utils/constants";
import Company from "./Company";

const CompanyFilter = () => {
    return (
        <form className="filter">
            <p className="filter__heading">Авиакомпании</p>
            {COMPANIES_MIN_PRICE.map((item, index) => <Company key={index} item={item} />)}
        </form >
    );
};

export default CompanyFilter;