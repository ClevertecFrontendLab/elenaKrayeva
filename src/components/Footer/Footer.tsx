import { Button, Flex, Text } from '@chakra-ui/react';

import LogoutIcon from '~/assets/logout_btn.svg?react';

export const Footer = () => (
    <Flex direction='column' gap={4} px={2} pb={8}>
        <Text textStyle='body12Muted'>Версия программы 03.25</Text>
        <Text textStyle='body12RegularMuted'>
            Все права защищены, <br />
            ученический файл, <br />
            ©Клевер Технолоджи, 2025
        </Text>
        <Button
            variant='custom'
            leftIcon={<LogoutIcon style={{ width: '16px', height: '16px' }} />}
            height='32px'
            justifyContent='flex-start'
            iconSpacing='1'
            padding='0'
        >
            Выйти
        </Button>
    </Flex>
);
