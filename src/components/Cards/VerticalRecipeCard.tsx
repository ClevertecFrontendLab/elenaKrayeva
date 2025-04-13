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
        width='322px'
        px={6}
        pt={6}
        pb={5}
        border='1px solid'
        borderColor='blackAlpha.200'
        borderRadius='8px'
    >
        <RecipeTextContent title={title} description={description} />
        <RecipeCategoryBadge
            category={category}
            HeartIcon={HeartIcon}
            HeartEyesIcon={HeartEyesIcon}
            saves={saves}
            likes={likes}
            badgeBgColor='lime.50'
        />
    </Flex>
);
