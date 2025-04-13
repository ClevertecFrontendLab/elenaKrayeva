import { Box } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import FirstDishIcon from '~/assets/first_dish.svg?react';
import HeartIcon from '~/assets/heart.svg?react';
import HeartEyesIcon from '~/assets/heart_eyes.svg?react';
import SecondDishIcon from '~/assets/second_dish.svg?react';
import { RecipeSection } from '~/components/Sections/RecipeSection';

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

export const VeganCuisine = () => (
    <Box borderTop='1px solid' borderColor='blackAlpha.200'>
        <RecipeSection
            sectionTitle='Веганская кухня'
            sectionDescription='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.'
            verticalCards={cardsInfo}
            horizontalCards={cookInfo}
            heartIcon={HeartIcon}
            heartEyesIcon={HeartEyesIcon}
        />
    </Box>
);
