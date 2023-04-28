import React from 'react'
import { Routes, Navigate, Route } from 'react-router-dom'
import { ROUTE_PATHS } from 'router/routes';

export function createRoutes(modules: any[]) {
    const routesFromModules = modules.map(module => module.getRoutes())
    return (
        <Routes>
            <Route path="/" element={<Navigate to={ROUTE_PATHS.FILES} replace />} />
            <Navigate to={ROUTE_PATHS.FILES} replace />
            {routesFromModules}
        </Routes>
        
    )
}