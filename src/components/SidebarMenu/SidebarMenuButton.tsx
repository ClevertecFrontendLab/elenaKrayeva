import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
    label: string;
    IconComponent?: React.ElementType;
    isOpen: boolean;
    hasChildren: boolean;
}

export const SidebarMenuButton: FC<Props> = ({ label, IconComponent, isOpen, hasChildren }) => (
    <Flex align='center' justify='space-between' w='100%'>
        <Flex align='center' gap={3} pl={2}>
            {IconComponent && <Icon as={IconComponent} style={{ width: 24, height: 24 }} />}
            <Text textAlign='left' pl={0.5}>
                {label}
            </Text>
        </Flex>
        <Icon
            as={ChevronDownIcon}
            boxSize={6}
            transform={hasChildren ? (isOpen ? 'rotate(180deg)' : 'rotate(0)') : 'rotate(0)'}
            transition={hasChildren ? 'transform 0.2s' : undefined}
        />
    </Flex>
);
