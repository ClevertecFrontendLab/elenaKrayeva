import { Box, Collapse, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { combinePaths } from '~/utils/routeHelpers';

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
    const navigate = useNavigate();
    const { label, path, icon: IconComponent, children } = item;
    const hasChildren = Array.isArray(children) && children.length > 0;

    const isCurrent = activeId === item.id;
    const isChildActive = hasChildren ? children!.some((child) => child.id === activeId) : false;
    const isActive = isCurrent || isChildActive;
    const isOpenState = hasChildren ? openItemId === item.id : false;

    const handleParentClick = () => {
        setOpenItemId(openItemId === item.id ? null : item.id);
        if (label === 'Веганская кухня' && hasChildren) {
            setActiveId(children![0].id);
            navigate(combinePaths(path, children![0].path));
        } else {
            setActiveId(item.id);
        }
    };

    const handleClick = () => {
        if (hasChildren) {
            handleParentClick();
        } else {
            setActiveId(item.id);
            setOpenItemId(null);
        }
    };

    const commonProps = {
        py: 3,
        bg: isActive ? 'lime.100' : 'transparent',
        textStyle: isActive ? 'heading16Bold' : 'heading16',
        width: '230px',
    };

    if (hasChildren) {
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
                        {children!.map((child) => (
                            <SidebarSubItem
                                key={child.id}
                                label={child.label}
                                path={combinePaths(path, child.path)}
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
