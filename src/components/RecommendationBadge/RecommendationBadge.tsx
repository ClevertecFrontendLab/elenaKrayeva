import { Avatar, Box } from '@chakra-ui/react';
import React from 'react';

interface RecommendationBadgeProps {
    name: string;
    avatar?: string;
}

export const RecommendationBadge: React.FC<RecommendationBadgeProps> = ({ name, avatar }) => (
    <Box
        position='absolute'
        bottom={5}
        left={6}
        px={2}
        py='6px'
        bg='lime.150'
        color='black'
        borderRadius='md'
        display='flex'
        alignItems='center'
        textStyle='body14'
    >
        <Avatar size='xs' src={avatar} name={name} mr={2} />
        {name} рекомендует
    </Box>
);
