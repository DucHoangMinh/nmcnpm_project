import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Room from './jsx/room';
const UserRoute = () =>{
    return (
        <Routes>
            <Route path="manage-user/*" element={
                <Routes>
                    <Route path="room" element = {<Room/>}/>
                </Routes>
            } />
        </Routes>
    );
}

export {UserRoute};