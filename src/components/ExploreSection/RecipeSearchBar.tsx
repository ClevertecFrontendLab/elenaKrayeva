import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Icon, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import FilterIcon from '~/assets/filter.svg?react';

export const RecipeSearchBar = () => (
    <Flex gap={3} align='center' pl={1}>
        <IconButton
            aria-label='Фильтр'
            icon={<Icon as={FilterIcon} boxSize='24px' />}
            variant='outline'
            borderColor='blackAlpha.600'
            height='48px'
            width='48px'
        />
        <InputGroup flex={1}>
            <Input placeholder='Название или ингредиент...' variant='searchLarge' pr='48px' />
            <InputRightElement
                pointerEvents='none'
                display='flex'
                alignItems='center'
                height='100%'
                pr={3}
            >
                <SearchIcon color='blackAlpha.800' boxSize='20px' />
            </InputRightElement>
        </InputGroup>
    </Flex>
);
