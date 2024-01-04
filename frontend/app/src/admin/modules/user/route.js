import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Room from './jsx/room';
import ManageIndex from './jsx';
import PopulationList from '../family/jsx/populationlist';
const UserRoute = () =>{
    return (
        <Routes>
            <Route path="manage-user/*" element={
                <Routes>
                    <Route path="" element = {<ManageIndex/>}/>
                    <Route path="room/:id" element = {<Room/>}/>
                </Routes>
            } />
        </Routes>
    );
}

export {UserRoute};