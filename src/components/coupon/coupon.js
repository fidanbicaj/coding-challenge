import React from 'react';
import {Card, Typography} from "antd";
import style from './coupon.module.css';

const Coupon = (props) => {

    const {coupon} = props;

    const {title, image_url} = coupon;

    const image = <img alt="example" src={image_url}/>;

    return (
        <Card
            className={style.Card}
            cover={image}>
            <Typography>
                <h5> {title} </h5>
            </Typography>
        </Card>
    );
}

export default Coupon;