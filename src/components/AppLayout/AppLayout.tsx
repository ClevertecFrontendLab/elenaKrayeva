import { Box, Container, Flex } from '@chakra-ui/react';
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import { Notifications } from '~/components/Notifications/Notifications';
import { SidebarMenu } from '~/components/SidebarMenu/SidebarMenu';
import {
    FOOTER_HEIGHT,
    FOOTER_MOBILE_HEIGHT,
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
                position='sticky'
                top='0'
                left='0'
                right='0'
                zIndex='1000'
            >
                <Container
                    size='xl'
                    py={4}
                    pr={{ base: '16px', md: '20px', lg: '56px', xl: '56px' }}
                >
                    <Header />
                </Container>
            </Box>

            <Container size='xl' height={`calc(100vh - ${HEADER_HEIGHT})`} pl='0px' pr='0'>
                <Flex width='100%' height={`calc(100vh - ${HEADER_HEIGHT})`}>
                    <Box
                        height={`calc(100vh - ${HEADER_HEIGHT})`}
                        width={LEFT_SIDEBAR_WIDTH}
                        overflow='hidden'
                        position='relative'
                        borderRight='1px solid'
                        borderColor='blackAlpha.400'
                        display={{ base: 'none', lg: 'block' }}
                    >
                        <Box
                            as='aside'
                            ref={asideRef}
                            height='calc(100% - 100px)'
                            overflow='auto'
                            mr={1}
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
                        as='main'
                        height={{
                            base: `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_MOBILE_HEIGHT})`,
                            md: `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_MOBILE_HEIGHT})`,
                            lg: `calc(100vh - ${HEADER_HEIGHT})`,
                        }}
                        flex='1'
                        overflowY='auto'
                        overflowX='hidden'
                        px={{ base: '16px', md: '20px', lg: '24px' }}
                        mb={{ base: '100px', lg: 0 }}
                    >
                        <Outlet />
                    </Box>
                    <Box
                        as='aside'
                        height={`calc(100vh - ${HEADER_HEIGHT})`}
                        width={RIGHT_SIDEBAR_WIDTH}
                        pl='36px'
                        display={{ base: 'none', lg: 'block' }}
                    >
                        <Notifications />
                    </Box>
                </Flex>
            </Container>
            <Box display={{ base: 'flex', md: 'flex', lg: 'none' }}>
                <MobileFooter />
            </Box>
        </>
    );
};
