import { Request, Response } from 'express';

export const getCost = (req: Request, res: Response) => {
  console.log('entramos');
  res.json({
    ok: true,
    msg: 'primera petición loquete',
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
