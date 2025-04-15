import { Avatar, Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';

import avatarImage from '~/assets/avatars/avatar.png';
import HomeIcon from '~/assets/icons/home.svg?react';
import SearchIcon from '~/assets/icons/search.svg?react';
import EditIcon from '~/assets/icons/write.svg?react';
import { FOOTER_MOBILE_HEIGHT } from '~/constants/layout';

export const MobileFooter = () => {
    const user = {
        avatarUrl: avatarImage,
    };

    return (
        <Flex
            as='footer'
            position='fixed'
            bottom='0'
            left='0'
            right='0'
            zIndex='1000'
            bg='lime.50'
            borderTop='1px solid'
            borderColor='blackAlpha.200'
            justify='space-between'
            align='center'
            px={2}
            py={1}
            data-test-id='footer'
        >
            <FooterButton icon={HomeIcon} label='Главная' size='40px' />
            <FooterButton icon={SearchIcon} label='Поиск' size='48px' />
            <FooterButton icon={EditIcon} label='Записать' size='48px' />
            <FooterButton
                icon={
                    <Avatar
                        src={user.avatarUrl}
                        name='Екатерина Константинопольская'
                        boxSize='40px'
                    />
                }
                label='Мой профиль'
                size='40px'
            />
        </Flex>
    );
};

interface FooterButtonProps {
    icon: React.ElementType | React.ReactElement;
    label: string;
    size?: string;
    textStyle?: string;
}

const FooterButton = ({ icon, label, size = '40px', textStyle }: FooterButtonProps) => {
    const isGlowing = label === 'Главная';
    const appliedTextStyle = textStyle ?? (isGlowing ? 'body12' : 'body12RegularStrong');

    return (
        <Flex
            direction='column'
            align='center'
            justify='flex-end'
            flex='1'
            height={FOOTER_MOBILE_HEIGHT}
            pt={2}
            pb={1}
        >
            <Box
                position='relative'
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='64px'
                height='64px'
                mb={1}
            >
                {isGlowing && (
                    <Box
                        position='absolute'
                        top='50%'
                        left='50%'
                        transform='translate(-50%, -50%)'
                        width='64px'
                        height='64px'
                        borderRadius='full'
                        bg='radial-gradient(circle, #C4FF61 0%, #FFFFFF 100%)'
                        filter='blur(12px)'
                        zIndex={0}
                    />
                )}

                <Box position='relative' zIndex={1}>
                    {React.isValidElement(icon) ? (
                        <Box width={size} height={size}>
                            {icon}
                        </Box>
                    ) : (
                        <Icon as={icon} boxSize={size} />
                    )}
                </Box>
            </Box>

            <Text textStyle={appliedTextStyle} textAlign='center'>
                {label}
            </Text>
        </Flex>
    );
};
