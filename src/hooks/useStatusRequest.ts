import { useState } from 'react';

type statusRequest = 'idle' | 'doing' | 'too long';

export const useStatusRequest = <T>(initialState: T) => {
  const [statusRequest, setStatusRequest] = useState<statusRequest>('idle');
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<T>(initialState);

  return {
    statusRequest,
    setStatusRequest,
    error,
    setError,
    data,
    setData,
  };
};
