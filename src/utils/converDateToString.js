// convert date to string
export const convertDateToString = (date) => {
    date = new Date(date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // add 0 to month and day if they are less than 10
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    const dateString = `${year}-${month}-${day}`;

    return dateString;
}