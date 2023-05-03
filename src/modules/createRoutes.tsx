import React from 'react'
import { Routes, Navigate, Route } from 'react-router-dom'
import { ROUTE_PATHS } from 'router/routes';

interface IModuleProps {
    // eslint-disable-next-line no-undef
    getRoutes: () => JSX.Element
}

export function createRoutes(modules: IModuleProps[]) {
    const routesFromModules = modules.map(module => module.getRoutes())
    return (
        <Routes>
            {routesFromModules}
            <Route path="*" element={<Navigate to={ROUTE_PATHS.FILES} replace />} />
        </Routes>
        
    )
}