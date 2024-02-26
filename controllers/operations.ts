import { Request, Response } from 'express';
import { fetchPrices } from '../api/red-electrica';
import { calculateCostFromAverageDay } from '../helpers/calculate-costs';
import { isError } from '../type-guards/error-type-guard';

export const getCost = (req: Request, res: Response) => {
  console.log('entramos');
  res.json({
    ok: true,
    msg: 'primera petición loquete',
  });
};

export const getCostFromApi = async (req: Request, res: Response) => {
  const pricesData = await fetchPrices('2024-02-26T00:00', '2024-02-26T23:59', 'hour');

  if (isError(pricesData)) {
    res.json(pricesData);
    return;
  }

  const cost = calculateCostFromAverageDay(pricesData, req.body.wHour);

  if (isError(cost)) {
    res.json(cost);
  }

  res.json({
    ok: true,
    costOfAppliance: cost,
  });
};

export const getDiaryCost = (req: Request, res: Response) => {
  console.log('posteado correctamente');
  console.log(req.body);

  res.json({
    ok: true,
    msg: 'primera petición fjsadfksañ',
  });
};
