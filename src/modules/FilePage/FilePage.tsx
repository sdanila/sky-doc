import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTE_PATHS } from 'router/routes'

export class FilePageModule {
    getRoutes() {
        return (
            <Route key={ROUTE_PATHS.FILE} path={ROUTE_PATHS.FILE}>
                <Routes>
                    <Route key={ROUTE_PATHS.FILE} path={ROUTE_PATHS.FILE} element={<>File page</>} />
                </Routes>
            </Route>
        )
    }
}