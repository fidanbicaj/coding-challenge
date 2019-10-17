import React from 'react';
import {AutoComplete, Col, Icon, Input, Layout, Menu} from "antd";
import style from "./custom-header.module.css";
import {usePromiseTracker} from "react-promise-tracker";
import {useSelector} from "react-redux";

const { Header } = Layout;

const CustomHeader = (props) => {

    const { promiseInProgress } = usePromiseTracker();

    const stores = useSelector((state) => state.storeReducer.stores);


    return (
        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                className={style.HeaderMenu}
            >
                <Col span={8} offset={8} >
                    <AutoComplete
                        filterOption={(inputValue, option) =>
                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                        onSelect={props.onSelect}
                        dataSource={stores}
                        disabled={promiseInProgress}
                        className={style.AutoComplete}
                        placeholder="Search">
                        <Input />
                        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                    </AutoComplete>

                </Col>
            </Menu>
        </Header>

    )
}



export default CustomHeader;