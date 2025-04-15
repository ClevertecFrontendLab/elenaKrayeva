export const styles = {
    global: {
        'html, body, #root': {
            margin: 0,
            padding: 0,
            overflowX: 'hidden',
            boxSizing: 'border-box',
        },
        '*::-webkit-scrollbar': {
            width: '8px',
        },
        '*::-webkit-scrollbar-track': {
            backgroundColor: 'blackAlpha.50',
            borderRadius: '4px',
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'blackAlpha.300',
            borderRadius: '4px',
        },
        '*::-webkit-scrollbar-button': {
            display: 'none',
        },
    },
};
