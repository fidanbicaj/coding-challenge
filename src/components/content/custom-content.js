import React from 'react';
import {Layout, Row} from "antd";
import style from './content.module.css';
import CouponList from "../coupon/coupon-list/coupon-list";
import {useSelector} from "react-redux";

const {Content} = Layout;

const CustomContent = () => {

    const coupons = useSelector((state) => state.storeReducer.coupons);

    return (
        <Layout>
            <Content className={style.Content}>
                <div className={style.Separator}>
                </div>
                <div className={style.ContentDisplay}>
                    <Row justify="start" type="flex" gutter={16}>
                        <CouponList coupons={coupons}/>
                    </Row>
                </div>
            </Content>
        </Layout>
    );

}

export default CustomContent;

