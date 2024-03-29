import { Response, Request } from 'express';
const { validationResult } = require('express-validator');

export const checkFields = (req: Request, res: Response, next) => {
  // manejo de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  next();
};
