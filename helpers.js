export function formatReadableTime(dateString) {
  const date = new Date(dateString);
  const hour = date.getHours();
  const minute = date.getMinutes();

  let period = 'am';
  let formattedHour = hour;
  let formattedTime = "";

  // Convert to 12-hour format
  if (hour >= 12) {
    period = 'pm';
    formattedHour = hour === 12 ? 12 : hour - 12;
  }

  // Ensure single-digit hours have a leading zero
  // formattedHour = formattedHour.toString().padStart(2, '0');

  // Ensure single-digit minutes have a leading zero
  const formattedMinute = minute.toString().padStart(2, '0');

  if (formattedMinute != 0) {
    formattedTime = `${formattedHour}.${formattedMinute}${period}`;
    return formattedTime;
  } else {
    formattedTime = `${formattedHour}${period}`;
    if (formattedTime === '0am') { //midnight defaults to 0am, so this fixes it to say 12am
      return '12am';
    } else {
      return formattedTime;
    }
  }
};

// To check that start times aren't NaN
export function isNumeric(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

export function format24hTime(dateString) {
  // First, ensure the input is a string representation of a date
  if (typeof dateString !== 'string') {
    return ' ';
  }

  const parsedDate = new Date(dateString);

  // Check if parsing the date was successful and not NaN
  if (!Number.isNaN(parsedDate.getTime())) {
    const hour = parsedDate.getHours();
    const minute = parsedDate.getMinutes();
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  } else {
    return ' ';
  }
}


// Prismic helpers:
export const SHOW_NOT_FOUND = "SHOW_NOT_FOUND";

const parsedForInvertedCommas = (string) => string.replace(/&#039;/g, "'");
const parsedForAmpersands = (string) => string.replace(/&amp;/g, "&");

export const sanitiseString = (string) => {
  let noAmpersands = parsedForAmpersands(string);
  let andNoCommas = parsedForInvertedCommas(noAmpersands);
  return andNoCommas;
};

export const getShowInPrismic = ({ residentsData, currentShowData }) => {
  if (!currentShowData) { console.log("helpers.js // getShowInPrismic() // currentShowData is empty") };
  if (!residentsData) { console.log("helpers.js // getShowInPrismic() // residentsData is empty") };
  if (!currentShowData || !residentsData) {
    return SHOW_NOT_FOUND
  };
  let toLowerCase;
  const currentShowDataName = parseShowName(currentShowData);
  // console.log("helpers.js // getShowInPrismic() // currentShowDataName: ", currentShowDataName);
  if (currentShowDataName) {
    toLowerCase = currentShowDataName.toLowerCase();
    // console.log("helpers.js // getShowInPrismic() // toLowerCase: ", toLowerCase);
  }
  if (residentsData.length > 0 && toLowerCase) {
    // console.log("helpers.js // getShowInPrismic() // residentsData.length is > 0.");

    const filtered = residentsData.filter((resident) => {
      if (toLowerCase.includes("lunch")) {
        return toLowerCase === resident.data.show_title.toLowerCase();
      }
      // console.log("helpers.js // getShowInPrismic() // (resident.data.show_title.toLowerCase()): ", resident.data.show_title.toLowerCase());
      return toLowerCase.includes(resident.data.show_title.toLowerCase());
    });
    // console.log("helpers.js // getShowInPrismic() // filtered: ", filtered);

    if (filtered.length > 0) {
      // console.log("helpers.js // getShowInPrismic() // filtered[0]: ", filtered[0]);
      return filtered[0];
    } else {
      console.log("helpers.js // getShowInPrismic() // filtered[0] is shorter than 1");
      return SHOW_NOT_FOUND;
    }
  }
};

export const parseShowName = (currentShowData) => {
  let parsedShowName = null;
  if (currentShowData !== null) {
    parsedShowName = currentShowData.name;
    parsedShowName = sanitiseString(parsedShowName);
  }
  return parsedShowName;
};