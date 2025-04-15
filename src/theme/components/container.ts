import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sizes = {
    xl: defineStyle({
        maxW: '1920px',
        px: '4',
    }),
    lg: defineStyle({
        maxW: '1440px',
        px: '4',
    }),
    md: defineStyle({
        maxW: '768px',
        px: '4',
    }),
    sm: defineStyle({
        maxW: '360px',
        px: '4',
    }),
};

const baseStyle = {
    w: '100%',
    mx: 'auto',
};

export const Container = defineStyleConfig({
    baseStyle,
    sizes,
});
