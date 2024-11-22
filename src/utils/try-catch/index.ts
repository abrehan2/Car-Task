// Imports:
import ErrorHandler from '../error';

const TryCatchBlock =
  <T>(fn: (value?: T) => Promise<T>) =>
  (value?: T) => {
    return Promise.resolve(fn(value)).catch((error: Error) => {
      return new ErrorHandler(error.message, 500);
    });
  };

export default TryCatchBlock;
