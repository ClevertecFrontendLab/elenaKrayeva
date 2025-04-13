import { Box, Button, Flex, Image } from '@chakra-ui/react';

import HeartIcon from '~/assets/heart.svg?react';
import HeartEyesIcon from '~/assets/heart_eyes.svg?react';
import { RecipeCategoryBadge } from '~/components/Cards/RecipeCategoryBadge';
import { RecipeTextContent } from '~/components/Cards/RecipeTextContent';
import { Category } from '~/components/Cards/types';
import { RecommendationBadge } from '~/components/RecommendationBadge/RecommendationBadge';

export interface TopPicksCardProps {
    image: string;
    title: string;
    description: string;
    category: Category;
    likes?: number;
    saves?: number;
    recommendation?: {
        name?: string;
        avatar?: string;
    };
}

export const TopPicksCard = ({
    image,
    title,
    description,
    category,
    likes,
    saves,
    recommendation,
}: TopPicksCardProps) => (
    <Flex
        border='1px solid'
        borderColor='blackAlpha.200'
        borderRadius='lg'
        overflow='hidden'
        boxShadow='sm'
        bg='white'
    >
        <Box position='relative'>
            <Image src={image} alt={title} width='346px' height='244px' objectFit='cover' />
            {recommendation?.name && (
                <RecommendationBadge name={recommendation.name} avatar={recommendation.avatar} />
            )}
        </Box>

        <Flex direction='column' px={6} pt={4} pb={5} gap={6}>
            <RecipeCategoryBadge
                category={category}
                saves={saves}
                likes={likes}
                HeartIcon={HeartIcon}
                HeartEyesIcon={HeartEyesIcon}
                badgeBgColor='lime.50'
            />
            <RecipeTextContent title={title} description={description} />
            <Flex justifyContent='flex-end' gap={2}>
                <Button
                    leftIcon={<HeartIcon width='14px' height='14px' />}
                    variant='outline'
                    borderColor='blackAlpha.800'
                    color='blackAlpha.800'
                    bg='white'
                    fontWeight='semiBold'
                    lineHeight='20px'
                    fontSize='14px'
                    height='32px'
                    _hover={{ bg: 'white' }}
                >
                    Сохранить
                </Button>
                <Button
                    bg='black'
                    color='white'
                    _hover={{ bg: 'blackAlpha.800' }}
                    fontWeight='semiBold'
                    lineHeight='20px'
                    fontSize='14px'
                    height='32px'
                >
                    Готовить
                </Button>
            </Flex>
        </Flex>
    </Flex>
);
