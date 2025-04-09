import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import avatarImage from '~/assets/avatar.png';

export const UserInfo = () => {
    const user = {
        firstName: 'Екатерина',
        lastName: 'Константинопольская',
        nickname: '@bake_and_pie',
        avatarUrl: avatarImage,
    };

    return (
        <Flex align='center' gap={3}>
            <Avatar name={`${user.firstName} ${user.lastName}`} src={user.avatarUrl} size='md' />
            <Box>
                <Text textStyle='userName'>
                    {user.firstName} {user.lastName}
                </Text>
                <Text textStyle='userNickname'>{user.nickname}</Text>
            </Box>
        </Flex>
    );
};
