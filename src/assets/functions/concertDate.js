//criate a function to convert the data to 'Day Month Year':
export function convertDate(dateStr) {
  const monthEn = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(dateStr); //Date() constructor
  const day = date.getDate(); //getDate() method returns the day of the month in the parameter 'dateStr'
  const month = date.getMonth(); //getMonth() method returns the month in the parameter 'dateStr'
  const year = date.getFullYear(); //getFullYear() method returns the year in the parameter 'dateStr'
  let phrase = "";

  phrase = `${day} ${monthEn[month]} ${year}`;

  return phrase;
}
