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
        <Flex justify='space-between' gap={3} pt={6} flexWrap='wrap'>
            <Box
                flexShrink={1}
                flexBasis={{ base: '100%', md: '100%', lg: '50%' }}
                mb={{ base: 4, md: 4, lg: 0 }}
            >
                <Text textStyle='heading48'>{sectionTitle}</Text>
            </Box>
            <Box flexShrink={0} width={{ base: '100%', md: '100%', lg: '668px' }}>
                <Text>{sectionDescription}</Text>
            </Box>
        </Flex>

        <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 3, lg: 6 }}>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 3, lg: 6 }}
                width={{
                    base: '100%',
                    md: '476px',
                    lg: '580px',
                    xl: '668px',
                }}
            >
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

            <Flex
                direction='column'
                gap={3}
                width={{
                    base: '100%',
                    md: '240px',
                    lg: '282px',
                    xl: '668px',
                }}
            >
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
