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
