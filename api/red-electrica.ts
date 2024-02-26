import { ErrorResponse } from '../interfaces/errors';
import { PricesResponse } from '../interfaces/red-electrica';

const language = 'es';
type TimeOptions = 'hour' | 'day' | 'month' | 'year';

export const fetchPrices = async (
  startDate: string,
  endDate: string,
  timeOpt: TimeOptions
): Promise<PricesResponse | ErrorResponse> => {
  const apiUrl = 'datos/mercados/precios-mercados-tiempo-real';
  const apiParams = `?start_date=${startDate}&end_date=${endDate}&time_trunc=${timeOpt}`;

  const response = await fetch(
    `${process.env.RED_ELECTRICA_BASE_URL}${language}/${apiUrl}${apiParams}`
  );

  if (response.ok) {
    const data: PricesResponse = await response.json();

    return data;
  }

  return {
    ok: false,
    message: 'Hubo un error al obtener la información de precios diarios',
  };
};
