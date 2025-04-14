import { Avatar, Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

interface CardsAvatarProps {
    avatarUrl: string;
    fullName: string;
    nickname: string;
}

export const CardsAvatar = ({ avatarUrl, fullName, nickname }: CardsAvatarProps) => {
    const fullNameTextStyle = useBreakpointValue({
        base: 'heading16',
        md: 'heading16',
        lg: 'userName',
    });

    return (
        <Flex align='center' gap={3}>
            <Avatar
                name={fullName}
                src={avatarUrl}
                width={{ base: '32px', md: '32px', lg: '48px' }}
                height={{ base: '32px', md: '32px', lg: '48px' }}
                fontSize={{ base: '14px', md: '14px', lg: '18px' }}
            />
            <Box maxW={{ base: '140px', md: '140px', lg: '160px' }} overflow='hidden'>
                <Text isTruncated textStyle={fullNameTextStyle}>
                    {fullName}
                </Text>
                <Text textStyle='userNickname'>{nickname}</Text>
            </Box>
        </Flex>
    );
};
