import { FC, SVGProps } from 'react';

export interface Category {
    name: string;
    icon: FC<SVGProps<SVGSVGElement>>;
}
