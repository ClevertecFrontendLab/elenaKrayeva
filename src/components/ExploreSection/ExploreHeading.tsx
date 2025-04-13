import { Flex, Text } from '@chakra-ui/react';

interface ExploreHeadingProps {
    title: string;
}

export const ExploreHeading = ({ title }: ExploreHeadingProps) => (
    <Flex justify='center' pl={2}>
        <Text textStyle='headingBold48'>{title}</Text>
    </Flex>
);
