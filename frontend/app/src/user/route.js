import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserHome from '../user/home/index'
import UserFeePaid from './fee/feepaid'; 
import UserPayFee from './fee/payfee';
import UserFeeStatistic from './fee/statistic';
import UserMember from './room/members';
import UserAbsence from './room/absence';
import UserLogin from './authorize/UserLogin';
import UserRegister from './authorize/UserRegister';
const UserRoutes = () =>{
    return (
        <Routes>
            <Route path="login" element={<UserLogin/>} />
            <Route path="register" element={<UserRegister/>} />
            <Route path="home" element={<UserHome/>} />
            <Route path="payfee" element={<UserPayFee/>} />
            <Route path='statistic' element={<UserFeeStatistic/>}/>
            <Route path='room/members' element={<UserMember/>}/>
            <Route path='room/absence' element={<UserAbsence/>}/>
        </Routes>
    );
}

export {UserRoutes};