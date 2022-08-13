import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MasterPage } from './layout'
import {
    HomePage, ScannerPage, ConfirmPage, CongratsPage, FinderPage, ErrorPage, PrintedPage 
} from './pages'
import paths from './paths'


export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MasterPage />}>
                <Route path={paths.scanner} element={<ScannerPage />} />
                <Route path={paths.finder} element={<FinderPage />} />
                <Route path={paths.confirm} element={<ConfirmPage />} />
                <Route path={paths.congrats} element={<CongratsPage />} />
                <Route path={paths.error} element={<ErrorPage />} />
                <Route path={paths.printed} element={<PrintedPage />} />
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    )
}