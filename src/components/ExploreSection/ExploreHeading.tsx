import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';

interface ExploreHeadingProps {
    title: string;
}

export const ExploreHeading = ({ title }: ExploreHeadingProps) => {
    const textStyle = useBreakpointValue({
        base: 'heading24Bold',
        lg: 'headingBold48',
    });

    return (
        <Flex justify='center' pl={2}>
            <Text textStyle={textStyle}>{title}</Text>
        </Flex>
    );
};
