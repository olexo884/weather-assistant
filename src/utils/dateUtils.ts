export const shouldShowDateSeparator = (currentTimestamp: number, prevTimestamp?: number): boolean => {
    if (!prevTimestamp) return true; 

    const currentDate = new Date(currentTimestamp * 1000);
    const previousDate = new Date(prevTimestamp * 1000);

    currentDate.setHours(0, 0, 0, 0);
    previousDate.setHours(0, 0, 0, 0);

    return currentDate.getTime() !== previousDate.getTime();
};

export const formatDateSeparator = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleDateString('uk-UA', { 
        year: '2-digit', 
        month: '2-digit', 
        day: '2-digit' 
    }); 
};