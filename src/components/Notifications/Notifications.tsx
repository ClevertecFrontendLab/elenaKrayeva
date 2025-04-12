import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import HeartIcon from '~/assets/heart.svg?react';
import HeartEyesIcon from '~/assets/heart_eyes.svg?react';
import PeopleIcon from '~/assets/people.svg?react';

import { WriteButton } from '../WriteButton/WriteButton';

const notifications = [
    { icon: HeartIcon, count: 185 },
    { icon: PeopleIcon, count: 589 },
    { icon: HeartEyesIcon, count: 587 },
];

export const Notifications = () => (
    <Flex direction='column' height='100%' pt={3}>
        <Flex direction='column' alignItems='center' gap={10} flex='1' pt={3} pl={6}>
            {notifications.map(({ icon, count }, index) => (
                <Flex key={index} justifyContent='space-between' alignItems='center' gap={2}>
                    <Box display='flex' alignItems='center'>
                        <Icon as={icon} />
                    </Box>
                    <Box>
                        <Text color='lime.600' textStyle='body16SemiBold'>
                            {count}
                        </Text>
                    </Box>
                </Flex>
            ))}
        </Flex>
        <WriteButton />
    </Flex>
);
