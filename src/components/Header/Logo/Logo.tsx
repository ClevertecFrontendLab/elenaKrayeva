import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import LogoIcon from '~/assets/logo.svg?react';

export const Logo = () => (
    <Link as={RouterLink} to='/' _hover={{ textDecoration: 'none' }} display='inline-block'>
        <LogoIcon style={{ width: '135px', height: '32px' }} />
    </Link>
);
