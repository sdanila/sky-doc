import React from 'react'
import { Route } from 'react-router-dom'

import FilesPage from 'pages/FilesPage/FilesPage'

import { ROUTE_PATHS } from 'router/routes'

export class FilesPageModule {
    getRoutes() {
        return (
            <Route key={ROUTE_PATHS.FILES} path={ROUTE_PATHS.FILES} element={<FilesPage />} />
        )
    }
}