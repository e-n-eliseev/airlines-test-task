import { ITEMS_TO_SHOW } from "../../utils/constants";
import { ADDITIONAL_BASE_ITEMS, ADDITIONAL_INCREASE_ITEMS } from "./types";

const initialState = {
    itemsToShow: ITEMS_TO_SHOW,
}

const additionalReducer = (state = initialState, { type }) => {
    switch (type) {
        case ADDITIONAL_INCREASE_ITEMS:
            return {
                ...state,
                itemsToShow: state.itemsToShow += ITEMS_TO_SHOW
            }
        case ADDITIONAL_BASE_ITEMS:
            return {
                ...state,
                itemsToShow: ITEMS_TO_SHOW
            }
        default:
            return state;
    }
}

export default additionalReducer;