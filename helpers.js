export function formatReadableTime(dateString) {
    const date = new Date(dateString);
    const hour = date.getHours();
    const minute = date.getMinutes();
    
    let period = 'am';
    let formattedHour = hour;
  
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
        return `${formattedHour}.${formattedMinute}${period}`;
    } else {
        return `${formattedHour}${period}`;
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

export const getShowInPrismic = ({ residentsData, currentShow }) => {
  if (!currentShow || !residentsData) return SHOW_NOT_FOUND;
  let toLowerCase;
  const currentShowName = parseShowName(currentShow);
  if (currentShowName) {
    toLowerCase = currentShowName.toLowerCase();
  }
  if (residentsData.length > 0 && toLowerCase) {
    const filtered = residentsData.filter((resident) => {
      if (toLowerCase.includes("lunch")) {
        return toLowerCase === resident.data.show_title.toLowerCase();
      }
      return toLowerCase.includes(resident.data.show_title.toLowerCase());
    });
    if (filtered.length > 0) {
      return filtered[0];
    } else {
      return SHOW_NOT_FOUND;
    }
  }
};

export const parseShowName = (currentShow) => {
  let parsedShowName = null;
  if (currentShow !== null) {
    parsedShowName = currentShow.name;
    parsedShowName = sanitiseString(parsedShowName);
  }
  return parsedShowName;
};
