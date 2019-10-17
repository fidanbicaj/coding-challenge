import React from 'react';
import style from './custom-footer.module.css';
import {Layout} from "antd";

const { Footer } = Layout;

const CustomFooter = () => {

    return (
        <Footer className={style.Footer}>Ant Design ©2018 Created by Ant UED</Footer>
    );
}

export default CustomFooter;