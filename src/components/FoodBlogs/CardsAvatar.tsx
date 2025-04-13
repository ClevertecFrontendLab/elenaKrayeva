import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface CardsAvatarProps {
    avatarUrl: string;
    fullName: string;
    nickname: string;
}

export const CardsAvatar = ({ avatarUrl, fullName, nickname }: CardsAvatarProps) => (
    <Flex align='center' gap={3}>
        <Avatar name={fullName} src={avatarUrl} size='md' />
        <Box>
            <Text textStyle='userName'>{fullName}</Text>
            <Text textStyle='userNickname'>{nickname}</Text>
        </Box>
    </Flex>
);
