import React from "react";
import {Route, Routes} from 'react-router-dom';
import {routes} from "./routes";
import Education from "../components/Education";
import Tasks from "../components/Tasks";
import Branch from "../components/Tasks/components/SearchCompanies/Branch";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.education} element={<Education/>}/>
            <Route path={routes.tasks} element={<Tasks/>}/>
            <Route path={routes.branch} element={<Branch/>}/>
        </Routes>
    );
};
export default AppRouter;