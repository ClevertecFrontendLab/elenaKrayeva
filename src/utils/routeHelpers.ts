export const combinePaths = (parentPath: string, childPath: string) =>
    `${parentPath.replace(/\/$/, '')}/${childPath}`;
