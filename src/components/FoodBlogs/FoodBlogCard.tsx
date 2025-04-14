import { Flex, Text } from '@chakra-ui/react';

import { CardsAvatar } from '~/components/FoodBlogs/CardsAvatar';

interface FoodBlogCardProps {
    avatarUrl: string;
    fullName: string;
    nickname: string;
    message: string;
    isClamped: boolean;
}

export const FoodBlogCard = ({
    avatarUrl,
    fullName,
    nickname,
    message,
    isClamped,
}: FoodBlogCardProps) => (
    <Flex
        direction='column'
        bgColor='white'
        borderRadius='8px'
        pt={{ base: '16px', md: '16px', xl: '24px' }}
        pl={{ base: '16px', md: '16px', xl: '24px' }}
        pr={{ base: '16px', md: '16px', xl: '24px' }}
        pb={{ base: '16px', md: '16px', xl: '20px' }}
        gap={7}
        width={{
            base: '100%',
            md: 'calc((100% - 2 * 16px) / 3)',
            lg: 'calc((100% - 2 * 24px) / 3)',
        }}
    >
        <CardsAvatar avatarUrl={avatarUrl} fullName={fullName} nickname={nickname} />
        <Text
            textStyle='body14'
            sx={
                isClamped
                    ? {
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                      }
                    : {}
            }
        >
            {message}
        </Text>
    </Flex>
);
