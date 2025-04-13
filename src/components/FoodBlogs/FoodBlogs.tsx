import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import ArrowRightIcon from '~/assets/ArrowRightBlack.svg?react';
import avatarImage1 from '~/assets/avatars/Avatar1.jpg';
import avatarImage2 from '~/assets/avatars/Avatar2.jpg';
import avatarImage3 from '~/assets/avatars/Avatar3.jpg';
import { CardsAvatar } from '~/components/FoodBlogs/CardsAvatar';

const blogers = [
    {
        id: uuidv4(),
        firstName: 'Елена',
        lastName: 'Высоцкая',
        nickname: '@elenapovar',
        avatarUrl: avatarImage1,
        message:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: uuidv4(),
        firstName: 'Alex',
        lastName: 'Cook',
        nickname: '@funtasticooking',
        avatarUrl: avatarImage2,
        message:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: uuidv4(),
        firstName: 'Екатерина',
        lastName: 'Константинопольская',
        nickname: '@@bake_and_pie',
        avatarUrl: avatarImage3,
        message:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];

export const FoodBlogs = () => (
    <Box bgColor='lime.300' p={6} borderRadius='16px' mb={10}>
        <Flex justify='space-between' align='center' mb={6}>
            <Text textStyle='heading48'>Кулинарные блоги</Text>
            <Button
                variant='outline'
                bg='transparent'
                border='none'
                _hover={{ bg: 'transparent' }}
                _focus={{ boxShadow: 'none' }}
                rightIcon={<ArrowRightIcon width='16px' height='16px' />}
            >
                Все авторы
            </Button>
        </Flex>

        <Flex gap={4}>
            {blogers.map((bloger) => (
                <Flex
                    direction='column'
                    bgColor='white'
                    borderRadius='8px'
                    px={6}
                    pb={5}
                    pt={6}
                    gap={7}
                >
                    <CardsAvatar
                        key={bloger.id}
                        avatarUrl={bloger.avatarUrl}
                        fullName={`${bloger.firstName} ${bloger.lastName}`}
                        nickname={bloger.nickname}
                    />
                    <Text color='blackAlpha.700' textStyle='body14'>
                        {bloger.message}
                    </Text>
                </Flex>
            ))}
        </Flex>
    </Box>
);
