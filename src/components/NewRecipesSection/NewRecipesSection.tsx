import { Box, IconButton, SimpleGrid, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import ArrowLeftIcon from '~/assets/arrowLeft.svg?react';
import ArrowRightIcon from '~/assets/ArrowRight.svg?react';
import DessertsIcon from '~/assets/deserts.svg?react';
import FirstDishIcon from '~/assets/first_dish.svg?react';
import cutletsImg from '~/assets/images/cutlets.jpg';
import pancakesImg from '~/assets/images/pancakes.jpg';
import saladImg from '~/assets/images/salad.jpg';
import solyankaImg from '~/assets/images/solyanka.jpg';
import SaladIcon from '~/assets/salad.svg?react';
import VeganIcon from '~/assets/vegan.svg?react';

import { RecipeCard } from './RecipeCard';

const recipes = [
    {
        id: uuidv4(),
        image: solyankaImg,
        title: 'Солянка с грибами',
        description: 'Как раз после праздников...',
        category: {
            name: 'Первые блюда',
            icon: FirstDishIcon,
        },
        saves: 1,
    },
    {
        id: uuidv4(),
        image: cutletsImg,
        title: 'Капустные котлеты',
        description: 'Капустные котлеты по этому рецепту...',
        category: {
            name: 'Веганские блюда',
            icon: VeganIcon,
        },
        saves: 2,
        likes: 1,
    },
    {
        id: uuidv4(),
        image: pancakesImg,
        title: 'Оладьи на кефире "Пышные"',
        description: 'Очень вкусные и нежные оладьи...',
        category: {
            name: 'Десерты, выпечка',
            icon: DessertsIcon,
        },
        likes: 3,
    },
    {
        id: uuidv4(),
        image: saladImg,
        title: 'Салат "Здоровье"',
        description: 'Сельдерей очень полезен...',
        category: {
            name: 'Салаты',
            icon: SaladIcon,
        },
        likes: 1,
    },
];

export const NewRecipesSection = () => (
    <Box position='relative' py={6}>
        <Text textStyle='heading48' mb={6}>
            Новые рецепты
        </Text>

        <IconButton
            aria-label='Previous'
            width='48px'
            height='48px'
            icon={<ArrowLeftIcon color='white' width='24px' height='24px' />}
            position='absolute'
            top='54%'
            left='-10px'
            transform='translateY(-50%)'
            bg='black'
            borderRadius='6px'
            _hover={{ bg: 'blackAlpha.800' }}
            zIndex='1'
        />

        <IconButton
            aria-label='Next'
            width='48px'
            height='48px'
            icon={<ArrowRightIcon color='white' width='24px' height='24px' />}
            position='absolute'
            top='54%'
            right='-10px'
            transform='translateY(-50%)'
            bg='black'
            borderRadius='6px'
            _hover={{ bg: 'blackAlpha.800' }}
            zIndex='1'
        />

        <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                    description={recipe.description}
                    category={recipe.category}
                    likes={recipe.likes}
                    saves={recipe.saves}
                />
            ))}
        </SimpleGrid>
    </Box>
);
