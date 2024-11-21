// Imports:
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import ErrorHandler from '../error';

const TryCatchBlock =
  (
    fn: (
      _req: NextApiRequest,
      _res: NextApiResponse
    ) => Promise<void | NextResponse<unknown>>
  ) =>
  (req: NextApiRequest, res: NextApiResponse) => {
    Promise.resolve(fn(req, res)).catch(
      (error: Error) => new ErrorHandler(error.message, 500)
    );
  };

export default TryCatchBlock;
