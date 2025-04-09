import { Box, Container, Flex } from '@chakra-ui/react';

import { HEADER_HEIGHT } from '~/constants/layout';

import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';
import { Logo } from './Logo/Logo';
import { UserInfo } from './UserInfo/UserInfo';

export const Header = () => (
    <Box
        as='header'
        bg='lime.50'
        h={HEADER_HEIGHT}
        position='sticky'
        top='0'
        left='0'
        right='0'
        zIndex='1000'
    >
        <Container maxW='container.xl' pr={14} py={4}>
            <Flex align='center' justify='space-between'>
                <Flex align='center' gap={32} justify='space-between'>
                    <Logo />
                    <Breadcrumbs />
                </Flex>
                <UserInfo />
            </Flex>
        </Container>
    </Box>
);
