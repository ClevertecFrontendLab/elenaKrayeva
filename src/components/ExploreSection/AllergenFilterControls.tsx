import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, Switch, Text } from '@chakra-ui/react';

export const AllergenFilterControls = () => (
    <Flex justify='space-between' align='center'>
        <Flex align='center' gap={3} pl={3}>
            <Text textStyle='heading16'>Исключить мои аллергены</Text>
            <Switch colorScheme='green' />
        </Flex>

        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon boxSize='24px' />}
                variant='outlineLight'
                width='234px'
                pr='10px'
            >
                Выберите из списка...
            </MenuButton>
            <MenuList>
                <MenuItem value='option1'>1</MenuItem>
                <MenuItem value='option2'>2</MenuItem>
                <MenuItem value='option3'>3</MenuItem>
            </MenuList>
        </Menu>
    </Flex>
);
