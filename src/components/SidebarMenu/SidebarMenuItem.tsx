import { Box, Collapse, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { SidebarMenuButton } from './SidebarMenuButton';
import { SidebarSubItem } from './SidebarSubItem';
import type { MenuItem } from './types';

interface SidebarMenuItemProps {
    item: MenuItem;
    activeId: string | null;
    setActiveId: (id: string) => void;
    openItemId: string | null;
    setOpenItemId: (id: string | null) => void;
}

export const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
    item,
    activeId,
    setActiveId,
    openItemId,
    setOpenItemId,
}) => {
    const { label, path, icon: IconComponent, children } = item;

    const isCurrent = activeId === item.id;
    const isChildActive = children?.some((child) => child.id === activeId);
    const isActive = isCurrent || isChildActive;
    const isOpenState = children ? openItemId === item.id : false;

    const handleClick = () => {
        setActiveId(item.id);
        if (children) {
            setOpenItemId(openItemId === item.id ? null : item.id);
        } else {
            setOpenItemId(null);
        }
    };

    const commonProps = {
        py: 3,
        bg: isActive ? 'lime.100' : 'transparent',
        textStyle: isActive ? 'heading16Bold' : 'heading16',
        width: '230px',
    };

    if (children) {
        return (
            <>
                <Flex
                    as='button'
                    onClick={handleClick}
                    align='center'
                    justify='space-between'
                    w='100%'
                    aria-expanded={isOpenState}
                    {...commonProps}
                >
                    <SidebarMenuButton
                        label={label}
                        IconComponent={IconComponent}
                        isOpen={isOpenState}
                        hasChildren
                    />
                </Flex>

                <Collapse in={isOpenState} animateOpacity>
                    <Box pl={7}>
                        {children.map((child) => (
                            <SidebarSubItem
                                key={child.id}
                                label={child.label}
                                path={child.path}
                                active={activeId === child.id}
                                onClick={() => setActiveId(child.id)}
                            />
                        ))}
                    </Box>
                </Collapse>
            </>
        );
    }

    return (
        <Flex
            as={RouterLink}
            to={path}
            onClick={handleClick}
            align='center'
            justify='space-between'
            w='100%'
            {...commonProps}
        >
            <SidebarMenuButton
                label={label}
                IconComponent={IconComponent}
                isOpen={false}
                hasChildren={false}
            />
        </Flex>
    );
};
