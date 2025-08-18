

// date formate dd-mm-yyyy
export const dateFormate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    });
}
