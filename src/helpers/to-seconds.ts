export const toSeconds = (duration: string) => {
    const durationParts = duration.split(':').map(timePart => {
        return parseInt(timePart);
    });
    return durationParts.reduce((acc, time) => {
        return 60 * acc + time;
    });
};
