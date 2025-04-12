import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';

import HeartIcon from '~/assets/heart.svg?react';
import HeartEyesIcon from '~/assets/heart_eyes.svg?react';
import { Category } from '~/components/NewRecipesSection/types';

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

        <Box px={6} pt={4} pb={5}>
            <Text textStyle='heading20' mb={2} isTruncated title={title}>
                {title}
            </Text>
            <Text textStyle='body14' color='blackAlpha.700' noOfLines={3} mb={7}>
                {description}
            </Text>

            <Flex justify='space-between' align='center' mt='auto' color='blackAlpha.600'>
                <Flex
                    align='center'
                    gap={2}
                    bgColor='lime.150'
                    px={2}
                    borderRadius={4}
                    py='2px'
                    color='black'
                >
                    <Icon as={category.icon} boxSize={4} />
                    <Text fontSize='sm'>{category.name}</Text>
                </Flex>
                <Flex gap={2}>
                    {saves && (
                        <Flex align='center' gap='6px'>
                            <Icon as={HeartIcon} width='12px' height='12px' />
                            <Text textStyle='body14'>{saves}</Text>
                        </Flex>
                    )}
                    {likes && (
                        <Flex align='center' gap='6px'>
                            <Icon as={HeartEyesIcon} width='12px' height='12px' />
                            <Text textStyle='body14'>{likes}</Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Box>
    </Box>
);
