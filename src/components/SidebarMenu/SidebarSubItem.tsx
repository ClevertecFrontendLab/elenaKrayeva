import { Box, Flex, Link } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
    label: string;
    path: string;
    active: boolean;
    onClick: () => void;
}

export const SidebarSubItem: FC<Props> = ({ label, path, active, onClick }) => (
    <Flex align='center' py={1.5} pl={1}>
        <Box width={2} minH='24px' position='relative'>
            <Box
                position='absolute'
                top='0'
                bottom='0'
                right='0'
                width={active ? '8px' : '2px'}
                bg='lime.300'
            />
        </Box>
        <Box flexShrink={0} width={3} />
        <Link
            as={RouterLink}
            to={path}
            display='block'
            textStyle={active ? 'heading16Bold' : 'heading16'}
            _hover={{ textDecoration: 'none' }}
            onClick={onClick}
        >
            {label}
        </Link>
    </Flex>
);
