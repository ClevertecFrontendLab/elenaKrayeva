import { Flex } from '@chakra-ui/react';

import { RecipeCategoryBadge } from './RecipeCategoryBadge';
import { RecipeTextContent } from './RecipeTextContent';
import { Category } from './types';

interface VerticalRecipeCardProps {
    title: string;
    description: string;
    category: Category;
    saves?: number;
    likes?: number;
    HeartIcon: React.ElementType;
    HeartEyesIcon: React.ElementType;
}

export const VerticalRecipeCard = ({
    title,
    description,
    category,
    saves,
    likes,
    HeartIcon,
    HeartEyesIcon,
}: VerticalRecipeCardProps) => (
    <Flex
        direction='column'
        gap={4}
        width={{ base: '100%', md: 'calc((100% - 24px) / 2)', lg: '322px' }}
        px={{ base: 3, md: 3, lg: 4, xl: 6 }}
        pt={{ base: 3, md: 3, lg: 4, xl: 6 }}
        pb={{ base: 3, md: 3, lg: 4, xl: 5 }}
        border='1px solid'
        borderColor='blackAlpha.200'
        borderRadius='8px'
    >
        <RecipeTextContent
            title={title}
            description={description}
            alwaysShowDescription
            fullWidth
        />
        <RecipeCategoryBadge
            category={category}
            HeartIcon={HeartIcon}
            HeartEyesIcon={HeartEyesIcon}
            saves={saves}
            likes={likes}
            badgeBgColor='lime.50'
            alwaysShowBadge
            forceSpaceBetween
        />
    </Flex>
);
