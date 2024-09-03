import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  parse,
} from "date-fns";

export const calculatePatientAge = (
  birthDateString: string,
  deceaseDateString?: string | null,
): string => {
  const birthDate = parse(birthDateString, "dd.MM.yyyy", new Date());
  const deceaseDate = deceaseDateString
    ? parse(deceaseDateString, "dd.MM.yyyy", new Date())
    : new Date();
  const years = differenceInYears(deceaseDate, birthDate);
  if (years === 0) {
    const months = differenceInMonths(deceaseDate, birthDate);
    if (months === 0) {
      const days = differenceInDays(deceaseDate, birthDate);
      return `${days} giorni`;
    }
    return `${months} mesi`;
  }
  return `${years} anni`;
};
