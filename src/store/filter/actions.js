import { COMPANY_FILTER, PATH_FILTER, PRICE_FILTER, SORT_FILTER } from "./types";

export const sortFilter = (method) => ({
    type: SORT_FILTER,
    method
})

export const pathFilter = (method) => ({
    type: PATH_FILTER,
    method
})

export const companyFilter = (method) => ({
    type: COMPANY_FILTER,
    method
})

export const priceFilter = (method) => ({
    type: PRICE_FILTER,
    method
})