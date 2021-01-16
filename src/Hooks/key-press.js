import { useEffect } from 'react';

export const useKeyPress = (key, callback) => {

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (key === e.key || key === e.keyCode)
                callback()
        }

        document.addEventListener('keypress', handleKeyPress);

        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, [key, callback])

    return;
}