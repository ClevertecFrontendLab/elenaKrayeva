import { Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import ArrowRightBlackIcon from '~/assets/ArrowRightBlack.svg?react';
import baconImg from '~/assets/images/bacon.jpg';
import kneliImg from '~/assets/images/kneli.jpg';
import noodlesImg from '~/assets/images/noodles.jpg';
import tomyamImg from '~/assets/images/tomyam.jpg';
import NationalIcon from '~/assets/national.svg?react';
import SecondDishIcon from '~/assets/second_dish.svg?react';

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
        saves: 1,
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
        saves: 2,
        likes: 1,
    },
    {
        id: uuidv4(),
        image: noodlesImg,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        category: {
            name: 'Вторые блюда',
            icon: SecondDishIcon,
        },
        likes: 3,
    },
    {
        id: uuidv4(),
        image: tomyamImg,
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        category: {
            name: 'Салаты',
            icon: NationalIcon,
        },
        likes: 1,
    },
];

export const TopPicksSection = () => (
    <>
        <Flex justify='space-between' align='center' mb={6}>
            <Text textStyle='heading48'>Самое сочное</Text>
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
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={10}>
            {topPicks.map((topPick) => (
                <TopPicksCard
                    key={topPick.id}
                    image={topPick.image}
                    title={topPick.title}
                    description={topPick.description}
                    category={topPick.category}
                    likes={topPick.likes}
                    saves={topPick.saves}
                />
            ))}
        </SimpleGrid>
    </>
);
