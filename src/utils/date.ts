import { DateUnits } from '../types';

export function daysInMonth(month: number, year: number): number {
  switch (month) {
    case 2:
      return (year % 4 == 0 && year % 100) || year % 400 == 0 ? 29 : 28;
    case 9:
    case 4:
    case 6:
    case 11:
      return 30;
    default:
      return 31;
  }
}

export function isValid(day: number, month: number, year: number): boolean {
  return month >= 1 && month < 13 && day > 0 && day <= daysInMonth(month, year);
}

export function getDate({ day, month, year }: DateUnits): Date | undefined {
  if (day === undefined || month === undefined || year === undefined) return undefined;

  return isValid(day, month, year) ? new Date(year, month - 1, day) : undefined;
}
