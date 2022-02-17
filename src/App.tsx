import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Daily from "./pages/Daily";
import Unlimited from "./pages/Unlimited";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Daily />} />
                <Route path="/unlimited" element={<Unlimited />} />
            </Routes>
        </BrowserRouter>
    );
}
