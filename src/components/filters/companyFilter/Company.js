import { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { baseQuantityItems } from "../../../store/additional/actions";
import { companyFilter } from "../../../store/filter/actions";
import { getCompanies } from "../../../store/filter/filterSelectors";


const Company = memo(({ item }) => {
    const dispatch = useDispatch();
    //getting flights from store
    const activeCompanyList = useSelector(getCompanies, shallowEqual);

    const [company, minPrice] = item;

    const onChange = (company) => {
        dispatch(companyFilter(company));
        dispatch(baseQuantityItems())
    }

    return (
        <div className="filter__company"><label className="filter__label" >
            <input type="checkbox" onChange={() => onChange(company)} disabled={!activeCompanyList.includes(company)} /> - {company}
        </label><p>{typeof (minPrice) === 'number' ? `от  ${minPrice}р.` : minPrice} </p>
        </div>
    )
})

export default Company;