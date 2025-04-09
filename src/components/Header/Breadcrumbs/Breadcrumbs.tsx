import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { getBreadcrumbsFromPath } from '~/utils/parseBreadcrumbs';

import { breadcrumbLabels } from './Labels';

export const Breadcrumbs = () => {
    const location = useLocation();
    const breadcrumbs = useMemo(
        () =>
            getBreadcrumbsFromPath(location.pathname).map((item) => ({
                ...item,
                id: uuidv4(),
            })),
        [location.pathname],
    );

    return (
        <Breadcrumb spacing={2} separator='>'>
            <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to='/' textStyle='body16'>
                    {breadcrumbLabels['']}
                </BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs.map(({ segment, path, id }, index) => {
                const label = breadcrumbLabels[segment] || segment;
                const isLast = index === breadcrumbs.length - 1;
                const key = `breadcrumb-${id}`;

                return (
                    <BreadcrumbItem key={key} isCurrentPage={isLast}>
                        <BreadcrumbLink
                            as={RouterLink}
                            to={path}
                            textStyle={isLast ? 'body16' : 'body16Muted'}
                            pointerEvents={isLast ? 'none' : undefined}
                            _hover={isLast ? { textDecoration: 'none' } : {}}
                        >
                            {label}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
