import { Button, Flex, SimpleGrid } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import FirstDishIcon from '~/assets/first_dish.svg?react';
import GrillIcon from '~/assets/gril.svg?react';
import HeartIcon from '~/assets/heart.svg?react';
import HeartEyesIcon from '~/assets/heart_eyes.svg?react';
import baconImg from '~/assets/images/bacon.jpg';
import kneliImg from '~/assets/images/kneli.jpg';
import lasagnaImg from '~/assets/images/lasagna.jpg';
import meatballsImg from '~/assets/images/meatballs.jpg';
import noodlesImg from '~/assets/images/noodles.jpg';
import potatoImg from '~/assets/images/potato.jpg';
import rollsImg from '~/assets/images/rolls.jpg';
import tomyumImg from '~/assets/images/tomyam.jpg';
import KidsIcon from '~/assets/kids.svg?react';
import NationalIcon from '~/assets/national.svg?react';
import SecondDishIcon from '~/assets/second_dish.svg?react';
import { ExploreSection } from '~/components/ExploreSection/ExploreSection';
import { RecipeSection } from '~/components/Sections/RecipeSection';
import { TopPicksCard } from '~/components/TopPicksSection/TopPicksCard';

const secondDishNew = [
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
    },
    {
        id: uuidv4(),
        image: tomyumImg,
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
    },
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
        saves: 124,
        likes: 231,
    },
    {
        id: uuidv4(),
        image: potatoImg,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        category: {
            name: 'Национальные',
            icon: NationalIcon,
        },
        saves: 85,
        likes: 152,
    },
    {
        id: uuidv4(),
        image: rollsImg,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        category: {
            name: 'Детские блюда',
            icon: KidsIcon,
        },
        saves: 85,
        likes: 152,
    },

    {
        id: uuidv4(),
        image: lasagnaImg,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        category: {
            name: 'Блюда на гриле',
            icon: GrillIcon,
        },
        saves: 85,
        likes: 152,
    },
    {
        id: uuidv4(),
        image: meatballsImg,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        category: {
            name: 'Вторые блюда',
            icon: SecondDishIcon,
        },
        saves: 85,
        likes: 152,
    },
];

const cardsInfo = [
    {
        id: uuidv4(),
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        category: {
            name: 'Вторые блюда',
            icon: SecondDishIcon,
        },
        saves: 1,
        likes: 1,
    },
    {
        id: uuidv4(),
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        category: {
            name: 'Вторые блюда',
            icon: SecondDishIcon,
        },
        saves: 2,
        likes: 1,
    },
];

const cookInfo = [
    { id: uuidv4(), icon: SecondDishIcon, title: 'Стейк для вегетарианцев' },
    { id: uuidv4(), icon: SecondDishIcon, title: 'Котлеты из гречки и фасоли' },
    { id: uuidv4(), icon: FirstDishIcon, title: 'Сырный суп с лапшой и брокколи' },
];

export const TopPicksPage = () => (
    <>
        <ExploreSection headingTitle='Самое сочное' />
        <>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={4}>
                {secondDishNew.map((dish) => (
                    <TopPicksCard
                        key={dish.id}
                        image={dish.image}
                        title={dish.title}
                        description={dish.description}
                        category={dish.category}
                        likes={dish.likes}
                        saves={dish.saves}
                    />
                ))}
            </SimpleGrid>
            <Flex justify='center' mb={10}>
                <Button
                    bg='lime.400'
                    color='black'
                    fontWeight='semibold'
                    height='40px'
                    _hover={{ bg: 'lime.100' }}
                >
                    Загрузить еще
                </Button>
            </Flex>
            <RecipeSection
                sectionTitle='Веганская кухня'
                sectionDescription='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                verticalCards={cardsInfo}
                horizontalCards={cookInfo}
                heartIcon={HeartIcon}
                heartEyesIcon={HeartEyesIcon}
            />
        </>
    </>
);
