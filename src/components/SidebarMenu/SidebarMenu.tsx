import { Box } from '@chakra-ui/react';
import { useState } from 'react';

import { menuItems } from './menuItems';
import { SidebarMenuItem } from './SidebarMenuItem';
import type { MenuItem } from './types';

export const SidebarMenu = () => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [openItemId, setOpenItemId] = useState<string | null>(null);

    return (
        <Box pt={9}>
            {menuItems.map((item: MenuItem) => (
                <SidebarMenuItem
                    key={item.id}
                    item={item}
                    activeId={activeId}
                    setActiveId={setActiveId}
                    openItemId={openItemId}
                    setOpenItemId={setOpenItemId}
                />
            ))}
        </Box>
    );
};
