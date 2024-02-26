import { ErrorResponse } from '../interfaces/errors';

export function isError<T>(pet: T | ErrorResponse): pet is ErrorResponse {
  return (pet as ErrorResponse).ok !== undefined;
}
