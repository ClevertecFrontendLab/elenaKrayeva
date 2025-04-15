export const getBreadcrumbsFromPath = (pathname: string) =>
    pathname
        .split('/')
        .filter(Boolean)
        .map((segment, index, arr) => ({
            segment,
            path: `/${arr.slice(0, index + 1).join('/')}`,
        }));
