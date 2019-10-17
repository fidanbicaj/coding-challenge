import React from 'react';
import {Card, Typography} from "antd";
import style from './coupon.module.css';

const {Paragraph} = Typography;

const Coupon = (props) => {

    const {coupon} = props;

    const {title, image_url, url, coupon_code} = coupon;

    const image = <img alt="example" src={image_url}/>;

    return (
        <Card
            className={style.Card}
            cover={image}>
            <Typography>
                <h5> {title} </h5>
                <Paragraph>
                    <a href={url} target={"_blank"}>
                        Link here
                    </a>
                </Paragraph>
            </Typography>
        </Card>
    );
}

export default Coupon;