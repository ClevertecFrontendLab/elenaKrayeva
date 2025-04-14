import { Button, Flex, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import ElenaAvatarImg from '~/assets/avatars/Avatar1.jpg';
import AlexAvatarImg from '~/assets/avatars/Avatar2.jpg';
import ArrowRightBlackIcon from '~/assets/icons/ArrowRightBlack.svg?react';
import NationalIcon from '~/assets/icons/national.svg?react';
import SecondDishIcon from '~/assets/icons/second_dish.svg?react';
import baconImg from '~/assets/images/bacon.jpg';
import kneliImg from '~/assets/images/kneli.jpg';
import noodlesImg from '~/assets/images/noodles.jpg';
import tomyamImg from '~/assets/images/tomyam.jpg';

import { TopPicksCard } from './TopPicksCard';

const topPicks = [
    {
        id: uuidv4(),
        image: kneliImg,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: {
            name: 'Вторые блюда',
            icon: SecondDishIcon,
        },
        saves: 85,
        likes: 152,
    },
    {
        id: uuidv4(),
        image: baconImg,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: {
            name: 'Вторые блюда',
            icon: SecondDishIcon,
        },
        saves: 159,
        likes: 257,
        recommendation: {
            name: 'Елена Высоцкая',
            avatar: ElenaAvatarImg,
        },
    },
    {
        id: uuidv4(),
        image: noodlesImg,
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: {
            name: 'Вторые блюда',
            icon: SecondDishIcon,
        },
        saves: 258,
        likes: 342,
        recommendation: {
            name: 'Alex Cook',
            avatar: AlexAvatarImg,
        },
    },
    {
        id: uuidv4(),
        image: tomyamImg,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: {
            name: 'Национальные',
            icon: NationalIcon,
        },
        saves: 124,
        likes: 324,
    },
];

export const TopPicksSection = () => {
    const titleStyle = useBreakpointValue({
        base: 'heading16',
        sm: 'heading16',
        md: 'heading20',
        lg: 'heading36',
        xl: 'heading48',
    });

    return (
        <>
            <Flex justify='space-between' align='center' mb={6}>
                <Text textStyle={titleStyle}>Самое сочное</Text>
                <Button
                    as={Link}
                    to='/toppicks'
                    rightIcon={<ArrowRightBlackIcon width='16px' height='16px' />}
                    bgColor='lime.400'
                    _hover={{ bg: 'lime.400' }}
                    display={{ base: 'none', lg: 'flex' }}
                >
                    Вся подборка
                </Button>
            </Flex>

            <SimpleGrid
                columns={{ base: 1, sm: 1, md: 2, lg: 1, xl: 2 }}
                spacing={6}
                mb={{ base: 4, lg: 10 }}
            >
                {topPicks.map((topPick) => (
                    <TopPicksCard
                        key={topPick.id}
                        image={topPick.image}
                        title={topPick.title}
                        description={topPick.description}
                        category={topPick.category}
                        likes={topPick.likes}
                        saves={topPick.saves}
                        recommendation={topPick.recommendation}
                    />
                ))}
            </SimpleGrid>

            <Flex justify='center' my={4} display={{ base: 'flex', lg: 'none' }}>
                <Button
                    as={Link}
                    to='/toppicks'
                    rightIcon={<ArrowRightBlackIcon width='16px' height='16px' />}
                    bgColor='lime.400'
                    _hover={{ bg: 'lime.400' }}
                >
                    Вся подборка
                </Button>
            </Flex>
        </>
    );
};
