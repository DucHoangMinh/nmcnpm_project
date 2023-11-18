import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeeIndex from './jsx';
const FeeRoute = () =>{
    return (
        <Routes>
            <Route path="fee" element={<FeeIndex/>} />
        </Routes>
    );
}

export {FeeRoute};