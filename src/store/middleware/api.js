import request from '../../util/request';
import {trackPromise} from "react-promise-tracker";

const CALL_API = Symbol('DATA API');

const middleware = () => (next) => async (action) => {

    const ACTION_API = action[CALL_API];
    if (!ACTION_API){
        return next(action);
    }

    const {endpoint, actionType, requestType , data} = ACTION_API;

    try {
        const response = await  trackPromise(request(endpoint, requestType, data ));

        if (response.status !== 200) {
            throw new Error('Invalid response from api')
        }

        return next({type: actionType,result: response.result});

    }catch (error) {
        console.error(error);
    }
};

export {middleware as apiMiddleWare, CALL_API};
