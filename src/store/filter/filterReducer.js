import { initData } from "../../utils/constants";


const initialState = {
    filteredFlights: initData,

}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default filterReducer;