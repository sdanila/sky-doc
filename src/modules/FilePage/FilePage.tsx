import React from 'react'
import { Route } from 'react-router-dom'

import FilePage from 'pages/FilePage/FilePage'

import { ROUTE_PATHS } from 'router/routes'

export class FilePageModule {
    getRoutes() {
        return (
            <Route key={ROUTE_PATHS.FILE} path={ROUTE_PATHS.FILE} element={<FilePage />} />
        )
    }
}