import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Daily from "./pages/Daily";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Daily />} />
            </Routes>
        </BrowserRouter>
    );
}
