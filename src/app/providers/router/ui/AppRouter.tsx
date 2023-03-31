import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../config/routerConfig'

export function AppRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    )
}
