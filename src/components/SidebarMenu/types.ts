export interface MenuItem {
    id: string;
    label: string;
    path: string;
    icon?: React.ElementType;
    children?: MenuItem[];
}
