import {
    COMPANIES_LIST,
    initData,
    MAX_PRICE,
    MIN_PRICE
} from "../../utils/constants";
import {
    COMPANY_FILTER,
    PATH_FILTER,
    PRICE_FILTER,
    SORT_FILTER
} from "./types";

const initialState = {
    filteredFlights: initData,
    filteredCompanies: COMPANIES_LIST,
    filters: {
        sort: "",
        path: "",
        price: [MIN_PRICE, MAX_PRICE],
        company: []
    },

}

const filterReducer = (state = initialState, { type, method }) => {
    switch (type) {
        case SORT_FILTER:
            return jointFilter({
                ...state,
                filters: {
                    ...state.filters,
                    sort: method
                }
            })

        case PATH_FILTER:
            return jointFilter({
                ...state,
                filters: {
                    ...state.filters,
                    path: method === state.filters.path ? "" : method
                }
            })
        case COMPANY_FILTER:
            return jointFilter({
                ...state,
                filters: {
                    ...state.filters,
                    company: state.filters.company.includes(method)
                        ? state.filters.company.filter(item => item !== method)
                        : [...state.filters.company, method]
                }
            })
        case PRICE_FILTER:
            return jointFilter({
                ...state,
                filters: {
                    ...state.filters,
                    price: [...method]
                }
            })
        default:
            return state;
    }
}
//sorting filter function
const sortFilter = (state, data) => {
    const { sort } = state.filters;
    if (sort === '- по убыванию цены') {
        return data.sort((a, b) => {
            return +b.flight.price.passengerPrices[0].singlePassengerTotal.amount - +a.flight.price.passengerPrices[0].singlePassengerTotal.amount
        })
    } else if (sort === '- по возрастанию цены') {
        return data.sort((a, b) => {
            return +a.flight.price.passengerPrices[0].singlePassengerTotal.amount - +b.flight.price.passengerPrices[0].singlePassengerTotal.amount
        })
    } else {
        return data.sort((a, b) => {
            const time1 = a.flight.legs.reduce((acc, item) => acc + item.duration, 0)
            const time2 = b.flight.legs.reduce((acc, item) => acc + item.duration, 0)
            return time1 - time2
        })
    }
}
//path sorting filter function
const pathFilter = (state, data) => {
    const { path } = state.filters;
    if (path === "- нет пересадок") {
        return data.filter(item => item.flight.legs[0].segments.length === 1 && item.flight.legs[1].segments.length === 1)
    } else {
        return data.filter(item => {
            return (item.flight.legs[0].segments.length === 2 && item.flight.legs[1].segments.length === 1) || (item.flight.legs[0].segments.length === 1 && item.flight.legs[1].segments.length === 2)
        })
    }
}
//company filter function
const companyFilter = (state, data) => {
    const { company } = state.filters;
    return data.filter(item => company.includes(item.flight.carrier.caption))
}
//filter by price
const priceFilter = (state, data) => {
    const { price } = state.filters;
    return data.filter(item => (item.flight.price.passengerPrices[0].singlePassengerTotal.amount >= price[0] && item.flight.price.passengerPrices[0].singlePassengerTotal.amount <= price[1]))
}
// joint filter function
const jointFilter = (state) => {
    const { sort, path, price, company } = state.filters;
    let newArr = [...initData];
    if (path) newArr = pathFilter(state, newArr);
    if (sort) newArr = sortFilter(state, newArr);
    newArr = priceFilter(state, newArr);
    let newfilteredCompanies;
    if (path || price.length) newfilteredCompanies = [...new Set(newArr.map(item =>
        item.flight.carrier.caption))]
    if (company.length) newArr = companyFilter(state, newArr);
    return {
        ...state,
        filteredCompanies: newfilteredCompanies || COMPANIES_LIST,
        filteredFlights: newArr,
    }
}
export default filterReducer;