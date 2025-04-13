import { Flex, Icon, Text } from '@chakra-ui/react';

import { Category } from '~/components/Cards/types';

interface Props {
    saves?: number;
    likes?: number;
    badgeBgColor?: string;
    category: Category;
    HeartIcon?: React.ElementType;
    HeartEyesIcon?: React.ElementType;
}

export const RecipeCategoryBadge = ({
    category,
    saves,
    likes,
    badgeBgColor = 'lime.150',
    HeartIcon,
    HeartEyesIcon,
}: Props) => (
    <Flex justify='space-between' align='center' mt='auto' color='blackAlpha.600'>
        <Flex
            align='center'
            gap={2}
            bgColor={badgeBgColor}
            px={2}
            borderRadius={4}
            py='2px'
            color='black'
        >
            <Icon as={category.icon} boxSize={4} />
            <Text fontSize='sm'>{category.name}</Text>
        </Flex>

        <Flex gap={2}>
            {saves && (
                <Flex align='center' gap='6px'>
                    <Icon as={HeartIcon} width='12px' height='12px' />
                    <Text textStyle='body14' color='lime.600'>
                        {saves}
                    </Text>
                </Flex>
            )}
            {likes && (
                <Flex align='center' gap='6px'>
                    <Icon as={HeartEyesIcon} width='12px' height='12px' />
                    <Text textStyle='body14' color='lime.600'>
                        {likes}
                    </Text>
                </Flex>
            )}
        </Flex>
    </Flex>
);
