// routes/index.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routesConfig from './routeConfig';
import Layout from '../layout/Layout';
import { Grid } from '@mui/material';
import SideNavBar from "../layout/NavBar/SideNavbar";

const Index = () => {

    return (

        <Router>
            <Layout>
                <Grid style={{ marginLeft: "15px" }}>
                    <SideNavBar />
                </Grid>
                <Routes>
                    {routesConfig.map((route, index) => (
                        <Route key={index} path={route.path} element={route.component} />
                    ))}
                </Routes>
            </Layout>
        </Router>


    );
};

export default Index;
