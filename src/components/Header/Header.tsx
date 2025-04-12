import { Flex } from '@chakra-ui/react';

import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';
import { Logo } from './Logo/Logo';
import { UserInfo } from './UserInfo/UserInfo';

export const Header = () => (
    <Flex align='center' justify='space-between' pr='56px'>
        <Flex align='center' gap={32} justify='space-between'>
            <Logo />
            <Breadcrumbs />
        </Flex>
        <UserInfo />
    </Flex>
);
