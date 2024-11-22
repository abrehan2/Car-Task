// Imports:
import ErrorHandler from '../error';

const TryCatchBlock = (fn: () => Promise<void | unknown>) => () => {
  return Promise.resolve(fn()).catch((error: Error) => {
    return new ErrorHandler(error.message, 500);
  });
};

export default TryCatchBlock;
