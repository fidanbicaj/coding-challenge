import {CALL_API} from "../middleware/api";
import * as requestUrls from  '../../util/request-urls';
import {RequestMethod} from "../../util/reques-type";

export const GET_STORES = {
    actionType: 'GET_STORES',
    type: 'GET',
    data: {}
};

export const SET_COUPONS = {
    actionType: 'SET_COUPONS',
    type: 'GET',
    data: {}
}

export const getStores = () => {
    return {
        [CALL_API]: {
            endpoint: requestUrls.COUPON,
            requestType: RequestMethod.GET,
            actionType: GET_STORES.actionType,
            data: GET_STORES.data
        }
    }
}

export const getCouponsByStore = (store) => {
    return {
        [CALL_API]: {
            endpoint: requestUrls.COUPON,
            requestType: RequestMethod.POST,
            actionType: SET_COUPONS.actionType,
            data: {store: store}
        }
    }
}
