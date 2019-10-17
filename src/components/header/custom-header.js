import React, {useEffect} from 'react';
import {AutoComplete, Col, Icon, Input, Layout, Menu} from "antd";
import style from "./custom-header.module.css";
import {usePromiseTracker} from "react-promise-tracker";
import {connect} from "react-redux";
const { Header, Content, Footer } = Layout;

const CustomHeader = (props) => {

    const { promiseInProgress } = usePromiseTracker();

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
                        dataSource={props.stores}
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


const mapStateToProps = (state) => {
    return {
        stores: state.storeReducer.stores
    }
}

export default connect(mapStateToProps, null)(CustomHeader);