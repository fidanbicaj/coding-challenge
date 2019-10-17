import axios from "axios";


const ApiRequest = axios.create({
    baseURL: 'https://coupon-search-backend.herokuapp.com/'
});

const request = async(url, type, dataParam) => {
    const requestConf = {
        method: type,
        url: url,
        data: dataParam
    };

    const result = await ApiRequest.request(requestConf);
    const { data, status } = result;

    return { result: data, status }
}

export default request;
