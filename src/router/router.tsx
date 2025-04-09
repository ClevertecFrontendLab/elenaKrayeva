import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '~/components/AppLayout/AppLayout';
import { ErrorPage } from '~/pages/ErrorPage/ErrorPage';
import { HomePage } from '~/pages/HomePage/HomePage';
import { TopPicksPage } from '~/pages/TopPicksPage/TopPicksPage';
import { VeganCuisinePage } from '~/pages/VeganCuisinePage/VeganCuisinePage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'vegan/:section?',
                element: <VeganCuisinePage />,
            },
            {
                path: 'toppicks',
                element: <TopPicksPage />,
            },
        ],
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);
