import { Routes, Route } from "react-router-dom";
import PageRender from "./PageRender";

import React from 'react'

const index = () => {
    return (
        <Routes>
            <Route path="/" element={<PageRender />}></Route>
            <Route path="/:page" element={<PageRender />}></Route>
            <Route path="/:page/:id" element={<PageRender />}></Route>
        </Routes>
    )
}

export default index;