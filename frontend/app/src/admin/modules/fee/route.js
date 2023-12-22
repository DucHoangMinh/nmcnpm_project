import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {FeeIndex} from './jsx';
import FeeCaculate from './jsx/caculate';
import PaidList from './jsx/paidlist';
import FundStatistic from './jsx/fund';
const FeeRoute = () =>{
    return (
        <Routes>
            <Route path="/fee/fund" element={<FundStatistic/>} />
            <Route path="/fee/paid" element={<PaidList/>} />
            <Route path="/fee/calculate" element={<FeeCaculate/>} />
            <Route path="/fee/list" element={<FeeIndex/>} />
            <Route path="/fee" element={<FeeIndex/>} />
        </Routes>
    );
}

export {FeeRoute};