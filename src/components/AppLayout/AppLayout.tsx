import { Box, Container, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import { SidebarMenu } from '~/components/SidebarMenu/SidebarMenu';
import {
    FOOTER_HEIGHT,
    HEADER_HEIGHT,
    LEFT_SIDEBAR_WIDTH,
    RIGHT_SIDEBAR_WIDTH,
} from '~/constants/layout';

export const AppLayout = () => (
    <>
        <Header />
        <Container maxW='container.xl' height={`calc(100vh - ${HEADER_HEIGHT})`} px='10px'>
            <Flex width='100%' height={`calc(100vh - ${HEADER_HEIGHT})`}>
                <Box
                    height={`calc(100vh - ${HEADER_HEIGHT})`}
                    width={LEFT_SIDEBAR_WIDTH}
                    overflow='hidden'
                    position='relative'
                    borderRight='1px solid'
                    borderColor='blackAlpha.400'
                >
                    <Box
                        as='aside'
                        height='calc(100% - 100px)'
                        overflow='auto'
                        borderBottomLeftRadius='12px'
                        borderBottomRightRadius='12px'
                        boxShadow='md'
                        mr={1}
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
                        z-index='100'
                    >
                        <Footer />
                    </Box>
                </Box>
                <Box as='main' height={`calc(100vh - ${HEADER_HEIGHT})`} flex='1' overflow='auto'>
                    <Outlet />
                </Box>
                <Box
                    as='aside'
                    bg='red'
                    height={`calc(100vh - ${HEADER_HEIGHT})`}
                    width={RIGHT_SIDEBAR_WIDTH}
                ></Box>
            </Flex>
        </Container>
    </>
);
