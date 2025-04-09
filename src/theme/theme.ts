import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        heading: '"Inter", sans-serif',
        body: '"Inter", sans-serif',
        second: '"Roboto", sans-serif',
    },
    breakpoints: {
        base: '0em',
        sm: '22.5em',
        md: '48em',
        lg: '90em',
        xl: '120em',
    },
    colors: {
        lime: {
            50: '#F9FBE7',
            100: '#F0F4C3',
            200: '#E6EE9C',
            300: '#DCE775',
            400: '#D4E157',
            500: '#CDDC39',
            600: '#C0CA33',
            700: '#AFB42B',
            800: '#9E9D24',
            900: '#827717',
        },
    },
    styles: {
        global: {
            body: {
                margin: 0,
                padding: 0,
                color: 'black',
            },
            '*::-webkit-scrollbar': {
                width: '8px',
            },
            '*::-webkit-scrollbar-track': {
                backgroundColor: 'blackAlpha.50',
                borderRadius: '4px',
            },
            '*::-webkit-scrollbar-thumb': {
                backgroundColor: 'blackAlpha.300',
                borderRadius: '4px',
            },
            '*::-webkit-scrollbar-button': {
                display: 'none',
            },
        },
    },
    textStyles: {
        userName: {
            fontFamily: 'heading',
            fontWeight: 'medium',
            fontSize: '18px',
            lineHeight: '28px',
        },
        userNickname: {
            fontFamily: 'heading',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '20px',
            color: 'blackAlpha.600',
        },
        body14: {
            fontFamily: 'heading',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '20px',
        },
        body16: {
            fontFamily: 'heading',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '24px',
        },
        body16Muted: {
            fontFamily: 'heading',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '24px',
            color: 'blackAlpha.600',
        },
        heading20: {
            fontFamily: 'heading',
            fontWeight: 'medium',
            fontSize: '20px',
            lineHeight: '28px',
        },
        heading48: {
            fontFamily: 'heading',
            fontWeight: 'medium',
            fontSize: '48px',
            lineHeight: '48px',
        },
        heading16: {
            fontFamily: 'heading',
            fontWeight: 'medium',
            fontSize: '16px',
            lineHeight: '24px',
        },
        headingBold48: {
            fontFamily: 'heading',
            fontWeight: 'bold',
            fontSize: '48px',
            lineHeight: '48px',
        },
        body12Muted: {
            fontFamily: 'heading',
            fontWeight: 'medium',
            fontSize: '12px',
            lineHeight: '16px',
            color: 'blackAlpha.300',
        },
        body12RegularMuted: {
            fontFamily: 'heading',
            fontWeight: 'normal',
            fontSize: '12px',
            lineHeight: '16px',
            color: 'blackAlpha.600',
        },
        body12SemiBold: {
            fontFamily: 'heading',
            fontWeight: 'semibold',
            fontSize: '12px',
            lineHeight: '16px',
        },
        heading16Bold: {
            fontFamily: 'heading',
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '24px',
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontFamily: 'heading',
                borderRadius: 'md',
            },
            variants: {
                custom: {
                    fontSize: '16px',
                    fontWeight: 'semibold',
                    lineHeight: '24px',
                    bg: 'transparent',
                    _hover: { bg: 'transparent' },
                    _active: { bg: 'transparent' },
                    leftIcon: {
                        marginRight: '8px',
                    },
                },
            },
        },
    },
});
