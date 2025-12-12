export const shouldShowDateSeparator = (currentTimestamp: string, prevTimestamp?: string): boolean => {
    if (!prevTimestamp) return true;

    const currentDate = new Date(currentTimestamp);
    const previousDate = new Date(prevTimestamp);

    currentDate.setHours(0, 0, 0, 0);
    previousDate.setHours(0, 0, 0, 0);

    return currentDate.getTime() !== previousDate.getTime();
};

export const formatDateSeparator = (
    timestamp: number | string,
    timezone = 0,
): string => {
    const date =
        typeof timestamp === "string"
            ? new Date(timestamp)
            : new Date((timestamp + timezone) * 1000);

    return date.toLocaleDateString("uk-UA", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        ...(typeof timestamp === "number" && { timeZone: "UTC" }),
    });
};

export const formatTimeSeparator = (timestamp: number | string, timezone: number = 0): string => {
    typeof timestamp === "string"
        ? timestamp
        : (timestamp + timezone) * 1000;

    return new Date(timestamp).toLocaleTimeString('uk-UA', {
        hour: '2-digit',
        minute: '2-digit',
        ...(typeof timestamp === "number" && { timeZone: "UTC" }),
    });
};

