export const Button = {
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
        outlineLight: {
            fontSize: '16px',
            fontWeight: 'normal',
            lineHeight: '24px',
            color: 'blackAlpha.700',
            border: '1px solid',
            borderColor: 'gray.300',
            _hover: {
                bg: 'transparent',
            },
        },
    },
};
