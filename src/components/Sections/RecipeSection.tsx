import { Box, Flex, Text } from '@chakra-ui/react';

import { HorizontalRecipeCard } from '~/components/Cards/HorizontalRecipeCard';
import { VerticalRecipeCard } from '~/components/Cards/VerticalRecipeCard';
import { RecipeSectionProps } from '~/components/Sections/type';

export const RecipeSection = ({
    sectionTitle,
    sectionDescription,
    verticalCards,
    horizontalCards,
    heartIcon,
    heartEyesIcon,
}: RecipeSectionProps) => (
    <Flex direction='column' gap={6} mb={10}>
        <Flex justify='space-between' gap={3} pt={6}>
            <Box flex='1'>
                <Text textStyle='heading48'>{sectionTitle}</Text>
            </Box>
            <Box width='668px' pl={3}>
                <Text>{sectionDescription}</Text>
            </Box>
        </Flex>
        <Flex gap={8}>
            <Flex flex='1' gap={6}>
                {verticalCards.map((card) => (
                    <VerticalRecipeCard
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        category={{
                            name: card.category.name,
                            icon: card.category.icon as React.FC<React.SVGProps<SVGSVGElement>>,
                        }}
                        saves={card.saves}
                        likes={card.likes}
                        HeartIcon={heartIcon}
                        HeartEyesIcon={heartEyesIcon}
                    />
                ))}
            </Flex>
            <Flex direction='column' flex='1' gap={3}>
                {horizontalCards.map((card) => (
                    <HorizontalRecipeCard
                        key={card.id}
                        icon={card.icon}
                        title={card.title}
                        buttonText={card.buttonText || 'Готовить'}
                        onClick={card.onButtonClick}
                    />
                ))}
            </Flex>
        </Flex>
    </Flex>
);
