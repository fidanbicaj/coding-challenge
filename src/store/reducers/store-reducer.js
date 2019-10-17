import {GET_STORES, SET_COUPONS} from "../actions/actions";

const initialState = {stores: []};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_STORES.actionType: {
            return { ...state, stores: action.result}
        }
        case SET_COUPONS.actionType: {
            return {...state, coupons: action.result}
        }
        default:
            return state;
    }
}

export default reducer;