import { Box, Flex, Image } from '@chakra-ui/react';

import HeartIcon from '~/assets/heart.svg?react';
import HeartEyesIcon from '~/assets/heart_eyes.svg?react';
import { RecipeCategoryBadge } from '~/components/Cards/RecipeCategoryBadge';
import { RecipeTextContent } from '~/components/Cards/RecipeTextContent';
import { Category } from '~/components/Cards/types';

interface RecipeCardProps {
    image: string;
    title: string;
    description: string;
    category: Category;
    likes?: number;
    saves?: number;
}

export const RecipeCard = ({
    image,
    title,
    description,
    category,
    likes,
    saves,
}: RecipeCardProps) => (
    <Box borderRadius='lg' overflow='hidden' boxShadow='sm' bg='white'>
        <Image src={image} alt={title} width='100%' height='230px' objectFit='cover' />

        <Flex direction='column' gap={6} px={6} pt={4} pb={5}>
            <RecipeTextContent title={title} description={description} />
            <RecipeCategoryBadge
                category={category}
                saves={saves}
                likes={likes}
                HeartIcon={HeartIcon}
                HeartEyesIcon={HeartEyesIcon}
            />
        </Flex>
    </Box>
);
