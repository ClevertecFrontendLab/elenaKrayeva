import { Box, Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import avatarImage1 from '~/assets/avatars/Avatar1.jpg';
import avatarImage2 from '~/assets/avatars/Avatar2.jpg';
import avatarImage3 from '~/assets/avatars/Avatar3.jpg';
import ArrowRightIcon from '~/assets/icons/ArrowRightBlack.svg?react';
import { FoodBlogCard } from '~/components/FoodBlogs/FoodBlogCard';

const blogers = [
    {
        id: uuidv4(),
        firstName: 'Елена',
        lastName: 'Высоцкая',
        nickname: '@elenapovar',
        avatarUrl: avatarImage1,
        message:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку',
    },
    {
        id: uuidv4(),
        firstName: 'Alex',
        lastName: 'Cook',
        nickname: '@funtasticooking',
        avatarUrl: avatarImage2,
        message:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку',
    },
    {
        id: uuidv4(),
        firstName: 'Екатерина',
        lastName: 'Константинопольская',
        nickname: '@bake_and_pie',
        avatarUrl: avatarImage3,
        message:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку',
    },
];

export const FoodBlogs = () => {
    const headingStyle = useBreakpointValue({
        base: 'heading48',
        lg: 'heading30',
    });

    const isClamped = useBreakpointValue({
        base: true,
        md: true,
        lg: true,
        xl: false,
    });

    const showTopButton = useBreakpointValue({
        base: false,
        md: false,
        lg: true,
    });

    return (
        <Box bgColor='lime.300' p={6} borderRadius='16px' mb={10}>
            <Flex justify='space-between' align='center' mb={6}>
                <Text textStyle={headingStyle}>Кулинарные блоги</Text>
                {showTopButton && (
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
                )}
            </Flex>

            <Flex gap={{ base: 3, md: 3, lg: 4 }} flexWrap='wrap'>
                {blogers.map((bloger) => (
                    <FoodBlogCard
                        key={bloger.id}
                        avatarUrl={bloger.avatarUrl}
                        fullName={`${bloger.firstName} ${bloger.lastName}`}
                        nickname={bloger.nickname}
                        message={bloger.message}
                        isClamped={!!isClamped}
                    />
                ))}
            </Flex>

            {!showTopButton && (
                <Flex justify='center' mt={6}>
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
            )}
        </Box>
    );
};
