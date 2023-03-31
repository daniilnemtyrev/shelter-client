import { MainPage } from 'src/pages/MainPage'
import { NotFoundPage } from 'src/pages/NotFoundPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = '/',
    NOT_FOUND = '*',
}

export const routes: RouteProps[] = [
    {
        path: AppRoutes.MAIN,
        element: <MainPage />,
    },

    {
        path: AppRoutes.NOT_FOUND,
        element: <NotFoundPage />,
    },
]
