import React from 'react';
import Coupon from "../coupon";

const CouponList = (props) => {
    const {coupons} = props;
    if (!coupons) return  null;
    const {offers} = coupons;
    return offers.map(offer =>  <Coupon coupon={offer}/>);
}

export default CouponList;