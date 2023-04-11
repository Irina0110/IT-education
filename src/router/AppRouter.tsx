import React from "react";
import {Route, Routes} from 'react-router-dom';
import {routes} from "./routes";
import Education from "../components/Education";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.education} element={<Education/>}/>
        </Routes>
    );
};
export default AppRouter;