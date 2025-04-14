import { Box, Text, useBreakpointValue } from '@chakra-ui/react';

interface Props {
    title: string;
    description: string;
    alwaysShowDescription?: boolean;
    fullWidth?: boolean;
}

export const RecipeTextContent = ({
    title,
    description,
    alwaysShowDescription,
    fullWidth = false,
}: Props) => {
    const titleTextStyle = useBreakpointValue({
        base: 'heading16',
        sm: 'heading16',
        md: 'heading16',
        lg: 'userName',
        xl: 'heading20',
    });

    const titleNoOfLines = useBreakpointValue({
        base: 2,
        md: 2,
        lg: 1,
    });

    const descriptionDisplay = useBreakpointValue({
        base: alwaysShowDescription ? '-webkit-box' : 'none',
        md: alwaysShowDescription ? '-webkit-box' : 'none',
        lg: '-webkit-box',
    });

    return (
        <Box
            width={
                fullWidth
                    ? '100%'
                    : {
                          base: '154px',
                          sm: '154px',
                          md: '182px',
                          lg: '486px',
                          xl: '274px',
                      }
            }
            flex='1'
        >
            <Text
                width='100%'
                textStyle={titleTextStyle}
                noOfLines={titleNoOfLines}
                mb={2}
                title={title}
            >
                {title}
            </Text>
            <Text
                width='100%'
                textStyle='body14'
                noOfLines={3}
                sx={{
                    display: descriptionDisplay,
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}
            >
                {description}
            </Text>
        </Box>
    );
};
