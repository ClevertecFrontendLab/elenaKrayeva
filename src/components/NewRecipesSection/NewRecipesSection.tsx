import { Box, Flex, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import ArrowLeftIcon from '~/assets/icons/arrowLeft.svg?react';
import ArrowRightIcon from '~/assets/icons/ArrowRight.svg?react';
import DessertsIcon from '~/assets/icons/deserts.svg?react';
import FirstDishIcon from '~/assets/icons/first_dish.svg?react';
import SaladIcon from '~/assets/icons/salad.svg?react';
import VeganIcon from '~/assets/icons/vegan.svg?react';
import cutletsImg from '~/assets/images/cutlets.jpg';
import pancakesImg from '~/assets/images/pancakes.jpg';
import saladImg from '~/assets/images/salad.jpg';
import solyankaImg from '~/assets/images/solyanka.jpg';

import { RecipeCard } from './RecipeCard';

const recipes = [
    {
        id: uuidv4(),
        image: solyankaImg,
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
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
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
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
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
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
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        category: {
            name: 'Салаты',
            icon: SaladIcon,
        },
        likes: 1,
    },
    {
        id: uuidv4(),
        image: saladImg,
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        category: {
            name: 'Салаты',
            icon: SaladIcon,
        },
        likes: 1,
    },
];

export const NewRecipesSection = () => {
    const textStyle = useBreakpointValue({
        base: 'heading24',
        sm: 'heading24',
        md: 'heading24',
        lg: 'heading36',
        xl: 'heading48',
    });
    return (
        <Box position='relative' py={6}>
            <Text textStyle={textStyle} mb={6}>
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
                display={{ base: 'none', lg: 'flex' }}
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
                display={{ base: 'none', lg: 'flex' }}
            />

            <Flex
                gap={{ base: '12px', sm: '12px', md: '12px', lg: '12 px', xl: '24px' }}
                maxWidth={{ base: '360px', sm: '768px', md: '880px', lg: '1360px', xl: '1920px' }}
                overflow='hidden'
            >
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
            </Flex>
        </Box>
    );
};
