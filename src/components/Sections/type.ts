export interface VerticalCard {
    id: string;
    title: string;
    description: string;
    category: {
        name: string;
        icon: React.ElementType;
    };
    saves?: number;
    likes?: number;
}

export interface HorizontalCard {
    id: string;
    icon: React.ElementType;
    title: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

export interface RecipeSectionProps {
    sectionTitle: string;
    sectionDescription: string;
    verticalCards: VerticalCard[];
    horizontalCards: HorizontalCard[];
    heartIcon: React.ElementType;
    heartEyesIcon: React.ElementType;
}
