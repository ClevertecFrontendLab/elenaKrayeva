import { Flex, Icon, Text } from '@chakra-ui/react';

import HeartIcon from '~/assets/icons/heart.svg?react';
import HeartEyesIcon from '~/assets/icons/heart_eyes.svg?react';
import PeopleIcon from '~/assets/icons/people.svg?react';

const notifications = [
    { icon: HeartIcon, count: 185 },
    { icon: PeopleIcon, count: 589 },
    { icon: HeartEyesIcon, count: 587 },
];

export const NotificationIcons = () => (
    <Flex direction={{ base: 'row', lg: 'column' }} alignItems='center' gap={{ base: 3, lg: 10 }}>
        {notifications.map(({ icon, count }, index) => (
            <Flex key={index} alignItems='center' gap={2}>
                <Icon as={icon} />
                <Text color='lime.600' textStyle='body16SemiBold'>
                    {count}
                </Text>
            </Flex>
        ))}
    </Flex>
);
