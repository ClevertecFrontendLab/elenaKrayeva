import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { ExploreSection } from '~/components/ExploreSection/ExploreSection';

export const VeganCuisinePage = () => (
    <Flex direction='column'>
        <ExploreSection
            headingTitle='Веганская кухня'
            headingDescription='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.'
        />
        <Outlet />
    </Flex>
);
