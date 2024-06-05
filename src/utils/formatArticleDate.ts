import { getMonthNameByIndex } from "./getMonthNameByIndex";

export function formatArticleDate(date: Date, isAbbreviated = false): string {
  const month = date.getMonth();
  const monthName = getMonthNameByIndex(month);
  const displayedMonthName = isAbbreviated ? monthName.slice(0, 3) : monthName;

  const day = date.getDate();
  const year = date.getFullYear();

  return `${displayedMonthName} ${day}, ${year}`;
}
