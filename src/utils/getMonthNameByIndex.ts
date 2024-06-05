export function getMonthNameByIndex(monthIndex: number): MonthName {
  if (monthIndex < 0 || monthIndex > 11) {
    throw new Error(
      `Invalid month index provided => ${monthIndex}. Must be 0-11`,
    );
  }

  return monthList[monthIndex];
}

type MonthName = (typeof monthList)[number];

const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;
