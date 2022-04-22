import CompanyFilter from "./companyFilter/CompanyFilter";
import PathFilter from "./pathFilter/PathFilter";
import PriceFilter from "./priceFilter/PriceFilter";
import SortFilter from "./sortFilter/SortFilter";


const Filters = () => {
    return (
        <div className="filters">
            <SortFilter />
            <PathFilter />
            <PriceFilter />
            <CompanyFilter />
        </div>
    );
};

export default Filters;