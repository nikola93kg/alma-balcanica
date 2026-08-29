import type { TourOperator } from "@/types/travel";

export const operators = [
  {
    id: "victor-tours",
    name: "Victor Tours",
    country: {
      es: "Serbia",
      en: "Serbia",
    },
    license: "OTP 22/2025",
    licenseCategory: {
      es: "Categoría A",
      en: "Category A",
    },
  },
] satisfies TourOperator[];

export const victorTours = operators[0];

export function getOperator(operatorId?: string) {
  if (!operatorId) {
    return undefined;
  }

  return operators.find((operator) => operator.id === operatorId);
}
