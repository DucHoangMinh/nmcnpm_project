import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResidentProcessing from './jsx/residentprocessing';
const PopulationRoute = () =>{
    return (
        <Routes>
            <Route path="/population/request" element={<ResidentProcessing/>} />
        </Routes>
    );
}

export {PopulationRoute};