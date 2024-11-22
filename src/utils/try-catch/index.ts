// Imports:
import ErrorHandler from '../error';

const TryCatchBlock =
  <T>(fn: () => Promise<T>) =>
  () => {
    return Promise.resolve(fn()).catch((error: Error) => {
      return new ErrorHandler(error.message, 500);
    });
  };

export default TryCatchBlock;
