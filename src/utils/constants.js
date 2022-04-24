import flights from "../flights.json";

//total info array
export const initData = flights.result.flights;

//list of sort types
export const SORT = [
    '- по возрастанию цены',
    '- по убыванию цены',
    '- по времени в пути'
];

//list of all paths
export const PATH = ['- нет пересадок', '- 1 пересадка'];

//pricelist array
export const PRICELIST = [...initData.map(item =>
    parseFloat(item.flight.price.passengerPrices[0].singlePassengerTotal.amount))]
//minimal price for 1 passenger without filters
export const MIN_PRICE = Math.min(...PRICELIST);
//maximal price for 1 passenger without filters
export const MAX_PRICE = Math.max(...PRICELIST);

//list of all companies
export const COMPANIES_LIST = [...new Set(initData.map(item =>
    item.flight.carrier.caption))];

//list of minimal price for a company
export const COMPANIES_MIN_PRICE = COMPANIES_LIST.reduce((acc, company) => {
    const minPrice = Math.min(...initData.reduce((acc, item) => {
        if (item.flight.carrier.caption === company) {
            acc.push(item.flight.price.passengerPrices[0].singlePassengerTotal.amount);
        }
        return acc;
    }, []))
    acc.push([company, minPrice])
    return acc;
}, []);

//base quantity of items to show and add
export const ITEMS_TO_SHOW = 2;





