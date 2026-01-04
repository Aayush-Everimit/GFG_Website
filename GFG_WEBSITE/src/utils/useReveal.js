import { useEffect, useRef, useState } from "react";

export default function useReveal(threshold = 0.2) {
    const ref = useRef(null);
    const [isVisible, setVisible] = useState(false);
    const [animationTrigger, setAnimationTrigger] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const wasVisible = isVisible;
                setVisible(entry.isIntersecting);
                if (!wasVisible && entry.isIntersecting) {
                    setAnimationTrigger(prev => prev + 1);
                }
            },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, isVisible]);

    return [ref, isVisible, animationTrigger];
}
