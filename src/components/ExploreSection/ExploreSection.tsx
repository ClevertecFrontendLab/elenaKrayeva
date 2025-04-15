import { Box, Flex, Text } from '@chakra-ui/react';

import { AllergenFilterControls } from '~/components/ExploreSection/AllergenFilterControls';
import { ExploreHeading } from '~/components/ExploreSection/ExploreHeading';
import { RecipeSearchBar } from '~/components/ExploreSection/RecipeSearchBar';

interface ExploreSectionProps {
    headingTitle: string;
    headingDescription?: string;
}

export const ExploreSection = ({ headingTitle, headingDescription }: ExploreSectionProps) => (
    <Flex justify='center'>
        <Flex justify='center' direction='column' gap={8} py={8}>
            <ExploreHeading title={headingTitle} />
            {headingDescription && (
                <Box textAlign='center' maxWidth='696px'>
                    <Text textStyle='body16' color='blackAlpha.700'>
                        {headingDescription}
                    </Text>
                </Box>
            )}
            <Flex direction='column' gap={4} maxWidth='518px' alignSelf='center'>
                <RecipeSearchBar />
                <Box display={{ base: 'none', lg: 'block' }}>
                    <AllergenFilterControls />
                </Box>
            </Flex>
        </Flex>
    </Flex>
);
