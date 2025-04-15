import { Link } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import LogoIconFull from '~/assets/icons/logo.svg?react';
import LogoIconSymbol from '~/assets/icons/logoSymbol.svg?react';

export const Logo = () => {
    const LogoIcon = useBreakpointValue({
        base: LogoIconSymbol,
        md: LogoIconFull,
    });

    const logoWidth = useBreakpointValue({
        base: '32px',
        md: '135px',
    });

    const logoHeight = useBreakpointValue({
        base: '32px',
        md: '32px',
    });

    if (!LogoIcon) return null;

    return (
        <Link as={RouterLink} to='/' _hover={{ textDecoration: 'none' }} display='inline-block'>
            <LogoIcon style={{ width: logoWidth, height: logoHeight }} />
        </Link>
    );
};
