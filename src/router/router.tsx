import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '~/components/AppLayout/AppLayout';
import { ErrorPage } from '~/pages/ErrorPage/ErrorPage';
import { HomePage } from '~/pages/HomePage/HomePage';
import { TopPicksPage } from '~/pages/TopPicksPage/TopPicksPage';
import { FirstDishPage } from '~/pages/VeganCuisinePage/FirstDishPage/FirstDishPage';
import { SecondDishPage } from '~/pages/VeganCuisinePage/SecondDish/SecondDishPage';
import { SnacksPage } from '~/pages/VeganCuisinePage/SnacksPage/SnacksPage';
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
                path: 'vegan',
                element: <VeganCuisinePage />,
                children: [
                    {
                        index: true,
                        element: <SnacksPage />,
                    },
                    {
                        path: 'snacks',
                        element: <SnacksPage />,
                    },
                    {
                        path: 'first',
                        element: <FirstDishPage />,
                    },
                    {
                        path: 'second',
                        element: <SecondDishPage />,
                    },
                ],
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
