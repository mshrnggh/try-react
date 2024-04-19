import { useState, useCallback } from 'react';

export const useDisplayList = () => {
    const [isShow, setIsShow] = useState(true);
    const handleDisplay = useCallback(() => { setIsShow(!isShow); });
    return {isShow, handleDisplay};
}