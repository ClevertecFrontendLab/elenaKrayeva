import { v4 as uuidv4 } from 'uuid';

import BlanksIcon from '~/assets/blanks.svg?react';
import DesertsIcon from '~/assets/deserts.svg?react';
import DrinksIcon from '~/assets/drinks.svg?react';
import FirstDishIcon from '~/assets/first_dish.svg?react';
import GrilIcon from '~/assets/gril.svg?react';
import HealthyIcon from '~/assets/healthy.svg?react';
import KidsIcon from '~/assets/kids.svg?react';
import NationalIcon from '~/assets/national.svg?react';
import SaladIcon from '~/assets/salad.svg?react';
import SaucesIcon from '~/assets/sauces.svg?react';
import SecondDishIcon from '~/assets/second_dish.svg?react';
import SnackIcon from '~/assets/snack.svg?react';
import VeganIcon from '~/assets/vegan.svg?react';

import { MenuItem } from './types';

export const menuItems: MenuItem[] = [
    {
        id: uuidv4(),
        label: 'Салаты',
        icon: SaladIcon,
        path: '/vegan',
    },
    {
        id: uuidv4(),
        label: 'Закуски',
        icon: SnackIcon,
        path: '/vegan',
    },
    {
        id: uuidv4(),
        label: 'Первые блюда',
        icon: FirstDishIcon,
        path: '/vegan',
    },
    {
        id: uuidv4(),
        label: 'Вторые блюда',
        icon: SecondDishIcon,
        path: '/vegan',
    },
    {
        id: uuidv4(),
        label: 'Десерты, выпечка',
        icon: DesertsIcon,
        path: '/vegan',
    },
    {
        id: uuidv4(),
        label: 'Блюда на гриле',
        icon: GrilIcon,
        path: '/vegan',
    },
    {
        id: uuidv4(),
        label: 'Веганская кухня',
        icon: VeganIcon,
        path: '/vegan',
        children: [
            { id: uuidv4(), label: 'Закуски', path: 'snacks' },
            { id: uuidv4(), label: 'Первые блюда', path: 'first' },
            { id: uuidv4(), label: 'Вторые блюда', path: 'second' },
            { id: uuidv4(), label: 'Гарниры', path: 'sides' },
            { id: uuidv4(), label: 'Десерты', path: 'desserts' },
            { id: uuidv4(), label: 'Выпечка', path: 'bakery' },
            { id: uuidv4(), label: 'Сыроедческие блюда', path: 'raw' },
            { id: uuidv4(), label: 'Напитки', path: 'drinks' },
        ],
    },
    {
        id: uuidv4(),
        label: 'Детские блюда',
        icon: KidsIcon,
        path: '/vegan',
    },
    {
        id: uuidv4(),
        label: 'Лечебной питание',
        icon: HealthyIcon,
        path: '/vegan',
    },
    {
        id: uuidv4(),
        label: 'Национальные',
        icon: NationalIcon,
        path: '/vegan',
    },
    {
        id: uuidv4(),
        label: 'Соусы',
        icon: SaucesIcon,
        path: '/vegan',
    },
    {
        id: uuidv4(),
        label: 'Напитки',
        icon: DrinksIcon,
        path: '/vegan',
    },
    {
        id: uuidv4(),
        label: 'Заготовки',
        icon: BlanksIcon,
        path: '/vegan',
    },
];
