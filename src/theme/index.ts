import { extendTheme } from '@chakra-ui/react';

import { Button } from '~/theme/components/button';
import { Container } from '~/theme/components/container';
import { Input } from '~/theme/components/input';
import { breakpoints } from '~/theme/foundations/breakpoints';
import { colors } from '~/theme/foundations/colors';
import { fonts } from '~/theme/foundations/fonts';
import { styles } from '~/theme/styles';
import { textStyles } from '~/theme/textStyles';

export const theme = extendTheme({
    fonts,
    breakpoints,
    colors,
    styles,
    textStyles,
    components: {
        Button,
        Input,
        Container,
    },
});
