import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';

import { Breadcrumbs } from '~/components/Header/Breadcrumbs/Breadcrumbs';
import { Logo } from '~/components/Header/Logo/Logo';
import { UserInfo } from '~/components/Header/UserInfo/UserInfo';
import { NotificationIcons } from '~/components/Notifications/NotificationIcons';

export const Header = () => (
    <Flex align='center' justify='space-between'>
        <Flex align='center' gap={32} justify='space-between'>
            <Logo />
            <Flex display={{ base: 'none', lg: 'flex' }}>
                <Breadcrumbs />
            </Flex>
        </Flex>

        <Flex display={{ base: 'none', lg: 'flex' }}>
            <UserInfo />
        </Flex>

        <Flex align='center' gap={3} display={{ base: 'flex', lg: 'none' }}>
            <NotificationIcons />
            <IconButton
                aria-label='Open menu'
                icon={<HamburgerIcon />}
                variant='ghost'
                width='48px'
                height='48px'
            />
        </Flex>
    </Flex>
);
