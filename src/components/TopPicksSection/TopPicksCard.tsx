import { Box, Button, Flex, Image, useBreakpointValue } from '@chakra-ui/react';

import HeartIcon from '~/assets/icons/heart.svg?react';
import HeartEyesIcon from '~/assets/icons/heart_eyes.svg?react';
import { RecipeCategoryBadge } from '~/components/Cards/RecipeCategoryBadge';
import { RecipeTextContent } from '~/components/Cards/RecipeTextContent';
import { Category } from '~/components/Cards/types';
import { RecommendationBadge } from '~/components/RecommendationBadge/RecommendationBadge';

export interface TopPicksCardProps {
    image: string;
    title: string;
    description: string;
    category: Category;
    likes?: number;
    saves?: number;
    recommendation?: {
        name?: string;
        avatar?: string;
    };
}

export const TopPicksCard = ({
    image,
    title,
    description,
    category,
    likes,
    saves,
    recommendation,
}: TopPicksCardProps) => {
    const isCompact = useBreakpointValue({ base: true, md: true, lg: false });

    return (
        <Flex
            border='1px solid'
            borderColor='blackAlpha.200'
            borderRadius='lg'
            overflow='hidden'
            boxShadow='sm'
            bg='white'
        >
            <Box
                position='relative'
                width={{ base: '158px', md: '158px', lg: '346px' }}
                height={{ base: '128px', md: '128px', lg: '244px' }}
                flexShrink={0}
            >
                <Image src={image} alt={title} width='100%' height='100%' objectFit='cover' />

                {recommendation?.name && (
                    <Box display={{ base: 'none', md: 'none', lg: 'block' }}>
                        <RecommendationBadge
                            name={recommendation.name}
                            avatar={recommendation.avatar}
                        />
                    </Box>
                )}
            </Box>

            <Flex
                direction='column'
                pl={{ base: '8px', md: '8px', lg: '24px' }}
                pt={{ base: '8px', md: '8px', lg: '20px' }}
                pr={{ base: '8px', md: '8px', lg: '24px' }}
                pb={{ base: '4px', md: '4px', lg: '20px' }}
                gap={{ base: 0, md: 0, lg: 6 }}
            >
                <RecipeCategoryBadge
                    category={category}
                    saves={saves}
                    likes={likes}
                    HeartIcon={HeartIcon}
                    HeartEyesIcon={HeartEyesIcon}
                    badgeBgColor='lime.50'
                />

                <RecipeTextContent title={title} description={description} />

                <Flex justifyContent='flex-end' gap={2} align='center' pr={2}>
                    <Button
                        variant='outline'
                        borderColor='blackAlpha.800'
                        color='blackAlpha.800'
                        bg='white'
                        fontWeight='semiBold'
                        lineHeight='20px'
                        fontSize='14px'
                        height={isCompact ? '24px' : '32px'}
                        minW={isCompact ? '24px' : 'auto'}
                        px={isCompact ? 0 : 3}
                        _hover={{ bg: 'white' }}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        {isCompact ? (
                            <HeartIcon width='14px' height='14px' />
                        ) : (
                            <>
                                <HeartIcon
                                    width='14px'
                                    height='14px'
                                    style={{ marginRight: '8px' }}
                                />
                                Сохранить
                            </>
                        )}
                    </Button>

                    <Button
                        bg='black'
                        color='white'
                        _hover={{ bg: 'blackAlpha.800' }}
                        fontWeight='semiBold'
                        lineHeight='20px'
                        fontSize='14px'
                        height='32px'
                        width='70px'
                    >
                        Готовить
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};
