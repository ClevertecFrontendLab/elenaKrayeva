import { Box, Flex } from '@chakra-ui/react';

import { NotificationIcons } from '~/components/Notifications/NotificationIcons';
import { WriteButton } from '~/components/WriteButton/WriteButton';

export const Notifications = () => (
    <Flex direction='column' height='100%' pt={3} display={{ base: 'none', lg: 'flex' }}>
        <Box pt={3} pl={6} flex='1'>
            <NotificationIcons />
        </Box>
        <WriteButton />
    </Flex>
);
