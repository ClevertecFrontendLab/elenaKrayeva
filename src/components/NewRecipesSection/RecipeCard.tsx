import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';

import HeartIcon from '~/assets/icons/heart.svg?react';
import HeartEyesIcon from '~/assets/icons/heart_eyes.svg?react';
import { RecipeCategoryBadge } from '~/components/Cards/RecipeCategoryBadge';
import { RecipeTextContent } from '~/components/Cards/RecipeTextContent';
import { Category } from '~/components/Cards/types';

export interface RecipeCardProps {
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
    <Box
        width={{ base: '158px', sm: '158px', md: '158px', lg: '277px', xl: '322px' }}
        flexShrink={0}
        borderRadius='lg'
        border='1px solid'
        borderColor='blackAlpha.200'
        overflow='hidden'
        bg='white'
    >
        <Box position='relative'>
            <Image
                src={image}
                alt={title}
                height={{ base: '128px', sm: '128px', md: '128px', lg: '230px', xl: '230px' }}
                width={{ base: '158px', sm: '158px', md: '158px', lg: '277px', xl: '322px' }}
                objectFit='cover'
            />

            <Flex
                position='absolute'
                justifyContent='flex-start'
                top='8px'
                left='8px'
                display={{ base: 'flex', md: 'flex', lg: 'none' }}
                bg='lime.150'
                px={2}
                py='2px'
                borderRadius={4}
                align='center'
                gap='2px'
                width='95%'
                height='24px'
                isTruncated
            >
                <Icon as={category.icon} width='16px' height='16px' />
                <Text textStyle='body14' color='black'>
                    {category.name}
                </Text>
            </Flex>
        </Box>

        <Flex
            direction='column'
            gap={4}
            px={{ base: '8px', md: '8px', lg: '12px', xl: '32px' }}
            pt={{ base: '8px', md: '8px', lg: '12px', xl: '12px' }}
            pb={{ base: '4px', md: '4px', lg: '12px', xl: '16px' }}
        >
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
