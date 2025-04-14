import { Button, Flex, SimpleGrid } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import GrillIcon from '~/assets/icons/gril.svg?react';
import HeartIcon from '~/assets/icons/heart.svg?react';
import HeartEyesIcon from '~/assets/icons/heart_eyes.svg?react';
import KidsIcon from '~/assets/icons/kids.svg?react';
import NationalIcon from '~/assets/icons/national.svg?react';
import SecondDishIcon from '~/assets/icons/second_dish.svg?react';
import VeganIcon from '~/assets/icons/vegan.svg?react';
import lasagnaImg from '~/assets/images/lasagna.jpg';
import meatballsImg from '~/assets/images/meatballs.jpg';
import potatoImg from '~/assets/images/potato.jpg';
import potatogarlImg from '~/assets/images/potatogarl.jpg';
import puriImg from '~/assets/images/puri.jpg';
import rollsImg from '~/assets/images/rolls.jpg';
import tomyumImg from '~/assets/images/tomyam.jpg';
import { RecipeSection } from '~/components/Sections/RecipeSection';
import { TopPicksCard } from '~/components/TopPicksSection/TopPicksCard';

const secondDishNew = [
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
    {
        id: uuidv4(),
        image: potatogarlImg,
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        category: {
            name: 'Национальные',
            icon: NationalIcon,
        },
        saves: 124,
        likes: 324,
    },
    {
        id: uuidv4(),
        image: puriImg,
        title: 'Пури',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        category: {
            name: 'Национальные',
            icon: NationalIcon,
        },
        saves: 124,
        likes: 324,
    },
];

const cardsInfo = [
    {
        id: uuidv4(),
        title: 'Бананово-молочное желе',
        description:
            'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
        category: {
            name: 'Детские блюда',
            icon: KidsIcon,
        },
        saves: 1,
        likes: 1,
    },
    {
        id: uuidv4(),
        title: 'Нежный сливочно-сырный крем для кексов',
        description:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
        category: {
            name: 'Детские блюда',
            icon: KidsIcon,
        },
        saves: 2,
        likes: 1,
    },
];

const cookInfo = [
    { id: uuidv4(), icon: KidsIcon, title: 'Домашние сырные палочки' },
    { id: uuidv4(), icon: NationalIcon, title: 'Панкейки' },
    { id: uuidv4(), icon: VeganIcon, title: 'Воздушное банановое печенье на сковороде' },
];

export const SecondDishPage = () => (
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
            sectionTitle='Десерты, выпечка'
            sectionDescription='Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.'
            verticalCards={cardsInfo}
            horizontalCards={cookInfo}
            heartIcon={HeartIcon}
            heartEyesIcon={HeartEyesIcon}
        />
    </>
);
