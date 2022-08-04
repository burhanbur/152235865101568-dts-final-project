import React from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Dashboard from './Dashboard';
import Detail from './Detail';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Main