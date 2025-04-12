import { RefObject, useEffect, useState } from 'react';

export function useHasScroll<T extends HTMLElement>(ref: RefObject<T | null>): boolean {
    const [hasScroll, setHasScroll] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const checkScroll = () => {
            setHasScroll(element.scrollHeight > element.clientHeight);
        };

        const observer = new ResizeObserver(checkScroll);
        observer.observe(element);
        checkScroll();

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return hasScroll;
}
