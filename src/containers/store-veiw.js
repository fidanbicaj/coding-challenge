import React, {useEffect} from 'react';
import {Layout, Spin} from 'antd';
import CustomHeader from "../components/header/custom-header";
import CustomContent from "../components/content/custom-content";
import {usePromiseTracker} from "react-promise-tracker";
import CustomFooter from "../components/footer/custom-footer";
import * as actionCreators from "../store/actions/actions";
import {useDispatch} from "react-redux";

const StoreView = (props) => {

    const dispatch = useDispatch();

    const { promiseInProgress } = usePromiseTracker();

    const onSelectHandler = async (value) => dispatch(actionCreators.getCouponsByStore(value));


    useEffect(() => {
        initStores();
    }, []);

    const initStores = async () => {
        dispatch(actionCreators.getStores())
    }

    return (
        <Layout >
            <CustomHeader onSelect={onSelectHandler}/>
            <Spin spinning={promiseInProgress}>
                <CustomContent/>
            </Spin>
            <CustomFooter/>
        </Layout>
    );
}

export default StoreView;