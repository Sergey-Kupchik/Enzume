import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BannerProvider} from './compo/BannerContext';

import {Banner} from './compo/Baner';
import {log} from 'util';
import { App2 } from './compo/ GuessedWords/App2';
// let propsTO = {contractID: "1212",totalValue: 2000}
ReactDOM.render(
    <React.StrictMode>
        {/*<App/>*/}
        {/*<BannerProvider>*/}
        {/*    <Banner/>*/}
        {/*</BannerProvider>*/}
        {/*<Venu/>*/}
        <App2/>
        {/*<Banner checked={true} click={()=> {alert("CLICK")}} contractID={"1991.13.02"}  totalValue={27}/>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
