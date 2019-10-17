import React from 'react';
import './App.css';
import StoreView from "./containers/store-veiw";
import 'antd/dist/antd.css';
import store from './store/redux-store';
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <StoreView/>
    </Provider>
  );
}

export default App;
