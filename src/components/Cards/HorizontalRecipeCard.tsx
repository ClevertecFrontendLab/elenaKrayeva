import { Button, Flex, Icon, Text } from '@chakra-ui/react';

interface HorizontalRecipeCardProps {
    icon: React.ElementType;
    title: string;
    buttonText?: string;
    onClick?: () => void;
}

export const HorizontalRecipeCard = ({
    icon,
    title,
    buttonText = 'Готовить',
    onClick,
}: HorizontalRecipeCardProps) => (
    <Flex
        align='center'
        gap={3}
        py={3}
        px={6}
        border='1px solid'
        borderColor='blackAlpha.200'
        borderRadius='8px'
        minW={0}
    >
        <Icon as={icon} boxSize={5} flexShrink={0} />
        <Text
            flex='1'
            isTruncated
            noOfLines={1}
            whiteSpace='nowrap'
            overflow='hidden'
            textOverflow='ellipsis'
        >
            {title}
        </Text>
        <Button
            variant='outline'
            borderColor='lime.600'
            color='lime.600'
            _hover={{ bg: 'lime.50' }}
            height='32px'
            onClick={onClick}
            flexShrink={0}
        >
            {buttonText}
        </Button>
    </Flex>
);
