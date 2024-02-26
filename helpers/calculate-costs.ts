import { ErrorResponse } from '../interfaces/errors';
import { PricesResponse } from '../interfaces/red-electrica';

export const calculateCostFromAverageDay = (
  prices: PricesResponse,
  wHour: number
): number | ErrorResponse => {
  const pvpcCostData = prices.included.find((item) => item.type.includes('PVPC'));
  const priceValues = pvpcCostData?.attributes.values;
  if (!priceValues) {
    return {
      ok: false,
      message: 'Error al obtener los datos horarios del coste',
    };
  }

  const totalHourCost: number = priceValues.reduce((total, currentValue) => {
    return total + currentValue.value;
  }, 0);

  const averageCost = Math.round((totalHourCost / priceValues.length) * 100) / 100;
  const kwhCost = averageCost / 1000;

  const kwHourAppliance = wHour / 1000;

  return Math.round(kwHourAppliance * kwhCost * 10000) / 10000;
};
