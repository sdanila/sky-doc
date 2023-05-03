import { generatePath } from 'react-router-dom'

export enum ROUTE_PATHS {
    FILES = '/files',
    FILE = '/file/:id',
}

export const ROUTE_URLS = {
    FILES: () => generatePath(ROUTE_PATHS.FILES),
    PROFILE: (id: string) => generatePath(ROUTE_PATHS.FILE, { id }),
}