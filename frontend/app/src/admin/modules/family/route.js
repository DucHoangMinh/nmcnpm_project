import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FamilyList from './jsx/list';
import RoomProssess from './jsx/process';
import RoomList from './jsx/roomlist';
import PopulationList from './jsx/populationlist';
const FamilyRoute = () =>{
    return (
        <Routes>
            <Route path="/family/list" element={<FamilyList/>} />
            <Route path="/family/room-request" element={<RoomProssess/>} />
            <Route path="/family/room-list" element={<RoomList/>} />
            <Route path='family/population/list' element= {<PopulationList/>} />
        </Routes>
    );
}

export {FamilyRoute};