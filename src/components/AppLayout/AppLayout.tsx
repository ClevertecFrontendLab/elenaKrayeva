import { Box, Container } from '@chakra-ui/react';
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import { Notifications } from '~/components/Notifications/Notifications';
import { SidebarMenu } from '~/components/SidebarMenu/SidebarMenu';
import {
    FOOTER_HEIGHT,
    HEADER_HEIGHT,
    LEFT_SIDEBAR_WIDTH,
    RIGHT_SIDEBAR_WIDTH,
} from '~/constants/layout';
import { useHasScroll } from '~/hooks/useHasScroll';

import { MobileFooter } from '../MobileFooter/MobileFooter';

export const AppLayout = () => {
    const asideRef = useRef<HTMLDivElement>(null);
    const asideHasScroll = useHasScroll(asideRef);

    return (
        <>
            <Box
                as='header'
                bg='lime.50'
                h={HEADER_HEIGHT}
                position='fixed'
                top='0'
                left='0'
                right='0'
                zIndex='1000'
                data-test-id='header'
            >
                <Container
                    size='xl'
                    py={4}
                    pr={{ base: '16px', md: '20px', lg: '56px', xl: '56px' }}
                >
                    <Header />
                </Container>
            </Box>

            <Box
                as='aside'
                position='fixed'
                top={HEADER_HEIGHT}
                left='0'
                height={`calc(100vh - ${HEADER_HEIGHT})`}
                width={LEFT_SIDEBAR_WIDTH}
                borderRight='1px solid'
                borderColor='blackAlpha.400'
                bg='white'
                display={{ base: 'none', lg: 'block' }}
                zIndex='101'
                flexShrink={0}
            >
                <Box
                    ref={asideRef}
                    height='calc(100% - 100px)'
                    overflow='auto'
                    p={2}
                    position='relative'
                    bg='white'
                    zIndex={asideHasScroll ? 110 : undefined}
                    borderBottom={asideHasScroll ? '1px solid' : 'none'}
                    borderColor={asideHasScroll ? 'blackAlpha.400' : 'transparent'}
                    borderBottomLeftRadius={asideHasScroll ? '12px' : '0'}
                    borderBottomRightRadius={asideHasScroll ? '12px' : '0'}
                    boxShadow={asideHasScroll ? 'md' : 'none'}
                >
                    <SidebarMenu />
                </Box>
                <Box
                    as='footer'
                    bg='white'
                    height={FOOTER_HEIGHT}
                    position='absolute'
                    bottom='0'
                    left='0'
                    right='0'
                    zIndex='100'
                >
                    <Footer />
                </Box>
            </Box>

            <Box
                as='aside'
                position='fixed'
                top={HEADER_HEIGHT}
                right='0'
                height={`calc(100vh - ${HEADER_HEIGHT})`}
                width={RIGHT_SIDEBAR_WIDTH}
                pl='36px'
                bg='white'
                display={{ base: 'none', lg: 'block' }}
                zIndex='101'
            >
                <Notifications />
            </Box>

            <Box
                as='main'
                ml={{ base: '0', lg: LEFT_SIDEBAR_WIDTH }}
                mr={{ base: '0', lg: RIGHT_SIDEBAR_WIDTH }}
                pt={HEADER_HEIGHT}
                px={{ base: '16px', md: '20px', lg: '24px' }}
                mb={{ base: '100px', lg: 0 }}
            >
                <Outlet />
            </Box>

            <Box display={{ base: 'flex', md: 'flex', lg: 'none' }}>
                <MobileFooter />
            </Box>
        </>
    );
};
