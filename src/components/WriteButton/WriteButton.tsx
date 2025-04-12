import { Box, Icon, Text, VStack } from '@chakra-ui/react';

import WriteButtonIcon from '~/assets/writeButton.svg?react';

export const WriteButton = () => (
    <Box
        width='208px'
        height='208px'
        pl={7}
        position='relative'
        borderRadius='xl'
        bg='transparent'
        cursor='pointer'
        overflow='hidden'
    >
        <Box
            position='absolute'
            top='45%'
            left='50%'
            transform='translate(-50%, -50%)'
            width='104px'
            height='104px'
            bg='radial-gradient(circle, #C4FF61 0%, #FFFFFF 100%)'
            zIndex={0}
            borderRadius='full'
            filter='blur(20px)'
        />
        <VStack
            position='relative'
            zIndex={1}
            height='100%'
            align='center'
            justify='center'
            spacing='12px'
        >
            <Icon as={WriteButtonIcon} width='48px' height='48px' />
            <Text textStyle='body12RegularStrong' textAlign='center'>
                Записать рецепт
            </Text>
        </VStack>
    </Box>
);
