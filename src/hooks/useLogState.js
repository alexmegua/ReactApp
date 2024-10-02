import { useEffect } from 'react';

const useLogState = (name, value) => {
  useEffect(() => {
    console.log(`${name} value:`, value);
  }, [value]);
};

export default useLogState;

