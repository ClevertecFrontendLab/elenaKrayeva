import { Flex } from '@chakra-ui/react';

import { AllergenFilterControls } from '~/components/ExploreSection/AllergenFilterControls';
import { ExploreHeading } from '~/components/ExploreSection/ExploreHeading';
import { RecipeSearchBar } from '~/components/ExploreSection/RecipeSearchBar';

export const ExploreSection = () => (
    <Flex justify='center'>
        <Flex justify='center' direction='column' gap={8} py={8}>
            <ExploreHeading />
            <Flex direction='column' gap={4}>
                <RecipeSearchBar />
                <AllergenFilterControls />
            </Flex>
        </Flex>
    </Flex>
);
