import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTE_PATHS } from 'router/routes'

export class FilesPageModule {
    getRoutes() {
        return (
            <Route key={ROUTE_PATHS.FILES} path={ROUTE_PATHS.FILES}>
                <Routes>
                    <Route key={ROUTE_PATHS.FILES} path={ROUTE_PATHS.FILES} element={<>Files page</>} />
                </Routes>
            </Route>
        )
    }
}