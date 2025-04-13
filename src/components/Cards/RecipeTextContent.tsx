import { Box, Text } from '@chakra-ui/react';

interface Props {
    title: string;
    description: string;
}

export const RecipeTextContent = ({ title, description }: Props) => (
    <Box maxW='274px'>
        <Text textStyle='heading20' isTruncated title={title} mb={2}>
            {title}
        </Text>
        <Text textStyle='body14' color='blackAlpha.700' noOfLines={3}>
            {description}
        </Text>
    </Box>
);
